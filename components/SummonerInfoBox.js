import {Text, Box, HStack,
        useColorModeValue, ListItem,
         List, Heading, Badge,
        } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'

import { motion } from 'framer-motion'
const MotionBox = motion(Box)

const SummonerInfoBox = ({summonerData, leagueData}) => {
    const solo = {}
    const flex = {}
    const tft = {}

    function getYesNo() {
        if (Math.floor(Math.random() * 2) == 0){
            return "Yes :)"
        }
        else{
            return "No."
        }
    }

    function amITakis(summonerName) {
        if(summonerName.toLowerCase() == "shadow takis" || summonerName.toLowerCase() == "takis"){
            return true
        }
        return false
    }

    const modeColorsShadowBox = useColorModeValue('rgba(255, 255, 255, .6)', 'rgba(40, 43, 44, .55)')    
    const modeColorsFooterNavbar = useColorModeValue('rgb(245, 245, 250)', 'rgb(53, 54, 51)')

    try {
        const summonerValues = JSON.parse(summonerData)
        const summonerIconId = summonerValues['profileIconId']
        const pathToSummonerIcon2 = "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/profileicon/" + summonerIconId.toString() + ".png"
        const CDN1231 = "https://ddragon.leagueoflegends.com/cdn/12.3.1/img/profileicon/" + summonerIconId.toString() + ".png"
        const RANKED_WINGS_SRC = ""
        const NO_SOLO_RANK_WINGS_WHITE = "/wings/wings_white.png"
        const NO_SOLO_RANK_WINGS_BLACK = "/wings/wings_black.png"
        const TAKIS_IMG = "/eastereggs/takis.jpg"

        if(leagueData.length){
            const rankedQueuesFound = leagueData.length

            for(let i=0; i < rankedQueuesFound; i++){

                // HAS ALL RANKED TYPES
                if(rankedQueuesFound == 3){
                    if(leagueData['0'].queueType == "RANKED_SOLO_5x5"){
                        solo = leagueData['0']
                    }
                    if(leagueData['0'].queueType == "RANKED_FLEX_SR"){
                        flex = leagueData['0']
                    }
                    if(leagueData['0'].queueType == "RANKED_TFT_PAIRS"){
                        tft = leagueData['0']
                    }
                    if(leagueData['1'].queueType == "RANKED_SOLO_5x5"){
                        solo = leagueData['1']
                    }
                    if(leagueData['1'].queueType == "RANKED_FLEX_SR"){
                        flex = leagueData['1']
                    }
                    if(leagueData['1'].queueType == "RANKED_TFT_PAIRS"){
                        tft = leagueData['1']
                    }
                    if(leagueData['2'].queueType == "RANKED_SOLO_5x5"){
                        solo = leagueData['2']
                    }
                    if(leagueData['2'].queueType == "RANKED_FLEX_SR"){
                        flex = leagueData['2']
                    }
                    if(leagueData['2'].queueType == "RANKED_TFT_PAIRS"){
                        tft = leagueData['2']
                    }
                }

                //HAS SOME 2
                if(rankedQueuesFound == 2){
                    if(leagueData['0'].queueType == "RANKED_SOLO_5x5"){
                        solo = leagueData['0']
                    }
                    if(leagueData['0'].queueType == "RANKED_FLEX_SR"){
                        flex = leagueData['0']
                    }
                    if(leagueData['0'].queueType == "RANKED_TFT_PAIRS"){
                        tft = leagueData['0']
                    }
                    if(leagueData['1'].queueType == "RANKED_SOLO_5x5"){
                        solo = leagueData['1']
                    }
                    if(leagueData['1'].queueType == "RANKED_FLEX_SR"){
                        flex = leagueData['1']
                    }
                    if(leagueData['1'].queueType == "RANKED_TFT_PAIRS"){
                        tft = leagueData['1']
                    }
                }

                //HAS ONLY 1
                if(rankedQueuesFound == 1){
                    if(leagueData['0'].queueType == "RANKED_SOLO_5x5"){
                        solo = leagueData['0']
                    }
                    if(leagueData['0'].queueType == "RANKED_FLEX_SR"){
                        flex = leagueData['0']
                    }
                    if(leagueData['0'].queueType == "RANKED_TFT_PAIRS"){
                        tft = leagueData['0']
                    }
                }
            }
            if(solo.tier){
                RANKED_WINGS_SRC = "/wings/wings_" + (solo.tier).toLowerCase() + ".png"
            }
        }

        return (
            <MotionBox
                initial={{opacity:0,  x:10}}
                animate={{opacity:100, x:0}}
                transition={{delay: 0.8}}

                position={"static"}
                display={"flex"}
                height={"140px"}
                bgColor={modeColorsShadowBox}
                borderRadius={"6px"}
                marginTop={"60px"}
                className='summonerinfobox'
            >
                <Box
                    pointerEvents={"none"}
                    marginLeft={"0px"}
                    className={"summoner-image-container"}
                    paddingTop={"30px"}
                    >

                    <Box
                        paddingLeft={"64px"}>
                        <Box
                        >
                            <Image
                                marginLeft={"8px"}
                                borderRadius='full'
                                src={amITakis(summonerValues['name']) ? TAKIS_IMG : CDN1231}
                                width={"75px"}>
                            </Image>
                        </Box>
                    </Box>
                    <Box
                        marginTop={-208}>
                        <Image  
                                src={solo.tier ? RANKED_WINGS_SRC : NO_SOLO_RANK_WINGS_BLACK}
                                width={220}>
                        </Image>
                    </Box>
                </Box>
                

                <Box
                    paddingLeft={"20px"}
                    className="summoner-name-rank-container">
                    <List>
                        <ListItem>
                            <Box>
                                <Heading
                                    paddingTop={"20px"}
                                    fontSize={"30px"}>
                                    {summonerValues['name']}
                                </Heading>

                            </Box>
                        </ListItem>
                        <ListItem paddingLeft={"2px"}>
                            <Box>
                                <Text
                                    fontSize={16}>
                                    Level {summonerValues['summonerLevel']}
                                </Text>
                            </Box>
                            <Box>
                                <Heading
                                    fontWeight={200}
                                    fontSize={"16px"}>
                                    {solo.tier ? solo.tier +  " "
                                        + solo.rank + " " : ""}
                                    {solo.tier ? (Math.round((solo.wins/(solo.losses+solo.wins))*100)) + "% wr" : ""}
                                </Heading>

                                <HStack spacing={4}>
                                </HStack>

                                <Text
                                    colorScheme={modeColorsFooterNavbar}
                                    fontWeight={500}
                                    fontSize={"16px"}>
                                    {solo.tier ? solo.leaguePoints + " LP" + " (Solo Queue) " : "Unranked (Solo Queue)"}
                                </Text>
                            </Box>
                        </ListItem> 
                    </List>
                </Box>

                
            </MotionBox>
        )
    }
    catch (err) {
        return (null)
    }
}

export default SummonerInfoBox