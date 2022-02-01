import { Flex, Heading, Box, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SearchBar from '../components/SearchBar'
import SummonerInfoBox from '../components/SummonerInfoBox'
import SummonerDetails from '../components/SummonerDetails'
import { useState, useEffect } from 'react'
import React from 'react'
//HOME
export default function Home() {

  // CONTAINERS FOR PLAYER VAR
  const [summonerData, setSummonerData] = useState({});
  const [summonerName, setSummonerName] = useState("");
  const [requested, setRequested] = useState(false);

  console.log("sumdata: ", summonerData)

  useEffect(() => {
    setRequested(false)
  }, [])

  return (
    <Flex 
      as="div" 
      className="content-container"
      alignContent={"center"}
      justifyContent={"center"}>
        <Box
          h="2000">
            <SearchBar
              setRequested={setRequested}
              setSummonerName={setSummonerName}
            >
            </SearchBar>
            <SummonerDetails
              requested={requested}
              setRequested={setRequested}
              summonerName={summonerName}
              setSummonerData={setSummonerData}>
            </SummonerDetails>

            <SummonerInfoBox
              summonerData={summonerData}>
            </SummonerInfoBox>

        </Box>
    </Flex>
  )
}