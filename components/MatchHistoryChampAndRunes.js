import {Box, VStack, HStack, Image, Heading } from '@chakra-ui/react'

const MatchHistoryChampAndRunes = ({selfObj}) => {

    const SUMMONER_SPELL_BY_ID
        = "./summonerspells/"
    const RUNE_BY_ID
        = "./runes/"
    const relevantInfo = {
        championId: selfObj.championId,
        championName: selfObj.championName,
        kills: selfObj.kills,
        deaths: selfObj.deaths,
        assists: selfObj.assists,
        summoner1Id: selfObj.summoner1Id,
        summoner2Id: selfObj.summoner2Id,
        styles: (typeof selfObj.perks.styles === 'undefined') ? {} : selfObj.perks.styles
    }
    
    const CDN1231_IMG_BY_CHAMP_NAME
        = "https://ddragon.leagueoflegends.com/cdn/12.3.1/img/champion/" +
            (relevantInfo.championName.toLowerCase()).charAt(0).toUpperCase()
            + (relevantInfo.championName.slice(1)) + ".png"

    if(selfObj.championName == "FiddleSticks"){
        relevantInfo.championName = "Fiddlesticks"
    }
    
    return (
        <Box
            width={"100%"}
            paddingTop={"5px"}
            paddingLeft={"5px"}
            className='matchhistorychampandrunes'>
                <HStack>
                    <VStack>

                        <HStack paddingRight={"6px"} spacing={"-1px"}>
                            <Image
                                src={RUNE_BY_ID + relevantInfo.styles[0].selections[0].perk + ".png"}
                                boxSize={"36px"}
                                >
                            </Image>
                            <Image
                                src={RUNE_BY_ID + relevantInfo.styles[1].style + ".png"}
                                boxSize={"20px"}
                                >
                            </Image>
                        </HStack>

                        <HStack
                            spacing={"4px"}>
                            <Image
                                src={SUMMONER_SPELL_BY_ID + relevantInfo.summoner1Id + ".png"}
                                boxSize={"27px"}
                                borderRadius={4}>
                                
                            </Image>
                            <Image
                                src={SUMMONER_SPELL_BY_ID + relevantInfo.summoner2Id + ".png"}
                                boxSize={"27px"}
                                borderRadius={4}>
                                
                            </Image>
                        </HStack>

                        <Box>
                            <Image
                                src={CDN1231_IMG_BY_CHAMP_NAME}
                                borderRadius={2}
                                boxSize={"64px"}>

                            </Image>
                            <Heading textAlign={"center"} paddingTop={"2px"} fontWeight={100} fontSize={"15px"}>{relevantInfo.championName}</Heading>
                        </Box>

                    </VStack>
                </HStack>
        </Box>
    )
}

export default MatchHistoryChampAndRunes