import {Box, Flex, HStack, useDisclosure, Collapse, Text } from '@chakra-ui/react'
import MatchHistoryChampAndRunes from './MatchHistoryChampAndRunes'
import MatchHistoryItems from './MatchHistoryItems'
import MatchHistoryPlayer from './MatchHistoryPlayer'
import MatchHistoryStats from './MatchHistoryStats'
import MatchHistoryTimeMode from './MatchHistoryTimeMode'
import { Fade, ScaleFade, Slide, SlideFade, useColorModeValue, useColorMode } from '@chakra-ui/react'

// FRAMER MOTION
import { motion } from 'framer-motion'
const MotionBox = motion(Box)

// COMPONENT FOR SHOWING SINGULAR MATCH HISTORY GAME CARD
// info PROP CONTAINS DATA FOR A SINGULAR MATCH
const MatchHistoryMultiQuery = (match) => {
    console.log("single summoner dat a: ", match.match)
    console.log("test ", match.match.metadata)
    
    if(match){
        return (
            <Box backgroundColor={"gray"}>
                <Text>{JSON.stringify(match.match.metadata.matchId, null, 2)}</Text>
            </Box>
        )
    }
}

export default MatchHistoryMultiQuery