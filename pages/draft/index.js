import { Box, Flex, Image, useColorMode, useColorModeValue } from '@chakra-ui/react'

export default function Draft(){

    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Box>
            <Flex background={colorMode === 'light' ? "#F8F8F8" : "black"}
                    backgroundImage={colorMode === 'light' ? '/backgrounds/anniefadedblur.png' : '/backgrounds/xinzhaoartblur.png'}
                    backgroundSize={"100%"}
                    backgroundRepeat={"no-repeat"}
                    height={"2100px"}
                    as="div"
                    className="content-container"
                    justifyContent={"center"}>

                    <Box
                        paddingTop={"20px"}
                    >
                        <Image
                            borderRadius={"6px"}
                            width={"1200px"}
                            height={"800px"}
                            src={"/backgrounds/summonersrift.png"}
                        >
                        </Image>
                    </Box>
            </Flex>
        </Box>
    )
}