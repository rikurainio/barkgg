import {Flex,Text, Box, Center, VStack, HStack, ListItem, List, Heading, color} from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import asd from '../public/ddragon/profileIconData.json'

const SummonerInfoBox = ({summonerData, leagueData}) => {
    const solo = {}
    const flex = {}

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
            solo = leagueData['0']
            flex = leagueData['1']

            console.log("my rank is: ", solo.tier)

            RANKED_WINGS_SRC = "./wings/wings_" + (solo.tier).toLowerCase() + ".png"

        }

        return (
            <Box
                width={500}
                height={300}
                as="div"
                className='summonerinfobox'
            >
                    <Text>RESULTS</Text>

                    <List
                        marginBottom={"20px"}>
                        <ListItem>
                            <Heading>
                                {summonerValues['name']}
                            </Heading>
                        </ListItem>
                        <ListItem>
                            <Text fontSize={25}>
                                Level {summonerValues['summonerLevel']}
                            </Text>
                        </ListItem>
                        <ListItem>
                            <Text fontSize={12}>
                                Encrypted Account ID: {summonerValues['accountId']}
                            </Text>
                        </ListItem>
                        <ListItem>
                            <Text fontSize={12}>
                                Encrypted PUUID: {summonerValues['puuid']}
                            </Text>
                        </ListItem>
                        <ListItem>
                            <Text fontSize={12}>
                                Encrypted ID: {summonerValues['id']}
                            </Text>
                        </ListItem>
                        <ListItem>
                            <Text fontSize={12}>
                                Revision date: {summonerValues['revisionDate']}
                            </Text>
                        </ListItem>
                    </List>

                    <Box
                        className='summonericonbox'>
                        <Box>
                            <Image
                                backgroundColor={"red.500"}
                                alignSelf={"center"}
                                position={"absolute"}
                                borderRadius='2px'
                                src={CDN1231}
                                boxSize={100}>
                            </Image>
                        </Box>

                        {/*
                        <Box className='wingbox'>
                            <Image
                                backgroundColor={"whiteAlpha.600"}
                                alignSelf={"center"}
                                position={"absolute"}
                                src={RANKED_WINGS_SRC}
                                width={300}
                            >
                            </Image>
                        </Box>
                        */}
                    </Box>
            </Box>
        )

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