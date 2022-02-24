import {Box, VStack, HStack, Image, Heading, Flex } from '@chakra-ui/react'

const MatchHistoryChampMultiQuery = ({selfObj}) => {

    const SUMMONER_SPELL_BY_ID
        = "/summonerspells/"
    const RUNE_BY_ID
        = "/runes/"
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
        <Box>
            <Box height={"100%"} w={"60px"} display={"flex"} flexDirection={"column"}>
                    <Box display={"flex"} pb={"5px"}>
                        <Image
                            ml={"4px"}
                            objectFit={"contain"}
                            src={SUMMONER_SPELL_BY_ID + relevantInfo.summoner1Id + ".png"}
                            borderRadius={0}
                            width={6}
                            >
                        </Image>
                        <Image
                            ml={"5px"}
                            objectFit={"contain"}
                            src={SUMMONER_SPELL_BY_ID + relevantInfo.summoner2Id + ".png"}
                            borderRadius={0}
                            width={6}
                            >
                        </Image>
                    </Box>

                    <Image
                        objectFit={"contain"}
                        src={CDN1231_IMG_BY_CHAMP_NAME}
                        borderRadius={1}
                        width={"60px"}
                        >
                    </Image>
            </Box>
        </Box>
    )
}

export default MatchHistoryChampMultiQuery