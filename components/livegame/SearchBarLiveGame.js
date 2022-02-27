import { Input, Flex, Box, Text, Stack, HStack, InputGroup, InputLeftElement,
    InputRightElement, Button, Form, useColorMode, useColorModeValue } from '@chakra-ui/react'

import { ViewIcon, Search2Icon } from '@chakra-ui/icons'
import React from 'react'
import { useState } from "react";


const SearchBarLiveGame = () => {
const userInput = ""
const modeColorsSearchBar = useColorModeValue('rgb(245, 245, 250)', 'rgb(25, 29, 28)')

function handleCaptureUserInput (event) {
event.preventDefault
userInput = event.target.value
}

function formatQuery(userInput){
    const finishedMultiQuery = userInput.trim().replace(/ /g, "") + " "
    return finishedMultiQuery
}

function handleSearchUser (event) {
    event.preventDefault
    const query = formatQuery(userInput)
    window.location = "/livegame/" + query
}

return (
<Flex
    className="searchbar"
    as="div"
    marginTop={0}>

    <HStack>
        <Box>
            <Stack>
                <InputGroup
                        width={"1000px"}
                        size={"lg"}
                        onSubmit={handleSearchUser}
                        backgroundColor={modeColorsSearchBar}
                    >
                    <Input
                        onKeyPress={(e) => {
                            if (e.key === "Enter") {
                                handleSearchUser(e)
                            }
                        }}
                        className={"searchInput"}
                        colorScheme={modeColorsSearchBar}
                        id={"userInput"}
                        variant='outline'
                        placeholder='search user'
                        onChange={handleCaptureUserInput}
                    >
                    </Input>
                    <InputRightElement
                        paddingBottom={"0 px"}
                        paddingRight={"3px"}>
                        <Button
                            className={"searchButton"}
                            height={"40px"}
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

export default SearchBarLiveGame;   