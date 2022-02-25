import { Box, Flex, useColorMode, useColorModeValue } from '@chakra-ui/react'

export default function Coinflip(){

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
            </Flex>
        </Box>
    )
}