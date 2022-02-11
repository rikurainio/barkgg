import { Box, Flex, Text, useColorMode, useColorModeValue, List, ListItem, Spinner} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import SummonerInfoBoxMultiQuery from '../../components/SummonerInfoBoxMultiQuery'
import axios from 'axios'

// FRAMER MOTION
import { motion } from 'framer-motion'
const MotionBox = motion(Box)

export default function Stats(){
    const router = useRouter()
    const { colorMode, toggleColorMode } = useColorMode()
    const [isFetching, setIsFetching] = useState(true)

    //SUMMONER
    const [puuids, setPuuids] = useState([])
    const [encryptedSummonerIds, setEncryptedSummonerIds] = useState([])
    const [summonerIconIds, setSummonerIconIds] = useState([])
    const [summonerNames, setSummonerNames] = useState([])
    const [summonerDatas, setSummonerDatas] = useState([])
    const [leagueDatas, setLeagueDatas] = useState([])

    const modeColorsShadowBox = useColorModeValue('rgba(255, 255, 255, 1)', 'rgba(0, 0, 0, .7)')  

    useEffect(() => {

        if(router.isReady){
            const multiQuerySplit = router.query.summonerNames.split(" ")

            // MAX 5 USER FETCH QUERY
            multiQuerySplit.slice(0,5).forEach(queryName => {
                    axios
                        .get("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"
                            + queryName + "?api_key=" + process.env.API_KEY)
                        .then((response => {
                            setPuuids(puuids => [...puuids, response.data.puuid])
                            setEncryptedSummonerIds(encryptedSummonerIds => [...encryptedSummonerIds, response.data.id])
                            setSummonerIconIds(summonerIconIds => [...summonerIconIds, response.data.summonerIconId])
                            setSummonerDatas(summonerDatas => [...summonerDatas, JSON.stringify(response.data)])

                                axios
                                    .get("https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/" 
                                            + response.data.id + "?api_key=" + process.env.API_KEY)
                                    .then(response => {
                                        setLeagueDatas(leagueDatas => [...leagueDatas, response.data])
                                        setIsFetching(false)
                                        return response
                                    })
                                .catch(error => {
                                    console.log(error)
                                    setIsFetching(false)
                                    return error
                                })
                            return response
                        }))
                        .catch(error => {
                            console.log(error)
                            setIsFetching(false)
                            return error
                        })
            })
        }
        else{
        }
    }, [router.isReady])

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
            //console.log("puuids are: ", puuids)

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
                                    marginTop={"15px"}
                                    borderRadius={"10px"}
                                    backgroundColor={modeColorsShadowBox}
                                    initial={{opacity:0,  x:10}}
                                    animate={{opacity:100, x:0}}
                                    transition={{delay: 0.8}}
                                >
                                </MotionBox>
                                </Flex>
                            )
                    }
                 </Flex>
            )
        }
}