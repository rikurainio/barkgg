import { Flex, Box, VStack, HStack } from '@chakra-ui/react'

const MatchHistoryChampAndRunes = (props) => {
    return (
        <Box
            className='matchhistorychampandrunes'>
                <HStack>
                    <Box>
                        champimg
                    </Box>
                    <VStack>
                        summonerit
                    </VStack>
                    <VStack>
                        runet
                    </VStack>
                </HStack>
                <Box>
                    champ name
                </Box>
        </Box>
    )
}

export default MatchHistoryChampAndRunes