import {Box, HStack, Flex, VStack, Image, Text, Heading } from '@chakra-ui/react'

const MatchHistoryStats = ({allyTeamObj, selfObj}) => {

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

    function calculateLevelText (level){
        return "Level " + level
    }

    function calculateCsPerMin (minionskilled, neutralminionskilled){
        return "(" + minionskilled + " cs) "
    }

    return (
        <Box
            width={"100%"}
            ml={"-125px"}
            mt={1}
            className='matchhistorystats'>

            <Box paddingTop={"2px"}>
                <Text fontWeight={"bold"}>{calculateStatsString(selfObj.kills, selfObj.deaths, selfObj.assists)} </Text>
                <Text>{calculateLevelText(selfObj.champLevel)}</Text>
            </Box>

            <Box>
                <Text fontWeight={100} fontSize="15px">{calculateKDA(selfObj.kills, selfObj.deaths, selfObj.assists)} KDA</Text>
            </Box>

            <Box width={"120px"}>
                <Text letterSpacing={"tighter"} lineHeight={"21px"}>{calculateCsPerMin(selfObj.totalMinionsKilled, selfObj.neutralMinionsKilled)}
                                                {calculateKP(allyTeamObj.objectives.champion.kills, selfObj.kills, selfObj.assists)}
                                                
                </Text>
            </Box>
        </Box>
    )
}

export default MatchHistoryStats