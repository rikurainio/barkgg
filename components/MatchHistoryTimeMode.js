import { Flex, Box, Text } from '@chakra-ui/react'

const MatchHistoryTimeMode = ({gameMode, gameEnded, win, gameDuration}) => {
    //console.log("what is time: ", gameEnded)

    console.log("gameMode: ", gameMode.gameType, "gameType:", 
                    gameMode.gameMode, "gameName: ", gameMode.gameName, "mapId",
                        gameMode.mapId, "queueID: ",gameMode.queueId)

    function getRankedText(gameType, mapId, queueId){

        // IS A RANKED SOLO OR FLEX Q
        if(mapId == 11 && queueId == 420){
            return "Solo Queue"
        }
        if(mapId == 11 && queueId == 440){
            return "Flex Queue"
        }

        // NORMAL TYPE
        if(gameMode.gameMode == "URF"){
            return "URF"
        }
        if(gameMode.gameMode == "ARAM"){
            return "ARAM"
        }
        else{
            return "Normal"
        }
    }

    // AAMUJA SILLE KETÄ NÄKEE TÄN :-----D
    return (
        <Box>
            <Text> {getRankedText(gameMode.gameType, gameMode.mapId, gameMode.queueId)} </Text>
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