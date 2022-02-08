import { useRouter } from 'next/router'
import { Flex, Box, useColorMode, Text, Spinner } from '@chakra-ui/react'
import SearchBar from '../../components/SearchBar'
import SummonerInfoBox from '../../components/SummonerInfoBox'
import SummonerDetails from '../../components/SummonerDetails'
import { useState, useEffect, createContext, useContext, Suspense } from 'react'
import MatchHistoryContainer from '../../components/MatchHistoryContainer'
import axios from 'axios'

const Summoner = () => {
    const router = useRouter()

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

    useEffect(() => {
        setRequested(false)

        // GOT QUERY PARAM
        if(router.isReady){
            console.log("ready: ", router.query)
            // SUMMONER BY NAME
            axios.get("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"
                    + router.query.summonerName + "?api_key=" + process.env.API_KEY)
                    .then((response => {
                        //VER 1.0
                        setPuuid(response.data.puuid)
                        setEncryptedSummonerId(response.data.id)
                        setSummonerIconId(response.data.summonerIconId)
                        setSummonerName(response.data.name)
                        setSummonerData(JSON.stringify(response.data))

                        axios.get("https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/" 
                                + response.data.id + "?api_key=" + process.env.API_KEY)

                            .then(response => {
                                setLeagueData(response.data)
                                return response
                            })
                            .catch(error => {
                                console.log(error)
                                return error
                            })
                        return response
                    }))
                    .catch(error => {
                        console.log(error)
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

    return (
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
            <Box
                >

                {/* SHOW SUMMONER PROFILE DATA */}
                <SummonerInfoBox
                    summonerData={summonerData}
                    leagueData={leagueData}>
                </SummonerInfoBox>

                {/* MATCH HISTORY RELATED COMPONENTS INSIDE*/}
                {/* AXIOS GET MATCH HISTORY DATA */}
                {/* SHOW MATCH HISTORY DATA */}
                { puuid != "" && (
                    <MatchHistoryContainer puuid={puuid} setMatchData={setMatchData} singleMatchData={singleMatchData}
                                            setSingleMatchData={setSingleMatchData} requested2={requested2}
                                            setRequested2={setRequested2} selfName={summonerName}
                                            setSummonerName={setSummonerName} resetComponentStates={resetComponentStates}>
                    </MatchHistoryContainer>
                )
                }
            </Box>
        </Flex>
    )
}

export default Summoner