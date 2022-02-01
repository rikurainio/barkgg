import { Input, Flex, Box, Text, Stack, InputGroup, InputLeftElement,
            InputRightElement, Button } from '@chakra-ui/react'

import { ViewIcon, Search2Icon } from '@chakra-ui/icons'

const SearchBar = (props) => {
    const userInput = "";

    function handleCaptureUserInput (event) {
        userInput = event.target.value
        console.log("User is searching for: " + userInput)
    }

    function handleSearchUser (event) {
        console.log('Requesting user: ' + userInput)
    }

    return (
        <Flex
            className="searchbar"
            as="div">

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
        </Flex>
    )
}

export default SearchBar;   