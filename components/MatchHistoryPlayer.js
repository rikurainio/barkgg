import {Box, VStack, Text, Heading, Spacer, Flex, Image, HStack,
            Button, ButtonGroup, useColorModeValue, useColorMode } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'


const MatchHistoryPlayer = ({participants, setSummonerName, resetComponentStates}) => {
    //console.log("participants | ", participants)
    const CDN1231_IMG_BY_CHAMP_NAME_2
            = "https://ddragon.leagueoflegends.com/cdn/12.3.1/img/champion/"
    
    const modeColorsText = useColorModeValue('black', '#f5efed')

    function handleSearchPlayerViaMatchHistory(event){
        //console.log("clicked: " + event.target.innerText)

        if(event.target.innerText){
            const summonerNameToSearch = event.target.innerText
            if(summonerNameToSearch){
                resetComponentStates()
                setSummonerName(summonerNameToSearch)
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
                paddingLeft={"5px"}
                paddingRight={"10px"}
                paddingTop={1}
                paddingBottom={1}
                className="matchhistoryplayer">
                    <Box
                        key={"box-team1"}
                        className="team1">
                        <VStack
                            spacing={"1px"}>
                            <Heading fontSize={"14px"}>Team 1</Heading>
                            {Array
                            .from(Array(participants.length - 5))
                            .map((participant, index) => 
                                <Box >
                                    <HStack > 
                                        <Image 
                                            src={CDN1231_IMG_BY_CHAMP_NAME_2
                                                    + (getFixedSummonerName(participants[index].championName))
                                                    + ".png"
                                                }
                                            boxSize={"30px"}>
                                        </Image>
                                        <Box
                                            textAlign={"left"}
                                            width={"130px"}>
                                            <Button
                                                variant='link'
                                                display={"inline-block"}
                                                maxW={"150px"}
                                                isTruncated
                                                onClick={(event) => handleSearchPlayerViaMatchHistory(event)}
                                                className="search-player-name-button"
                                                >
                                                <Text
                                                    color={modeColorsText}
                                                    className={"search-player-name-button-text"}
                                                    noOfLines={"1"}
                                                    fontWeight={"thin"}
                                                    fontSize={[participants[index].summonerName.length > 14 ? "19px" : "19px"]}
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
                        paddingLeft={"40px"}
                        className="team2">
                            <VStack
                                spacing={"1px"}>
                            <Heading fontSize={"14px"}>Team 2</Heading>
                            {Array
                            .from(Array(participants.length - 5))
                            .map((participant, index) => 
                                 <Box>
                                    <HStack >
                                        <Image 
                                            src={CDN1231_IMG_BY_CHAMP_NAME_2
                                                    + (getFixedSummonerName(participants[index+5].championName))
                                                    + ".png"
                                                }
                                            boxSize={"30px"}>
                                        </Image>
                                        <Box
                                            textAlign={"left"}
                                            width={"150px"}>
                                            <Button
                                                variant='link'
                                                display={"inline-block"}
                                                maxW={"150px"}
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
                                                    fontSize={[participants[index+5].summonerName.length > 14 ? "19px" : "19px"]}
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