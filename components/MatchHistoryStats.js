import {Box, HStack, VStack, Image, Text, Heading } from '@chakra-ui/react'

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
                return result
            }
        }

        if(totalKills || participation == 0){
            return "0"
        }
    }

    return (
        <Box
            paddingLeft={"20px"}
            paddingRight={"20px"}
            paddingTop={"0px"}
            align={"left"}
            className='matchhistorystats'>
                <Box>
                    <HStack>
                        <Heading fontSize="20px">{selfObj.kills}</Heading>
                        <Text>/</Text>
                        <Heading fontSize="20px">{selfObj.deaths}</Heading>
                        <Text>/</Text>
                        <Heading fontSize="20px">{selfObj.assists}</Heading>
                    </HStack>
                </Box>
                <Box>
                    <Text fontSize="15px">{calculateKDA(selfObj.kills, selfObj.deaths, selfObj.assists)} KDA</Text>
                </Box>

                <HStack>
                    <Box>
                        <Text>LvL {selfObj.champLevel}</Text>
                    </Box>
                    <Box>
                        <Text>({selfObj.totalMinionsKilled} CS)</Text>
                    </Box>
                </HStack>
                
                <Box>
                    <Text
                        fontSize="17px">{
                        calculateKP(allyTeamObj.objectives.champion.kills, selfObj.kills, selfObj.assists)} % KP
                    </Text>
                </Box>
        </Box>
    )
}

export default MatchHistoryStats