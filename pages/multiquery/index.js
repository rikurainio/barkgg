import { Box, Flex, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import SearchBarMultiQuery from '../../components/SearchBarMultiQuery'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Stats(){
    const router = useRouter()
    const { colorMode, toggleColorMode } = useColorMode()
    const [isFetching, setIsFetching] = useState(true)

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
                <Text fontWeight={500} fontSize={"20px"}> Search for multiple Summoners </Text>
                <Text fontWeight={500} fontSize={"16px"}> (seperate names with a comma) (Max 5 Summoners!) </Text>
                
                <SearchBarMultiQuery>
                </SearchBarMultiQuery>
            </Box>
      </Flex>
    )
}