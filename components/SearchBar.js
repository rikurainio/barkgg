import { Input, Flex, Box, Text, Stack, HStack, InputGroup, InputLeftElement,
            InputRightElement, Button } from '@chakra-ui/react'

import { ViewIcon, Search2Icon } from '@chakra-ui/icons'
import React from 'react'
import { useState } from "react";


const SearchBar = ({ setPuuid, setMatchData, setSingleMatchData, setSummonerName, setRequested, setRequested2 }) => {
    const userInput = ""

    function handleCaptureUserInput (event) {
        event.preventDefault
        userInput = event.target.value
    }

    function handleSearchUser (event) {
        setPuuid("")
        setMatchData({})
        setSingleMatchData([])
        setSummonerName(userInput)
        setRequested(true)
        setRequested2(true)
    }

    return (
        <Flex
            className="searchbar"
            as="div"
            marginTop={10}>

            <HStack>
                <Text fontSize={"xl"} as="em">
                    Search for summoner
                </Text>
                <Stack>
                    <InputGroup
                            backgroundColor={"white"}
                        >
                        <Input
                            variant='outline'
                            placeholder='search user'
                            onChange={handleCaptureUserInput}
                        >
                        </Input>
                        <InputRightElement
                        >
                            <Button
                                onClick={handleSearchUser}
                            >
                                <Search2Icon></Search2Icon>
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </Stack>
            </HStack>
        </Flex>
    )
}

export default SearchBar;   