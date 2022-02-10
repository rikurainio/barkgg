import { Input, Flex, Box, Text, Stack, HStack, InputGroup, InputLeftElement,
            InputRightElement, Button, Form, useColorMode, useColorModeValue } from '@chakra-ui/react'

import { ViewIcon, Search2Icon } from '@chakra-ui/icons'
import React from 'react'
import { useState } from "react";


const SearchBar = () => {
    const userInput = ""

    const modeColorsSearchBar = useColorModeValue('rgb(245, 245, 250)', 'rgb(25, 29, 28)')

    function handleCaptureUserInput (event) {
        event.preventDefault
        userInput = event.target.value
    }

    function handleSearchUser (event) {
        event.preventDefault


        //setPuuid("")
        //setMatchData({})
        //setSingleMatchData([])
        //setSummonerName(userInput)
        //setRequested(true)
        //setRequested2(true)
        //clearFields()
        window.location = "/summoner/" + userInput
    }

    /*
    function clearFields() {
        document.getElementById("userInput").value=""
    }
    */

    return (
        <Flex
            className="searchbar"
            as="div"
            marginTop={0}>

            <HStack>
                <Box>
                    <Stack>
                        <InputGroup
                                size={"lg"}
                                onSubmit={handleSearchUser}
                                backgroundColor={modeColorsSearchBar}
                            >
                            <Input
                                onKeyPress={(e) => {
                                    if (e.key === "Enter") {
                                        e.preventDefault
                                        window.location = "/summoner/" + event.target.value
                                    }
                                }}
                                className={"searchInput"}
                                height={"38px"}
                                colorScheme={modeColorsSearchBar}
                                id={"userInput"}
                                variant='outline'
                                placeholder='search user'
                                onChange={handleCaptureUserInput}
                            >
                            </Input>
                            <InputRightElement
                                paddingBottom={"8px"}
                                paddingRight={"3px"}>
                                <Button
                                    className={"searchButton"}
                                    height={"31px"}
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