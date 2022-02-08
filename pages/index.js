import { Flex, Box, useColorMode, Spinner, Heading, Text } from '@chakra-ui/react'
import SearchBar from '../components/SearchBar'
import SummonerInfoBox from '../components/SummonerInfoBox'
import SummonerDetails from '../components/SummonerDetails'
import { useState, useEffect, createContext, useContext, Suspense } from 'react'
import MatchHistoryContainer from '../components/MatchHistoryContainer'
import React from 'react'


const SummonerContext = createContext(undefined)

export function SummonerProvider({ children }){
  const [summoner, setSummoner] = useState({})
  return (
    <SummonerContext.Provider
      value={{summoner, setSummoner}}>
        {children}
    </SummonerContext.Provider>
  )
}

export function useSummoner() {
  const context = useContext(SummonerContext)

  if(!context){
    throw new Error('useSummoner must be used inside a "SummonerProvider"!')
  }
  
  return context
}

export default function Home() {
  const { colorMode } = useColorMode()

  return (
      <Flex
        background={colorMode === 'light' ? "#F8F8F8" : "black"}
        backgroundImage={colorMode === 'light' ? 'backgrounds/anniefaded.png' : 'backgrounds/xinzhaoart.png'}
        backgroundSize={"100%"}
        backgroundRepeat={"no-repeat"}
        height={"1600px"}
        as="div" 
        className="content-container"
        justifyContent={"center"}
        >
          
          <Box marginTop={"300px"}>
              <Text> Search for Summoner </Text>
              {/* COLLECT USER INPUT FROM UI */}
              <SearchBar>
              </SearchBar>
          </Box>
      </Flex>
  )
}