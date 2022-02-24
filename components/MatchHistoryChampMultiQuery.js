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
            <Box paddingLeft={"20px"} paddingTop={"5px"}>
                    <Image
                        objectFit={"contain"}
                        src={CDN1231_IMG_BY_CHAMP_NAME}
                        borderRadius={1}
                        width={"42px"}
                        >
                    </Image>
            </Box>
    )
}

export default MatchHistoryChampMultiQuery