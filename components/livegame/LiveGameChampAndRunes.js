import {Box, Image, useColorMode} from '@chakra-ui/react'

const LiveGameChampAndRunes = ({s1, s2, c}) => {
    const SUMMONER_SPELL_BY_ID = "/summonerspells/"
    const RUNE_BY_ID = "/runes/"
    const CHAMP_CDN_PATH = "https://cdn.communitydragon.org/12.4.0/champion/" + c +"/square"
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Box paddingX={"10px"} paddingTop={"15px"} height={"100%"} display={"flex"}>
                <Box padding={"3px"} display={"flex"} flexDir={"column"} pb={"0px"}>
                    <Image
                        objectFit={"contain"}
                        src={SUMMONER_SPELL_BY_ID + s1 + ".png"}
                        borderRadius={0}
                        width={"25px"}  
                        >
                    </Image>
                    <Image
                        marginTop={"5px"}
                        objectFit={"contain"}
                        src={SUMMONER_SPELL_BY_ID + s2 + ".png"}
                        borderRadius={0}
                        width={"25px"}
                        >
                    </Image>
                </Box>
                <Box>
                    <Image
                        objectFit={"contain"}
                        src={CHAMP_CDN_PATH}
                        borderRadius={1}
                        width={"60px"}
                        >
                    </Image>
                </Box>
               
        </Box>
    )
}

export default LiveGameChampAndRunes