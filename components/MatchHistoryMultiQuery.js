import {Box, Flex, HStack, useDisclosure, Collapse } from '@chakra-ui/react'
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
const MatchHistoryMultiQuery = ({match}) => {
    console.log("single summoner data: ", match)

    return (
        <Box backgroundColor={"gray"}>
            {JSON.stringify(match.metadata.matchId, null ,2)}
        </Box>
    )
}

export default MatchHistoryMultiQuery