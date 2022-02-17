import { Box, Flex, Text, useColorMode, useColorModeValue, List, ListItem, Spinner, toast} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import SummonerInfoBoxMultiQuery from '../../components/SummonerInfoBoxMultiQuery'
import MatchHistoryContainerMultiQuery from '../../components/MatchHistoryContainerMultiQuery'
import axios from 'axios'
import rateLimit from 'axios-rate-limit'

// FRAMER MOTION
import { motion } from 'framer-motion'
const MotionBox = motion(Box)

// LIMITER
const http = rateLimit(axios.create(), { maxRequests: 20, perMilliseconds: 1200, maxRPS: 20})

export default function Stats(){
    const router = useRouter()
    const { colorMode, toggleColorMode } = useColorMode()
    const [isFetching, setIsFetching] = useState(true)
    const [requested, setRequested] = useState(false)

    //CONFIG
    const MATCH_COUNT = 1

    //SUMMONER
    const [puuids, setPuuids] = useState([])
    const [encryptedSummonerIds, setEncryptedSummonerIds] = useState([])
    const [summonerIconIds, setSummonerIconIds] = useState([])
    const [summonerNames, setSummonerNames] = useState([])
    const [summonerDatas, setSummonerDatas] = useState([])
    const [leagueDatas, setLeagueDatas] = useState([])
    const [wantToGetMatchData, setWantToGetMatchData] = useState(false)

    // STRORE ALL MATCHES DATA FOR ALL (1-5) PLAYERS
    const [matchesAllPlayers, setMatchesAllPlayers] = useState([])
    const [multiQueryPlayerAmount, setMultiQueryPlayerAmount] = useState(0)

    const modeColorsShadowBox = useColorModeValue('rgba(255, 255, 255, 1)', 'rgba(0, 0, 0, .7)')  

    useEffect(() => {
        let summonerInfos = []
        let summonerLeagueInfos = []

        if(router.isReady){
            const multiQuerySplit = router.query.summonerNames.split(" ")
            const loopMaxIdx = multiQuerySplit.length
            setMultiQueryPlayerAmount(loopMaxIdx)
            setSummonerNames(summonerNames => [...summonerNames, multiQuerySplit])

            for(let i=0; i < loopMaxIdx; i++){
                summonerInfos.push(http.get("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"+ multiQuerySplit[i] + "?api_key=" + process.env.API_KEY))
            }

            Promise.all(summonerInfos).then(function (results){
                const loopMaxIdx = results.length
                for(let i=0; i< loopMaxIdx; i++){
                    summonerLeagueInfos.push(http.get("https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/" + results[i].data.id + "?api_key=" + process.env.API_KEY))
                }

                Promise.all([summonerInfos, summonerLeagueInfos]).then(function (results){
                    const maxIdx = results.at(0).length

                    if(summonerInfos && summonerLeagueInfos && summonerInfos.length && summonerLeagueInfos.length){
                        for(let i=0; i<maxIdx; i++){
                            results[0][i].then(res => {
                                const data = res.data
                                setPuuids(puuids => [...puuids, data.puuid])
                                setSummonerDatas(summonerDatas => [...summonerDatas, JSON.stringify(data)])
                            })
                            results[1][i].then(res => {
                                const data = res.data
                                setLeagueDatas(leagueDatas => [...leagueDatas, data])
                            })
                        }
                        setIsFetching(false)
                        setWantToGetMatchData(true)
                        return results
                    }
                    else return results
                })
            })
        }
        else{
        }
    }, [router.isReady])

    useEffect(() => {
        if(puuids && puuids.length){

        // PROMISES
        let matchIds = []
        let matches = []
        let all5playersMatches = []

        if(wantToGetMatchData && puuids.length == multiQueryPlayerAmount){            
            for(let i=0; i < multiQueryPlayerAmount; i++){
                matchIds.push(http.get("https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/" +
                    puuids[i] + "/ids?start=0&count=" + MATCH_COUNT + "&api_key=" + process.env.API_KEY))
            }

            // SHOULD BE 15 REQUESTS AT THIS POINT IF 5 SUMMONER MULTI
            // 5X2 FOR SUMMONERDATA AND 5X1 FOR SUMMONER MATCHLISTS
            // RATE LIMIT IS 20REQ/S    AND 100REQ/2MIN I.E 100REQ/120S

            // WAIT 2 SECONDS BEFORE FETCHING MATCHDATAS
            setTimeout(() => {
            }, 2000)

            Promise.all(matchIds).then(function(results){
                try{
                    const requestCounter = 0
                    const matchIdsLen = matchIds.length
                    for(let i=0; i < matchIdsLen; i++){   
                        results[i].data.forEach(match => {
                            if(requestCounter == 10){
                                setTimeout(() => {
                                }, 2000)
                            }
                            all5playersMatches.push(http.get("https://europe.api.riotgames.com/lol/match/v5/matches/" + match +"?api_key=" + process.env.API_KEY))
                            requestCounter += 1
                        })
                    }

                    Promise.all([all5playersMatches]).then(function(results){
                        const resultsLen = results.length
                        //console.log("match promises all: ", results)
                        //console.log("yolo:",results.at(0))
                        
                        if(all5playersMatches && all5playersMatches.length){
                            all5playersMatches.forEach(matchPromise => {
                                //console.log("matchpromise: ", matchPromise)
                                matchPromise.then(res => {
                                    //console.log("res", res)
                                    //console.log("matchdata: ", res)
                                    setMatchesAllPlayers(matchesAllPlayers => [...matchesAllPlayers, res.data])
                                })
                            })
                        }
                    })
                } 
                catch(err){
                    console.log(err, "probably too many requests or another error...")
                }
            })
        }
    }
    }, [puuids])

    //console.log("ALL MATCHES DATA: ", matchesAllPlayers)
    //console.log("MULTIQUERY HAD ", multiQueryPlayerAmount, "PLAYERS.")

    function sliceIntoChunks(arr, chunkSize){
        const res = []
        for(let i=0; i < arr.length; i += chunkSize){
            const chunk = arr.slice(i, i + chunkSize)
            res.push(chunk)
        }
        return res
    }

    const chunkedMatches = sliceIntoChunks(matchesAllPlayers, MATCH_COUNT)
    //console.log("chunked array: ", chunkedMatches)
    //onsole.log("summonernames to props are", summonerNames)

    if(isFetching){
        return(
            <Flex
                background={colorMode === 'light' ? "#F8F8F8" : "black"}
                backgroundImage={colorMode === 'light' ? '/backgrounds/anniefaded.png' : '/backgrounds/xinzhaoart.png'}
                backgroundSize={"100%"}
                backgroundRepeat={"no-repeat"}
                height={"1600px"}
                as="div" 
                className="content-container"
                justifyContent={"center"}
                >
                    <Box marginTop={"100px"}>
                        <Text paddingLeft={"5px"} paddingBottom={"10px"} fontWeight={500} textAlign={"center"}> Loading ... </Text>
                        <Spinner    thickness='18px'
                                    speed='0.4s'
                                    emptyColor={colorMode == 'light' ? "#f5f5fa" : "#0E0E0E"}
                                    color={colorMode == 'light' ? "#3182CE" : "#CE3636"}
                                    boxSize={"150px"}
                        />
                    </Box>
                </Flex>
        )
    }
    else{
        return (
            <Flex
                background={colorMode === 'light' ? "#F8F8F8" : "black"}
                backgroundImage={colorMode === 'light' ? '/backgrounds/anniefaded.png' : '/backgrounds/xinzhaoart.png'}
                backgroundSize={"100%"}
                backgroundRepeat={"no-repeat"}
                height={"1600px"}
                flexDir={"row"}
                className="content-container"
                justifyContent={"center"}
                >
        
                {Array
                    .from(Array(leagueDatas.length))
                    .map((x, index) =>
                            <Flex key={"flex-"+index} flexDirection={"column"}>

                                <SummonerInfoBoxMultiQuery key={"summoner-info-box-mq-" + index}
                                    summonerData={summonerDatas[index]}
                                    leagueData={leagueDatas[index]}>
                                </SummonerInfoBoxMultiQuery>

                                <MotionBox
                                    marginTop={"20px"}
                                    borderRadius={"10px"}
                                    marginLeft={"5px"}
                                    marginRight={"5px"}
                                    backgroundColor={modeColorsShadowBox}
                                    initial={{opacity:0,  x:10}}
                                    animate={{opacity:100, x:0}}
                                    transition={{delay: 0.8}}
                                >
                                    {chunkedMatches.map((chunk, index) =>
                                        <MatchHistoryContainerMultiQuery
                                            key={"mq-history-container-"+index}
                                            matchDatas={chunk}
                                            selfName={summonerNames[0][index]}
                                        >
                                        </MatchHistoryContainerMultiQuery>
                                    )}
                                </MotionBox>

                            </Flex>
                        )
                }
                </Flex>
        )
    }
}