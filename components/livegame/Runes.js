import {Box, Flex, Image, Text, useColorModeValue, useColorMode} from '@chakra-ui/react'

const Runes = ({runes, primary, secondary}) => {
    const RUNE_BY_ID
        = "/runes/"

    const { colorMode, toggleColorMode } = useColorMode()
    const modeColor = useColorModeValue('black', 'white')
    if(runes){
        return (
            <Flex
                padding={"10px"}
                borderRadius={"5px"}
                flexDir={"row"}>

                <Box paddingTop={"15px"}>
                {runes.slice(0,1).map((runeId, idx) => {
                    return (
                        <Image
                            key={"rune-chunk-" + runeId + "-" + idx + "-first"}
                            objectFit={"contain"}
                            src={RUNE_BY_ID + runeId + ".png"}
                            borderRadius={"full"}
                            width={idx == 0 ? "60px" : "30px"}
                        >
                        </Image>
                    )
                })}
                </Box>
                <Box>
                {runes.slice(1,4).map((runeId, idx) => {
                    return (
                        <Image
                            key={"rune-chunk-" + runeId + "-" + idx + "-second"}
                            border={colorMode == 'light' ? '2px solid #f0f0f0' : '2px solid #1a1a1a'}
                            objectFit={"contain"}
                            src={RUNE_BY_ID + runeId + ".png"}
                            borderRadius={"full"}
                            width={"30px"}
                        >
                        </Image>
                    )
                })}
                </Box>

                <Box>
                {runes.slice(4,6).map((runeId, idx) => {
                    return (
                        <Image
                            key={"rune-chunk-" + runeId + "-" + idx + "-third"}
                            border={colorMode == 'light' ? '2px solid #f0f0f0' : '2px solid #1a1a1a'}
                            objectFit={"contain"}
                            src={RUNE_BY_ID + runeId + ".png"}
                            borderRadius={"full"}
                            width={"30px"}
                        >
                        </Image>
                    )
                })}
                </Box>

                <Box>
                {runes.slice(6,9).map((runeId, idx) => {
                    return (
                        <Image
                            key={"rune-chunk-" + runeId + "-" + idx + "-fourth"}
                            border={colorMode == 'light' ? '2px solid #f0f0f0' : '2px solid #1a1a1a'}
                            objectFit={"contain"}
                            src={RUNE_BY_ID + runeId + ".png"}
                            borderRadius={"full"}
                            width={"30px"}
                        >
                        </Image>
                    )
                })}
                </Box>
            </Flex>
        )
    }
    else{return null}
}

export default Runes