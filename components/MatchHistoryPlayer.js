import {Box, HStack, VStack, Image, Text } from '@chakra-ui/react'

const MatchHistoryPlayer = ({participants}) => {
    //console.log("participants | ", participants)

    if(participants.length == 10){
        return (
            <Box
                display={"flex"}
                justifyContent={"center"}
                className="matchhistoryplayer">
                    <Box
                        className="ally-team">
                        <VStack>
                            {Array
                            .from(Array(participants.length - 5))
                            .map((participant, index) => 
                                <Text>{participants[index].summonerName}</Text>
                            )}
                        </VStack>
                    </Box>
                    <Box
                        className="enemy-team">
                            <VStack>
                            {Array
                            .from(Array(participants.length - 5))
                            .map((participant, index) => 
                                <Text>{participants[index+5].summonerName}</Text>
                            )}
                        </VStack>
                    </Box>
            </Box>
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