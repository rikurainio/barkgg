import {Box, VStack, Text, Heading, Spacer, Flex } from '@chakra-ui/react'

const MatchHistoryPlayer = ({participants}) => {
    //console.log("participants | ", participants)

    if(participants.length == 10){
        return (
            <Flex
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
                                <Text>{participants[index].summonerName}</Text>
                            )}
                        </VStack>
                    </Box>
                    <Spacer />
                    <Box
                        className="enemy-team">
                            <VStack>
                            <Heading fontSize={"14px"}>Team 2</Heading>
                            {Array
                            .from(Array(participants.length - 5))
                            .map((participant, index) => 
                                <Text>{participants[index+5].summonerName}</Text>
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