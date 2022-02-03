import { Flex, Box, Text, Heading } from '@chakra-ui/react'

const MatchHistoryTimeMode = ({gameMode, gameEnded, win, gameDuration}) => {
    //console.log("what is time: ", gameEnded)

    /*console.log("gameMode: ", gameMode.gameType, "gameType:", 
                    gameMode.gameMode, "gameName: ", gameMode.gameName, "mapId",
                        gameMode.mapId, "queueID: ",gameMode.queueId) */

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

    // HELPER FUNCTION FOR STRING RENDERING
    function parseDateString(dateString, wordPosition){
        const words = dateString.split(' ')
        const lastWord = words.pop()
        const firstWord = words.shift()
        console.log("words: ", words)
        
        if(wordPosition == "FIRST"){
            return firstWord
        }
        if(wordPosition == "LAST"){
            const lastWordNoMs = lastWord.slice(0,-3)
            return lastWordNoMs
        }
        else{
            return words
        }
    }



    // AAMUJA SILLE KETÄ NÄKEE TÄN :-----D
    return (
        <Box
            className='matchhistorytimemode'
            >
            <Heading
                fontSize={"15px"}>
                {getRankedText(gameMode.gameType, gameMode.mapId, gameMode.queueId)}
            </Heading>

            {/*
            <Text fontSize={"20px"}> {(new Date(gameEnded)
                .toLocaleString())
                .toString()
                .slice(0, (new Date(gameEnded).toLocaleString())
                .toString().length - 3)}

            </Text>
            */}
            
            {/* DATE REPRESENTATION */}
            <Text>
                {parseDateString((new Date(gameEnded)
                    .toLocaleString())
                    .toString(), "FIRST")}
            </Text>
            <Text>
                {parseDateString((new Date(gameEnded)
                    .toLocaleString())
                    .toString(), "LAST")}
            </Text>

              
       

            <Text>
            {win ? <Text>Win</Text> : <Text>Loss</Text>}
            </Text>

            <Text fontSize={"sm"}> {Math.floor(gameDuration / 60)} Minutes </Text>
        </Box>
    )
}

export default MatchHistoryTimeMode