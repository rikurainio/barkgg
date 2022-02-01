import {Box, HStack, VStack, Image } from '@chakra-ui/react'

const MatchHistoryStats = (props) => {
    return (
        <Box
            className='matchhistorystats'>
                <Box>
                    K / D / A
                </Box>
                <Box>
                    kda calculated
                </Box>
                <Box>
                    Level
                </Box>
                <Box>
                    CS ja CSPERMIN cs
                </Box>
                <Box>
                    Kill participation
                </Box>
                <Box>
                    Tier average ja tieri
                </Box>
        </Box>
    )
}

export default MatchHistoryStats