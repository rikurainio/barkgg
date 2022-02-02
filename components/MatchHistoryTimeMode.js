import { Flex, Box, Text } from '@chakra-ui/react'

const MatchHistoryTimeMode = ({gameMode, gameEnded, win, gameDuration}) => {
    //console.log("what is time: ", gameEnded)
    // AAMUJA SILLE KETÄ NÄKEE TÄN :-----D
    return (
        <Box>
            <Text> {gameMode} </Text>
            <Text> {(new Date(gameEnded)
                .toLocaleString())
                .toString().slice(0, (new Date(gameEnded)
                .toLocaleString())
                .toString().length - 3)} </Text>
            <Text> {win ? <Text>WIN</Text> : <Text>LOSS</Text>} </Text>
            <Text> {Math.floor(gameDuration / 60)} Minutes </Text>
        </Box>
    )
}

export default MatchHistoryTimeMode