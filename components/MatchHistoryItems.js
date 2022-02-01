import {Box, HStack, VStack, Image } from '@chakra-ui/react'

// HELPER COMPONENT FOR RENDERING BUILT ITEMS
const MatchHistoryItems = (props) => {
    return (
        <Box
            justifyContent={"center"}
            display={"flex"}
            className='matchhistoryitems'>

                <VStack>
                    <HStack spacing="1">
                        <Box width={8} height={8}>
                            <Image src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt13411a5318c77e70/5fa1eff9f9cf41781dad68e2/3153_Fighter_T3_BladeoftheRuinedKing.png"></Image>
                        </Box>
                        <Box width={8} height={8}>
                            <Image src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt13411a5318c77e70/5fa1eff9f9cf41781dad68e2/3153_Fighter_T3_BladeoftheRuinedKing.png"></Image>
                        </Box>
                        <Box width={8} height={8}>
                            <Image src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt13411a5318c77e70/5fa1eff9f9cf41781dad68e2/3153_Fighter_T3_BladeoftheRuinedKing.png"></Image>
                        </Box>
                    </HStack>
                    <HStack spacing="1">
                        <Box width={8} height={8}>
                            <Image src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt13411a5318c77e70/5fa1eff9f9cf41781dad68e2/3153_Fighter_T3_BladeoftheRuinedKing.png"></Image>
                        </Box>
                        <Box width={8} height={8}>
                            <Image src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt13411a5318c77e70/5fa1eff9f9cf41781dad68e2/3153_Fighter_T3_BladeoftheRuinedKing.png"></Image>
                        </Box>
                        <Box width={8} height={8}>
                            <Image src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt13411a5318c77e70/5fa1eff9f9cf41781dad68e2/3153_Fighter_T3_BladeoftheRuinedKing.png"></Image>
                        </Box>
                    </HStack>
                </VStack>
                

        </Box>
    )
}

export default MatchHistoryItems