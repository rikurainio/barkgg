import { Flex, Box, Text, Heading, HStack, useColorModeValue } from '@chakra-ui/react'
import { TimeIcon } from '@chakra-ui/icons'

const MatchHistoryTimeModeMultiQuery = ({gameMode, gameEnded, win, gameDuration}) => {


    const modeColorsWinText = useColorModeValue('black', 'rgba(62, 214, 252, 1)')
    const modeColorsLoseText = useColorModeValue('black', 'rgba(252, 62, 68, 1)')
    const modeColorsRemakeText= useColorModeValue('black', 'white')

    function getRankedText(gameType, mapId, queueId){

        // IS A RANKED SOLO OR FLEX Q
        if(mapId == 11 && queueId == 420){
            return "Solo"
        }
        if(mapId == 11 && queueId == 440){
            return "Flex"
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

    function getTimeAgo(date){
        const ms = (Date.now() - date)

        // INTERVAL IS SECONDS FIRST
        const seconds = ms / 1000
        const minutes = seconds / 60
        const hours = minutes / 60

        if(hours > 24){
            return Math.ceil(hours / 24) + " Days ago"

        }
        if(hours > 0 && hours < 24){
            const firstDecimal = hours.toString().charAt(hours.toString().indexOf(".") + 1)
            if(firstDecimal >= 5)
                return Math.ceil(hours) + " Hours ago"
            return Math.floor(hours) + " Hours ago"
        }
        if(minutes > 0 && minutes < 60){
            return Math.ceil(minutes) + " Minutes ago"
        }
        else{
            return ""
        }
    }

    // AAMUJA SILLE KETÄ NÄKEE TÄN :-----D
    return (
        <Box
            width={"130px"}
            paddingTop={"5px"}
            className='matchhistorytimemode'
            >

            <Heading
                h={"12px"}
                fontSize={"13px"}>
                {getRankedText(gameMode.gameType, gameMode.mapId, gameMode.queueId)}
                
            </Heading>

            {/* DATE REPRESENTATION */}
            <Text textAlign={"left"} marginLeft={"-0.4px"} pt={"1px"} h={"20px"}>
                <TimeIcon marginBottom={"2px"} marginRight={"5px"}></TimeIcon> {getTimeAgo((new Date(gameEnded)))}
            </Text>

            
                    
        </Box>
    )
}

export default MatchHistoryTimeModeMultiQuery