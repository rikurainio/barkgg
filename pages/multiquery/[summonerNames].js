import { Box, Flex, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import SearchBarMultiQuery from '../../components/SearchBarMultiQuery'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Stats(){
    const router = useRouter()
    const [players, setPlayers] = useState("")
    const { colorMode, toggleColorMode } = useColorMode()
    const [isFetching, setIsFetching] = useState(true)

    useEffect(() => {
        if(router.isReady){
            console.log("router query: ", router.query)
            const multiquery = router.query.summonerNames
            setPlayers(multiquery)
        }
        else{
            console.log("Could not perform a multiquery. Please try again")
        }
    }, [router.isReady])

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
                <Text> Results: </Text>
                <Text>{players}</Text>
            </Box>
      </Flex>
    )
}