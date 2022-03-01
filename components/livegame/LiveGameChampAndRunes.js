import {Box, Image} from '@chakra-ui/react'

const LiveGameChampAndRunes = ({s1, s2, c}) => {
    const SUMMONER_SPELL_BY_ID = "/summonerspells/"
    const RUNE_BY_ID = "/runes/"
    const CHAMP_CDN_PATH = "https://cdn.communitydragon.org/12.4.0/champion/" + c +"/square"

    return (
        <Box height={"100%"} w={"60px"} display={"flex"} flexDirection={"column"}>
                <Box display={"flex"} pb={"5px"}>
                    <Image
                        ml={"4px"}
                        objectFit={"contain"}
                        src={SUMMONER_SPELL_BY_ID + s1 + ".png"}
                        borderRadius={0}
                        width={"25px"}  
                        >
                    </Image>
                    <Image
                        ml={"5px"}
                        objectFit={"contain"}
                        src={SUMMONER_SPELL_BY_ID + s2 + ".png"}
                        borderRadius={0}
                        width={"25px"}
                        >
                    </Image>
                </Box>
                <Image
                    objectFit={"contain"}
                    src={CHAMP_CDN_PATH}
                    borderRadius={1}
                    width={"60px"}
                    >
                </Image>
        </Box>
    )
}

export default LiveGameChampAndRunes