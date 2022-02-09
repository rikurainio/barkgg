import { Flex, Box, useColorMode, Text } from '@chakra-ui/react'
import SearchBar from '../components/SearchBar'
import React from 'react'

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
          
          <Box marginTop={"70px"}>
              <Text> Search for Summoner </Text>
              {/* COLLECT USER INPUT FROM UI */}
              <SearchBar>
              </SearchBar>
          </Box>
      </Flex>
  )
}