import { Flex, Heading, Box, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SearchBar from '../components/SearchBar'
import SummonerInfoBox from '../components/SummonerInfoBox'
import SummonerDetails from '../components/SummonerDetails'
import { useState, useEffect } from 'react'
import MatchHistory from '../components/MatchHistory'
import MatchHistoryContainer from '../components/MatchHistoryContainer'


import React from 'react'
//HOME
export default function Home() {

  // CONTAINERS FOR PLAYER VAR
  const [summonerData, setSummonerData] = useState({});
  const [summonerName, setSummonerName] = useState("");
  const [puuid, setPuuid] = useState("")
  const [requested, setRequested] = useState(false);
  const [summonerIconId, setSummonerIconId] = useState(0);

  //LOGS
  //console.log("summoner icon id: ", summonerIconId)

  useEffect(() => {
    setRequested(false)
  }, [])

  return (
    <Flex  
      height={2000}
      as="div" 
      className="content-container"
      justifyContent={"center"}
      >
        <Box
          >
            <SearchBar
              setRequested={setRequested}
              setSummonerName={setSummonerName}
            >
            </SearchBar>
            <SummonerDetails
              requested={requested}
              setRequested={setRequested}
              summonerName={summonerName}
              setSummonerIconId={setSummonerIconId}
              setPuuid={setPuuid}
              setSummonerData={setSummonerData}>
            </SummonerDetails>

            <SummonerInfoBox
              summonerData={summonerData}>
            </SummonerInfoBox>

            { puuid != "" && (
              <MatchHistoryContainer puuid={puuid}>
              </MatchHistoryContainer>
            )
            }


        </Box>
    </Flex>
  )
}