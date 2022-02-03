import {Box, VStack, Text, Heading, Spacer, Flex, Image, HStack } from '@chakra-ui/react'

const MatchHistoryPlayer = ({participants}) => {
    //console.log("participants | ", participants)
    const CDN1231_IMG_BY_CHAMP_NAME_2
            = "https://ddragon.leagueoflegends.com/cdn/12.3.1/img/champion/"
    

    if(participants.length == 10){
        return (
            <Flex
                paddingLeft={"15px"}
                paddingRight={"10px"}
                paddingTop={1}
                paddingBottom={1}
                className="matchhistoryplayer">
                    <Box
                        className="team1">
                        <VStack
                            spacing={"1px"}>
                            <Heading fontSize={"14px"}>Team 1</Heading>
                            {Array
                            .from(Array(participants.length - 5))
                            .map((participant, index) =>
                                <Box>
                                    <HStack>
                                        <Image
                                            src={CDN1231_IMG_BY_CHAMP_NAME_2
                                                    + (participants[index].championName)
                                                    + ".png"
                                                }
                                            boxSize={"30px"}>
                                        </Image>
                                        <Box
                                            textAlign={"left"}
                                            width={"140px"}>
                                            <Text  noOfLines={"1"} isTruncated height={"25px"}>{participants[index].summonerName}</Text>
                                        </Box>
                                    </HStack>
                                </Box>
                            )}
                        </VStack>
                    </Box>

                    
                    <Box
                        paddingLeft={"40px"}
                        className="team2">
                            <VStack
                                spacing={"1px"}>
                            <Heading fontSize={"14px"}>Team 2</Heading>
                            {Array
                            .from(Array(participants.length - 5))
                            .map((participant, index) => 
                                 <Box>
                                    <HStack>
                                        <Image
                                            src={CDN1231_IMG_BY_CHAMP_NAME_2
                                                    + (participants[index+5].championName)
                                                    + ".png"
                                                }
                                            boxSize={"30px"}>
                                        </Image>
                                        <Box
                                            textAlign={"left"}
                                            width={"140px"}>
                                            <Text noOfLines={1} isTruncated height={"25px"}>{participants[index+5].summonerName}</Text>
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
        reutrn (
            <Box>
                <Text>
                    ?
                </Text>
            </Box>
        )
    }
    
}

export default MatchHistoryPlayer