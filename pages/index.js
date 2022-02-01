import { Flex, Heading, Box, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SearchBar from '../components/SearchBar'
import PlayerInfoBox from '../components/PlayerInfoBox'
import SummonerDetails from '../components/SummonerDetails'
import { useState, useEffect } from 'react'
import React from 'react'
//HOME
export default function Home() {
  const [summonerData, setSummonerData] = useState([]);
  const [summonerName, setSummonerName] = useState("");
  const [requested, setRequested] = useState(false);

  useEffect(() => {
    setRequested(false)
  }, [])

  console.log("summonerName is: " + summonerName)

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
        </Box>
    </Flex>
  )
}