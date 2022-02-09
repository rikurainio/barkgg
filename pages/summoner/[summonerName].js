import { useRouter } from 'next/router'
import { Flex, Box, useColorMode, Text, Spinner, useColorModeValue } from '@chakra-ui/react'
import SummonerInfoBox from '../../components/SummonerInfoBox'
import { useState, useEffect } from 'react'
import MatchHistoryContainer from '../../components/MatchHistoryContainer'
import axios from 'axios'
import { useAppContext } from '../../context/state'


const Summoner = () => {
    const router = useRouter()
    const [isFetching, setIsFetching] = useState(true)

   // CONTAINERS FOR PLAYER VAR
   const [summonerData, setSummonerData] = useState({});
   const [summonerName, setSummonerName] = useState("");
   const [puuid, setPuuid] = useState("")
   const [encryptedSummonerId, setEncryptedSummonerId] = useState("")
   const [requested, setRequested] = useState(false);
   const [requested2, setRequested2] = useState(false);
   const [summonerIconId, setSummonerIconId] = useState(0);
   const [matchData, setMatchData] = useState({})
   const [singleMatchData, setSingleMatchData] = useState([])
   const [leagueData, setLeagueData] = useState([])


   const modeColorsShadowBox = useColorModeValue('rgba(255, 255, 255, .1)', 'rgba(0, 0, 0, .1)')   

    useEffect(() => {
        setRequested(false)

        // GOT QUERY PARAM
        if(router.isReady){
            //console.log("ready: ", router.query)
            // SUMMONER BY NAME
            axios.get("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"
                    + router.query.summonerName + "?api_key=" + process.env.API_KEY)
                    .then((response => {
                        //VER 1.0
                        setPuuid(response.data.puuid)
                        setEncryptedSummonerId(response.data.id)
                        setSummonerIconId(response.data.summonerIconId)

                        const formatName = response.data.name
                                                .toUpperCase()
                                                .trim()
                                                .replace(/\s/g, "")
                        
                        setSummonerName(formatName)
                        setSummonerData(JSON.stringify(response.data))

                        axios.get("https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/" 
                                + response.data.id + "?api_key=" + process.env.API_KEY)

                            .then(response => {
                                setLeagueData(response.data)
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
        }
        else{
            setSummonerName("Could not find summoner name... Try again")
        }
    }, [router.isReady])
    const { colorMode, toggleColorMode } = useColorMode()

    // RESET ALL USESTATES
    function resetComponentStates (){
        setSummonerData({})
        setSummonerName("")
        setPuuid("")
        setEncryptedSummonerId("")
        setRequested(false)
        setRequested2(false)
        setSummonerIconId(0)
        setMatchData({})
        setSingleMatchData([])
        setLeagueData([])
        //console.log("resetted all")
        setRequested(true)
    }

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
                        <Spinner    thickness='20px'
                                    speed='0.4s'
                                    emptyColor='gray.200'
                                    color='blue.500'
                                    boxSize={"150px"}
                                    />
                    </Box>
                </Flex>
        )
    }
    else{
        return (
            <Flex
                flexDir={"row"}
                background={colorMode === 'light' ? "#F8F8F8" : "black"}
                backgroundImage={colorMode === 'light' ? '/backgrounds/anniefaded.png' : '/backgrounds/xinzhaoart.png'}
                backgroundSize={"100%"}
                backgroundRepeat={"no-repeat"}
                height={"1600px"}
                as="div" 
                className="content-container"
                justifyContent={"center"}
                >

                <Box width={"100%"}
                        bgColor={modeColorsShadowBox}
                >
                    asd
                </Box>

                <Box
                    >

                    {/* SHOW SUMMONER PROFILE DATA */}
                    <SummonerInfoBox
                        summonerData={summonerData}
                        leagueData={leagueData}>
                    </SummonerInfoBox>

                    { puuid != "" && (
                        <MatchHistoryContainer puuid={puuid} setMatchData={setMatchData} singleMatchData={singleMatchData}
                                                setSingleMatchData={setSingleMatchData} requested2={requested2}
                                                setRequested2={setRequested2} selfName={summonerName}
                                                setSummonerName={setSummonerName} resetComponentStates={resetComponentStates}>
                        </MatchHistoryContainer>
                    )
                    }
                </Box>

                <Box width="100%"
                        bgColor={modeColorsShadowBox}
                >
                    asd
                </Box>
            </Flex>
        )
    }
}

export default Summoner