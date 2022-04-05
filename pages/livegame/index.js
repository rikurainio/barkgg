import { Box, Flex, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import SearchBarLiveGame from '../../components/livegame/SearchBarLiveGame'

export default function Stats(){
    const router = useRouter()
    const { colorMode, toggleColorMode } = useColorMode()
    const [isFetching, setIsFetching] = useState(true)

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
            <Box marginTop={"70px"}>
                <Text fontWeight={500} fontSize={"18px"}> Search Summoner live game </Text>
                <SearchBarLiveGame></SearchBarLiveGame>
            </Box>
      </Flex>
    )
}