import {Box, Text, Link, Button, useColorModeValue} from '@chakra-ui/react'

const LiveGameName = ({name}) => {
    const modeColorsText = useColorModeValue('black', '#f5efed')

    function handleSearchPlayerViaMatchHistory(event){
        if(event.target.innerText){
            event.preventDefault
            const summonerNameToSearch = event.target.innerText
            if(summonerNameToSearch){
                window.location = "/summoner/" + summonerNameToSearch
            }
        }
    }

    return (
        <Box
            maxW={"300px"}
            minW={"300px"}
            paddingY={"22px"}>
            <Button
                variant='link'
                display={"inline-block"}
                maxH={"100px"}
                maxW={"400px"}
                isTruncated
                onClick={(event) => handleSearchPlayerViaMatchHistory(event)}
                className="search-player-name-button"
                >
                <Text
                    color={modeColorsText}
                    className={"search-player-name-button-text"}
                    noOfLines={"1"}
                    fontWeight={"thin"}
                    fontWeight={100}
                    fontSize={"20px"}
                    >
                        {name}
                </Text>
            </Button>
        </Box>
    )
}

export default LiveGameName