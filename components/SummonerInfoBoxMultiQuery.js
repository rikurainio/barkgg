import {Text, Box, HStack,
    useColorModeValue, ListItem,
     List, Heading, Badge,
    } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'

import { motion } from 'framer-motion'
const MotionBox = motion(Box)

const SummonerInfoBoxMultiQuery = ({summonerData, leagueData}) => {
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

const modeColorsShadowBox = useColorModeValue('rgba(255, 255, 255, .9)', 'rgba(0, 0, 0, .7)')    
const modeColorsFooterNavbar = useColorModeValue('rgb(245, 245, 250)', 'rgb(53, 54, 51)')

try {
    const summonerValues = JSON.parse(summonerData)
    const summonerIconId = summonerValues['profileIconId']
    const pathToSummonerIcon2 = "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/profileicon/" + summonerIconId.toString() + ".png"
    //const pathToSummonerIconStatic = "./ddragon/dragontail-12.3.1/img/profileicon/" + summonerIconId.toString() + ".png"
    //const testPath = "./ddragon/dragontail-12.3.1/12.3.1/img/profileicon" + summonerIconId.toString() + ".png"
    const CDN1231 = "https://ddragon.leagueoflegends.com/cdn/12.3.1/img/profileicon/" + summonerIconId.toString() + ".png"
    //console.log("pathi: ",pathToSummonerIcon)
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
            pointerEvents={"none"}
            initial={{opacity:0,  x:10}}
            animate={{opacity:100, x:0}}
            transition={{delay: 0.8}}

            width={"300px"}
            display={"flex"}
            height={"100px"}
            bgColor={modeColorsShadowBox}
            borderRadius={"10px"}

            marginRight={"5px"}
            marginLeft={"5px"}

            marginTop={"75px"}
            className='summonerinfobox'
        >
                    
                    <Heading
                        noOfLines={1}
                        width={"80px"}
                        paddingLeft={"4px"}
                        paddingTop={"80px"}
                        fontSize={"14px"}>
                        {solo.tier ? (Math.round((solo.wins/(solo.losses+solo.wins))*100)) + "% wr" : ""}
                    </Heading>
                        <Image
                            marginTop={"18px"}
                            marginRight={"21px"}
                            width={"64px"}
                            height={"64px"}
                            borderRadius='full'
                            src={ /*amITakis(summonerValues['name']) ? TAKIS_IMG : */CDN1231}
                        >
                        </Image>
                       
                        <Image
                            marginTop={"-95px"}
                            marginLeft={"-145px"}
                            width={"240px"}
                            height={"240px"}
                            src={solo.tier ? RANKED_WINGS_SRC : NO_SOLO_RANK_WINGS_BLACK}
                        >
                        </Image>
                    
                    <Box
                        paddingTop={"16px"}
                        width={"200px"}
                        marginLeft={"-10px"}
                        >


                  
                        <Heading
                            paddingTop={"0px"}
                            fontSize={"16px"}>
                            {summonerValues['name']}
                        </Heading>
            
                        <Text
                            fontSize={"12px"}>
                            Level {summonerValues['summonerLevel']}
                        </Text>

                        <Heading
                            fontWeight={200}
                            fontSize={"14px"}>
                            {solo.tier ? solo.tier +  " "
                                + solo.rank + " " : ""}
                        </Heading>

                        <Heading
                            colorScheme={modeColorsFooterNavbar}
                            fontSize={"12px"}>
                            {solo.tier ? solo.leaguePoints + " LP" + " (Solo Queue) " : "Unranked (Solo Queue)"}
                        </Heading>
                    </Box>

                    
        </MotionBox>
    )
}
catch (err) {
    return (null)
}
}

export default SummonerInfoBoxMultiQuery