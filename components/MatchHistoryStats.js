import {Box, HStack, Text, useColorModeValue } from '@chakra-ui/react'

const MatchHistoryStats = ({allyTeamObj, selfObj}) => {

    const modeColorsKDAText = useColorModeValue('black', 'rgba(228, 188, 255, 1)')
    const modeColorsCSText = useColorModeValue('black', 'rgba(196, 188, 255, 1)')
    const modeColorsKPText = useColorModeValue('black', 'rgba(255, 221, 238, 1)')

    function calculateKDA (kills, deaths, assists) {
        if(deaths == 0){
            return "PERFECT"
        }
        return ((kills + assists) / deaths).toPrecision(3).toString() + ":1"
    }

    function calculateKP (allyTeamTotalKills, kills, assists) { 
        const participation = kills + assists
        const totalKills = allyTeamTotalKills

        if(totalKills && participation > 0){
            const result = (participation / totalKills * 100).toPrecision(2).toString()
            if(result == 100){
                return "100"
            }
            else{
                return result + "% KP"
            }
        }
        if(totalKills || participation == 0){
            return "0"
        }
    }

    function calculateStatsString (kills, deaths, assists) {
        return kills + "/" + deaths + "/" + assists
    }

    function calculateLevelText (level){
        return "Level " + level
    }

    function calculateCsPerMin (minionskilled, neutralminionskilled){
        const totalcs = minionskilled + neutralminionskilled
        return "(" + totalcs + " cs) "
    }

    return (
        <Box
            width={"120px"}
            ml={"-110px"}
            mt={1}
            className='matchhistorystats'>

            <Box paddingTop={"2px"}>
                <Text fontWeight={"bold"}>{calculateStatsString(selfObj.kills, selfObj.deaths, selfObj.assists)} </Text>
                <Text>{calculateLevelText(selfObj.champLevel)}</Text>
            </Box>

            <Box>
                <Text fontWeight={100} fontSize="15px" color={modeColorsKDAText}>{calculateKDA(selfObj.kills, selfObj.deaths, selfObj.assists)} KDA</Text>
            </Box>

            <Box width={"120px"}>
                <Box>
                    <HStack>
                    <Text letterSpacing={"tighter"} color={modeColorsCSText}>{calculateCsPerMin(selfObj.totalMinionsKilled, selfObj.neutralMinionsKilled)}
                    </Text>   
                    <Text fontSize={"15px"} letterSpacing={"tighter"} color={modeColorsKPText}> {calculateKP(allyTeamObj.objectives.champion.kills, selfObj.kills, selfObj.assists)} </Text>

                    </HStack>
                                                
                </Box>
             
            </Box>
        </Box>
    )
}

export default MatchHistoryStats