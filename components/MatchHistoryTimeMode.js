import { Flex, Box, Text, Heading, HStack } from '@chakra-ui/react'

const MatchHistoryTimeMode = ({gameMode, gameEnded, win, gameDuration}) => {
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
            paddingTop={"5px"}
            height={"100%"}
            width={"100%"}
            className='matchhistorytimemode'
            >

            <Heading
                h={"12px"}
                fontSize={"13px"}>
                {getRankedText(gameMode.gameType, gameMode.mapId, gameMode.queueId)}
            </Heading>

            {/* DATE REPRESENTATION */}
            <Text textAlign={"left"} fontSize={"15px"} pt={"2px"} h={"20px"}>
                {parseDateString((new Date(gameEnded)
                    .toLocaleString())
                    .toString(), "FIRST")}
            </Text>
            <Text textAlign={"left"} marginLeft={"-0.4px"} pt={"1px"} h={"20px"}>
                {parseDateString((new Date(gameEnded)
                    .toLocaleString())
                    .toString(), "LAST")}
            </Text>

            <Box textAlign={"left"} h={"10px"} w={"100px"} letterSpacing={"tight"}>
                {win ? <Text h={"20px"} w={"100%"}> Win </Text> : <Text h={"20px"} w={"100%"}>Loss</Text>}
                <Text>{Math.floor(gameDuration / 60)} minutes</Text>
            </Box>
                    
        </Box>
    )
}

export default MatchHistoryTimeMode