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
            width={"100%"}
            className='matchhistorystats'>
                <Box alignContent={"flex-start"} display={"flex"}>
                        <Heading paddingTop={"0px"} paddingRight={"5px"} fontWeight={500} fontSize="16px">{selfObj.kills}</Heading>
                        <Text marginRight={"4px"} fontSize={"14px"} fontWeight={500}>/</Text>
                        <Heading paddingRight={"5px"} fontWeight={500} fontSize="16px">{selfObj.deaths}</Heading>
                        <Text marginRight={"4px"} fontSize={"14px"} fontWeight={500}>/</Text>
                        <Heading  fontWeight={500} fontSize="16px">{selfObj.assists}</Heading>
                </Box>
                <Box >
                    <Text fontSize="15px">{calculateKDA(selfObj.kills, selfObj.deaths, selfObj.assists)} KDA</Text>
                </Box>

                <HStack>
                    <Text>Level {selfObj.champLevel}</Text>
                </HStack>
                <Box>
                    <Text>({selfObj.totalMinionsKilled} CS)</Text>
                </Box>
                
                <Box>
                    <Text
                        noOfLines={1}
                        fontSize="16px">{
                        calculateKP(allyTeamObj.objectives.champion.kills, selfObj.kills, selfObj.assists)}<strong>%</strong> KP
                    </Text>
                </Box>
        </Box>
    )
}

export default MatchHistoryStats