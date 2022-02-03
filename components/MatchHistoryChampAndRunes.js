import { Flex, Box, VStack, HStack, Text, Image, Heading } from '@chakra-ui/react'

const MatchHistoryChampAndRunes = ({selfObj}) => {
    //HELPER FOR RELEVANT DATA
    const relevantInfo = {
        championId: selfObj.championId,
        championName: selfObj.championName,

        kills: selfObj.kills,
        deaths: selfObj.deaths,
        assists: selfObj.assists,

        summoner1Id: selfObj.summoner1Id,
        summoner2Id: selfObj.summoner2Id,

        styles: selfObj.perks.styles
    }

    //SERVE IMG FROM CDN
    const CDN1231_IMG_BY_CHAMP_NAME
        = "https://ddragon.leagueoflegends.com/cdn/12.3.1/img/champion/" +
            (relevantInfo.championName.toLowerCase()).charAt(0).toUpperCase()
             + (relevantInfo.championName.slice(1)) + ".png"

    const SUMMONER_SPELL_BY_ID
        = "./summonerspells/"

    const RUNE_BY_ID
        = "./runes/"


    //console.log("r_info", relevantInfo.styles)

    return (
        <Box
            paddingTop={"10px"}
            paddingBottom={"0px"}
            className='matchhistorychampandrunes'>
                <HStack>

                    <Image
                        marginTop={"0px"}
                        src={RUNE_BY_ID + relevantInfo.styles[0].selections[0].perk + ".png"}
                        boxSize={"60px"}
                        borderRadius={3}>
                            
                    </Image>

                    <VStack>
                        <HStack
                            marginBottom={"0px"}
                            >
                            <Image
                                objectFit={"cover"}
                                src={SUMMONER_SPELL_BY_ID + relevantInfo.summoner1Id + ".png"}
                                boxSize={"35px"}
                                borderRadius={3}>
                                
                            </Image>
                            <Image
                                src={SUMMONER_SPELL_BY_ID + relevantInfo.summoner2Id + ".png"}
                                boxSize={"35px"}
                                borderRadius={3}>
                                
                            </Image>
                        </HStack>
                        <Box>
                            <Image
                                src={CDN1231_IMG_BY_CHAMP_NAME}
                                boxSize={"80px"}
                                borderRadius={3}>

                            </Image>
                            <Heading paddingTop={"2px"} fontSize={"15px"}>{relevantInfo.championName}</Heading>
                        </Box>
                    </VStack>
                </HStack>
        </Box>
    )
}

export default MatchHistoryChampAndRunes