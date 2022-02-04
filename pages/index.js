import { Flex, Heading, Box, Text } from '@chakra-ui/react'
import SearchBar from '../components/SearchBar'
import SummonerInfoBox from '../components/SummonerInfoBox'
import SummonerDetails from '../components/SummonerDetails'
import { useState, useEffect } from 'react'
import MatchHistoryContainer from '../components/MatchHistoryContainer'
import React from 'react'


export default function Home() {

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

  //LOGS
  //console.log("summoner icon id: ", summonerIconId)
  //console.log(matchData)
  //console.log(summonerData)
  //console.log(singleMatchData)
  //console.log(encryptedSummonerId)

  useEffect(() => {
    setRequested(false)
  }, [])

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
      height={6000}
      as="div" 
      className="content-container"
      justifyContent={"center"}
      >
        <Box
          >
            {/* COLLECT USER INPUT FROM UI */}
            <SearchBar
              setPuuid={setPuuid}
              setMatchData={setMatchData}
              setSingleMatchData={setSingleMatchData}
              setRequested={setRequested}
              setRequested2={setRequested2}
              setSummonerName={setSummonerName}
            >
            </SearchBar>

            {/* FETCH SUMMONER PROFILE DATA */}
            <SummonerDetails
              encryptedSummonerId={encryptedSummonerId}
              setEncryptedSummonerId={setEncryptedSummonerId}
              requested={requested}
              setRequested={setRequested}
              summonerName={summonerName}
              setSummonerIconId={setSummonerIconId}
              setPuuid={setPuuid}
              summonerData={summonerData}
              setSummonerData={setSummonerData}
              setLeagueData={setLeagueData}>
            </SummonerDetails>

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