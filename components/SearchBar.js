import { Input, Flex, Box, Text, Stack, HStack, InputGroup, InputLeftElement,
            InputRightElement, Button, Form } from '@chakra-ui/react'

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
        event.preventDefault
        setPuuid("")
        setMatchData({})
        setSingleMatchData([])
        setSummonerName(userInput)
        setRequested(true)
        setRequested2(true)

        clearFields()
    }

    function clearFields() {
        document.getElementById("userInput").value=""
    }

    return (
        <Flex
            className="searchbar"
            as="div"
            marginTop={10}>

            <HStack>
                <Box marginRight={"20px"}>
                    <Text fontSize={"25px"} as="em">
                        Search for summoner
                    </Text>
                </Box>
            
                <Box>
                    <Stack>
                        <InputGroup
                                size={"lg"}
                                onSubmit={handleSearchUser}
                                backgroundColor={"white"}
                            >
                            <Input
                                id={"userInput"}
                                variant='outline'
                                placeholder='search user'
                                onChange={handleCaptureUserInput}
                            >
                            </Input>
                            <InputRightElement
                                paddingRight={"4px"}>
                                <Button
                                    type={"Submit"}
                                    onClick={handleSearchUser}
                                >
                                    <Search2Icon></Search2Icon>
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </Stack>
                </Box>
            </HStack>
        </Flex>
    )
}

export default SearchBar;   