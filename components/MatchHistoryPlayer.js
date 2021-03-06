import {Box, VStack, Text, Flex, Image, HStack,
            Button, useColorModeValue } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const MatchHistoryPlayer = ({participants, setSummonerName, resetComponentStates}) => {
    const CDN1231_IMG_BY_CHAMP_NAME_2
            = "https://ddragon.leagueoflegends.com/cdn/12.3.1/img/champion/"
    
    const modeColorsText = useColorModeValue('black', '#f5efed')

    function handleSearchPlayerViaMatchHistory(event){
        if(event.target.innerText){
            event.preventDefault
            const summonerNameToSearch = event.target.innerText
            if(summonerNameToSearch){
                resetComponentStates()
                window.location = "/summoner/" + summonerNameToSearch
            }
        }
    }

    // FIDDLESTICK BUGS BECAUSE FiddleSticks SHOULD BE Fiddlesticks
    function getFixedSummonerName(championName){
        if(championName == "FiddleSticks"){
            return "Fiddlesticks"
        }
        else{
            return championName
        }
    }

    if(participants.length == 10){
        return (
            <Flex
                maxW={"260px"}
                paddingTop={1}
                className="matchhistoryplayer">
                    <Box
                        key={"box-team1"}
                        className="team1">
                        <VStack
                            spacing={"-7px"}>
                            {Array
                            .from(Array(participants.length - 5))
                            .map((participant, index) => 
                                <Box key={"team-1-" + index}>
                                    <HStack > 
                                        <Image 
                                            src={CDN1231_IMG_BY_CHAMP_NAME_2
                                                    + (getFixedSummonerName(participants[index].championName))
                                                    + ".png"
                                                }
                                            width={"15px"}>
                                        </Image>
                                        <Box
                                            textAlign={"left"}
                                            width={"120px"}>
                                            <Button
                                                variant='link'
                                                display={"inline-block"}
                                                maxW={"120px"}
                                                isTruncated
                                                onClick={(event) => handleSearchPlayerViaMatchHistory(event)}
                                                className="search-player-name-button"
                                                >
                                                <Text
                                                    color={modeColorsText}
                                                    className={"search-player-name-button-text"}
                                                    noOfLines={"1"}
                                                    fontWeight={"thin"}
                                                    fontSize={[participants[index].summonerName.length > 14 ? "17px" : "17px"]}
                                                    >
                                                        {participants[index].summonerName}
                                                </Text>
                                            </Button> 
                                        </Box>
                                    </HStack>
                                </Box>
                            )}
                        </VStack>
                    </Box>
                    
                    <Box
                        key={"box-team2"}
                        paddingLeft={"20px"}
                        className="team2">
                            <VStack
                                spacing={"-7px"}>
                            {Array
                            .from(Array(participants.length - 5))
                            .map((participant, index) => 
                                 <Box key={"team-2-" + index}>
                                    <HStack >
                                        <Image 
                                            src={CDN1231_IMG_BY_CHAMP_NAME_2
                                                    + (getFixedSummonerName(participants[index+5].championName))
                                                    + ".png"
                                                }
                                            width={"15px"}>
                                        </Image>
                                        <Box
                                            textAlign={"left"}
                                            width={"120px"}>
                                            <Button
                                                variant='link'
                                                display={"inline-block"}
                                                maxW={"90px"}
                                                isTruncated
                                                onClick={(event) => handleSearchPlayerViaMatchHistory(event)}
                                                className="search-player-name-button"
                                                >
                                                <Text
                                                    color={modeColorsText}
                                                    className={"search-player-name-button-text"}
                                                    noOfLines={"1"}
                                                    isTruncated
                                                    fontWeight={"thin"}
                                                    fontSize={[participants[index+5].summonerName.length > 14 ? "17px" : "17px"]}
                                                    >
                                                        {participants[index+5].summonerName}
                                                </Text>
                                            </Button>  
                                        </Box>
                                    </HStack>
                                </Box>
                            )}
                        </VStack>
                    </Box>
            </Flex>
        )
    }
    else{
        return(null);
    }
}

export default MatchHistoryPlayer