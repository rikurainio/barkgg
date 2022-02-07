import {Flex,Text, Box, Center, VStack, HStack,
        useColorModeValue, useColorMode, ListItem,
         List, Heading, Badge, Divider, color,
        
         Tag,
         TagLabel,
         TagLeftIcon,
         TagRightIcon,
         TagCloseButton,

        } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import asd from '../public/ddragon/profileIconData.json'
import { render } from "react-dom";
import { LayeredImage } from "react-layered-image";

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

    const modeColorsShadowBox = useColorModeValue('rgba(255, 255, 255, .6)', 'rgba(0, 0, 0, .5)')    
    const modeColorsFooterNavbar = useColorModeValue('rgb(245, 245, 250)', 'rgb(53, 54, 51)')

    try {
        const summonerValues = JSON.parse(summonerData)
        const summonerIconId = summonerValues['profileIconId']
        const pathToSummonerIcon = "/ddragon/dragontail-9.3.1/9.3.1/img/profileicon/" + summonerIconId.toString() + ".png"
        const pathToSummonerIcon2 = "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/profileicon/" + summonerIconId.toString() + ".png"
        //const pathToSummonerIconStatic = "./ddragon/dragontail-12.3.1/img/profileicon/" + summonerIconId.toString() + ".png"
        //const testPath = "./ddragon/dragontail-12.3.1/12.3.1/img/profileicon" + summonerIconId.toString() + ".png"
        const CDN1231 = "https://ddragon.leagueoflegends.com/cdn/12.3.1/img/profileicon/" + summonerIconId.toString() + ".png"
        //console.log("pathi: ",pathToSummonerIcon)
        const RANKED_WINGS_SRC = ""
        const NO_SOLO_RANK_WINGS_WHITE = "./wings/wings_white.png"
        const NO_SOLO_RANK_WINGS_BLACK = "./wings/wings_black.png"

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
                RANKED_WINGS_SRC = "./wings/wings_" + (solo.tier).toLowerCase() + ".png"
            }
        }


        return (
            <Box
                position={"static"}
                display={"flex"}
                height={"170px"}
                bgColor={modeColorsShadowBox}
                borderRadius={"7px"}
                marginTop={"12px"}
                className='summonerinfobox'
            >
                <Box
                    width={"80px"}
                    className='summoner-winrate-container'>
                        <Heading
                            fontSize={"16px"}
                            paddingLeft={"10px"}
                            paddingTop={"140px"}>
                            {solo.tier ? (Math.round((solo.wins/(solo.losses+solo.wins))*100)) + "% wr" : ""}
                        </Heading>
                </Box>

                <Box
                    marginLeft={"-100px"}
                    className={"summoner-image-container"}
                    paddingTop={"30px"}
                    >

                    <Box
                        paddingLeft={"95px"}>
                        <Image
                            borderRadius='full'
                            src={CDN1231}
                            width={100}>
                        </Image>
                    </Box>
                    <Box
                        marginTop={-274}>
                        <Image  
                                src={solo.tier ? RANKED_WINGS_SRC : NO_SOLO_RANK_WINGS_BLACK}
                                width={290}>
                        </Image>
                    </Box>
                </Box>
                

                <Box
                    className="summoner-name-rank-container">
                    <List>
                        <ListItem>
                            <Box>
                                <Heading
                                    paddingTop={"20px"}
                                    fontSize={"36px"}>
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
                                    fontSize={"18px"}>
                                    {solo.tier ? solo.tier +  " "
                                        + solo.rank + " " : ""}
                                </Heading>

                                <HStack spacing={4}>
                                </HStack>

                                <Badge
                                    colorScheme={modeColorsFooterNavbar}
                                    fontWeight={500}
                                    fontSize={"18px"}>
                                    {solo.tier ? solo.leaguePoints + " LP" + " (Solo Queue) " : "Unranked (Solo Queue)"}
                                </Badge>
                            </Box>
                        </ListItem> 
                    </List>
                </Box>

                
            </Box>
        )
    }
    catch (err) {
        return (null)
    }
}

export default SummonerInfoBox