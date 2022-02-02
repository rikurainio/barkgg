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
        summoner2Id: selfObj.summoner2Id

    }

    //SERVE IMG FROM CDN
    const CDN1231_IMG_BY_CHAMP_NAME
        = "https://ddragon.leagueoflegends.com/cdn/12.3.1/img/champion/" +
            (relevantInfo.championName.toLowerCase()).charAt(0).toUpperCase()
             + (relevantInfo.championName.slice(1)) + ".png"

    const SUMMONER_SPELL_BY_ID
        = "./summonerspells/"

    return (
        <Box
            className='matchhistorychampandrunes'>
                <HStack>
                    <HStack
                        marginBottom={"10px"}>
                        <Image
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
                </HStack>
                <Box>
                    <Image
                        src={CDN1231_IMG_BY_CHAMP_NAME}
                        boxSize={20}
                        borderRadius={0}>

                    </Image>
                    <Heading fontSize={"15px"}>{relevantInfo.championName}</Heading>
                </Box>
        </Box>
    )
}

export default MatchHistoryChampAndRunes