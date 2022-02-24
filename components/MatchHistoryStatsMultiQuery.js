import {Box, HStack, Flex, VStack, Image, Text, Heading, useColorModeValue } from '@chakra-ui/react'

const MatchHistoryStatsMultiQuery = ({allyTeamObj, selfObj}) => {

    const modeColorsKDAText = useColorModeValue('black', '#F3F3F3')
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
            //console.log("KP calced: ", participation, "/", totalKills, "* 100",result)

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

    return (
        <Box
            width={"80px"}
            className='matchhistorystats'>

            <Box>
                <Text fontWeight={"bold"}>{calculateStatsString(selfObj.kills, selfObj.deaths, selfObj.assists)} </Text>
            </Box>

            <Box>
                <Text fontWeight={100} fontSize="15px" color={modeColorsKDAText}>{calculateKDA(selfObj.kills, selfObj.deaths, selfObj.assists)} KDA</Text>
            </Box>
        </Box>
    )
}

export default MatchHistoryStatsMultiQuery