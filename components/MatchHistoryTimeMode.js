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
                fontSize={"12px"}>
                {getRankedText(gameMode.gameType, gameMode.mapId, gameMode.queueId)}
            </Heading>

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

            <HStack noOfLines={1}>
                <Text>
                {win ? <Text>Win</Text> : <Text>Loss</Text>}
                </Text>
                <Text fontSize={"sm"}> {Math.floor(gameDuration / 60)} Minutes </Text>
            </HStack>
     
        </Box>
    )
}

export default MatchHistoryTimeMode