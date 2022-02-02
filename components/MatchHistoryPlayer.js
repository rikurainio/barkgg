import {Box, VStack, Text, Heading, Spacer, Flex, Image, HStack } from '@chakra-ui/react'

const MatchHistoryPlayer = ({participants}) => {
    //console.log("participants | ", participants)
    const CDN1231_IMG_BY_CHAMP_NAME_2
            = "https://ddragon.leagueoflegends.com/cdn/12.3.1/img/champion/"
    

    if(participants.length == 10){
        return (
            <Flex
                paddingLeft={"40px"}
                fontSize={"14px"}
                paddingTop={2}
                paddingBottom={2}
                className="matchhistoryplayer">
                    <Box
                        className="ally-team">
                        <VStack>
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

                                                    /*
                                                    + (participants[index].summonerName).charAt(0).toUpperCase()
                                                    + (participants[index].summonerName).substring(1) + ".png"
                                                
                                                    */
                                                }
                                            boxSize={"30px"}>
                                        </Image>
                                        <Box
                                            textAlign={"left"}
                                            width={"140px"}>
                                            <Text>{participants[index].summonerName}</Text>
                                        </Box>
                                    </HStack>
                                </Box>
                            )}
                        </VStack>
                    </Box>

                    
                    <Box
                        paddingLeft={"40px"}
                        className="enemy-team">
                            <VStack>
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

                                                    /*
                                                    + (participants[index].summonerName).charAt(0).toUpperCase()
                                                    + (participants[index].summonerName).substring(1) + ".png"
                                                
                                                    */
                                                }
                                            boxSize={"30px"}>
                                        </Image>
                                        <Box
                                            textAlign={"left"}
                                            width={"140px"}>
                                            <Text>{participants[index+5].summonerName}</Text>
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