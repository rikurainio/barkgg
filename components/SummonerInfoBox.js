import {Flex,Text, Box, Center, VStack, HStack, ListItem, List, Heading, color} from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import asd from '../public/ddragon/profileIconData.json'
import { render } from "react-dom";
import { LayeredImage } from "react-layered-image";

const SummonerInfoBox = ({summonerData, leagueData}) => {
    const solo = {}
    const flex = {}
    const tft = {}

    const RankColor = {
        Challenger: "teal.500",
        Grandmaster: "red.500",
        Master: "purple.500",
        Diamond: "blue.500",
        Platinum: "turqoise.500",
        Gold: "gold.500",
        Silver: "silver.500",
        Bronze: "bronze.500",
        Iron: "gray.500",
    }

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
            RANKED_WINGS_SRC = "./wings/wings_" + (solo.tier).toLowerCase() + ".png"
        }

        if(solo.tier != undefined){
            return (
                <Box
                    marginTop={"120px"}
                    className='summonerinfobox'
                >
                        <Box>
                            <Image
                                borderRadius='full'
                                src={CDN1231}
                                boxSize={100}>
    
                                
                            </Image>
                            <Box
                                marginTop={-274}>
                                <Image  
                                        marginLeft={"-93.8px"}
                                        src={RANKED_WINGS_SRC}
                                        width={290}>
                                </Image>
                            </Box>
                            
                        </Box>
                        <List
                            marginTop={"-240"}
                            marginLeft={"200"}
                            >
                            <ListItem>
                                
                                <Heading
                                    fontSize={"80px"}>
                                    {summonerValues['name']}
                                </Heading>
                            </ListItem>

                            <Box
                                marginLeft={"6px"}>
                                <ListItem>
                                    <Text
                                        marginTop={"10px"}
                                        fontSize={25}>
                                        Level {summonerValues['summonerLevel']}
                                    </Text>
                                    <Box>
                                        <Heading
                                            fontSize={"15px"}>
                                            {solo.tier}
                                        </Heading>
                                    </Box>
                                </ListItem> 
                            </Box>

                        </List>
                </Box>
            )
        }
        else{
            return (
                <Box
                    marginTop={"120px"}
                    className='summonerinfobox'
                >
                        <Box>
                            <Image
                                borderRadius='full'
                                src={CDN1231}
                                boxSize={100}>
                            </Image>
                        </Box>
                        <List
                            marginTop={"-240"}
                            marginLeft={"200"}
                            >
                            <ListItem>
                                <Heading
                                    fontSize={"80px"}>
                                    {summonerValues['name']}
                                </Heading>
                            </ListItem>
                            <ListItem>
                                <Text
                                    marginTop={"10px"}
                                    fontSize={25}>
                                    Level {summonerValues['summonerLevel']}
                                </Text>
                            </ListItem> 
                        </List>
                </Box>
            )
        }
    }
    catch (err) {
        //console.log("couldnt parse obj")

        return (
            <div>

            </div>
        )
    }
}

export default SummonerInfoBox