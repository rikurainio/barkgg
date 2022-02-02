import {Box, HStack, VStack, Image, Text } from '@chakra-ui/react'

const MatchHistoryStats = ({allyTeamObj, selfObj}) => {

    function calculateKDA (kills, deaths, assists) {
        if(deaths == 0){
            return "PERECT KDA"
        }
        return ((kills + assists) / deaths).toPrecision(3).toString() + ":1"
    }

    function calculateKP (allyTeamTotalKills, kills, assists) { 
        const participation = kills + assists
        const totalKills = allyTeamTotalKills

        if(totalKills && participation > 0){
            const result = (participation / totalKills * 100).toPrecision(2).toString()
            console.log("KP calced: ", participation, "/", totalKills, "* 100",result)

            if(result == 100){
                return "100"
            }
            else{
                return result
            }
        }

        if(totalKills || participation == 0){
            return "0"
        }
    }

    return (
        <Box
            align={"left"}
            className='matchhistorystats'>
                <Box>
                    <HStack>
                        <Text>{selfObj.kills}</Text>
                        <Text>/</Text>
                        <Text>{selfObj.deaths}</Text>
                        <Text>/</Text>
                        <Text>{selfObj.assists}</Text>
                    </HStack>
                </Box>
                <Box>
                    <Text>{calculateKDA(selfObj.kills, selfObj.deaths, selfObj.assists)} KDA</Text>
                </Box>
                <Box>
                    <Text>LvL {selfObj.champLevel}</Text>
                </Box>
                <Box>
                    <Text>{selfObj.totalMinionsKilled} CS</Text>
                </Box>
                <Box>
                    <Text>{calculateKP(allyTeamObj.objectives.champion.kills, selfObj.kills, selfObj.assists)} % Kill Participation</Text>
                </Box>
        </Box>
    )
}

export default MatchHistoryStats