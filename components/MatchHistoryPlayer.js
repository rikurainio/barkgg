import {Box, HStack, VStack, Image, Text } from '@chakra-ui/react'

const MatchHistoryPlayer = (props) => {
    return (
        <Box
            display={"flex"}
            justifyContent={"center"}
            className="matchhistoryplayer">
                <Box
                    className="ally-team">
                        <VStack>
                            <Text> Allies here </Text>
                        </VStack>
                </Box>
                <Box
                    className="enemy-team">
                        <VStack>
                            <Text> Enemies here </Text>
                        </VStack>
                </Box>
        </Box>
    )
}

export default MatchHistoryPlayer