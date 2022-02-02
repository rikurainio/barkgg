import { Flex, Box, VStack, HStack, Text, Image } from '@chakra-ui/react'

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

    //SERVER IMG FROM CDN

    const CDN1231_IMG_BY_CHAMP_NAME
        = "https://ddragon.leagueoflegends.com/cdn/12.3.1/img/champion/" +
            (relevantInfo.championName.toLowerCase()).charAt(0).toUpperCase()
             + (relevantInfo.championName.slice(1)) + ".png"


    return (
        <Box
            className='matchhistorychampandrunes'>
                <HStack>
                    {/*
                    <Box>
                        {<Text>{relevantInfo.championId}</Text>}
                    </Box>
                    */}
                    <VStack>
                        <Text>{relevantInfo.summoner1Id}</Text>
                        <Text>{relevantInfo.summoner2Id}</Text>
                    </VStack>
                </HStack>
                <Box>
                    <Image
                        src={CDN1231_IMG_BY_CHAMP_NAME}
                        boxSize={20}
                        borderRadius={0}>

                    </Image>
                    <Text>{relevantInfo.championName}</Text>
                </Box>
        </Box>
    )
}

export default MatchHistoryChampAndRunes