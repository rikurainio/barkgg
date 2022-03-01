import {Box, Flex, Image} from '@chakra-ui/react'

const Runes = ({runes}) => {
    const RUNE_BY_ID
        = "/runes/"
    console.log("runes: ", runes)

    if(runes){
        return (
            <Flex flexDir={"row"}>

                <Box paddingTop={"15px"}>
                {runes.slice(0,1).map((runeId, idx) => {
                    return (
                        <Image
                            objectFit={"contain"}
                            src={RUNE_BY_ID + runeId + ".png"}
                            borderRadius={0}
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
                            objectFit={"contain"}
                            src={RUNE_BY_ID + runeId + ".png"}
                            borderRadius={0}
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
                            objectFit={"contain"}
                            src={RUNE_BY_ID + runeId + ".png"}
                            borderRadius={0}
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
                            objectFit={"contain"}
                            src={RUNE_BY_ID + runeId + ".png"}
                            borderRadius={0}
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