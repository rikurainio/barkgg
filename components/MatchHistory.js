import {Box, HStack } from '@chakra-ui/react'
import MatchHistoryChampAndRunes from './MatchHistoryChampAndRunes'
import MatchHistoryItems from './MatchHistoryItems'
import MatchHistoryPlayer from './MatchHistoryPlayer'
import MatchHistoryStats from './MatchHistoryStats'
import MatchHistoryTimeMode from './MatchHistoryTimeMode'
import axios from 'axios'

import { useEffect, useState } from 'react'

const MatchHistory = ({matchData}) => {
    return (
        <Box
            minH={150}
            maxH={150}
            mt={10}
            mb={10}
            display={'flex'}
            align='center'
            backgroundColor="#d4d4d4"
            borderRadius={5}
            height={100}>
            <HStack >
                <MatchHistoryTimeMode></MatchHistoryTimeMode>
                <MatchHistoryChampAndRunes></MatchHistoryChampAndRunes>
                <MatchHistoryStats></MatchHistoryStats>
                <MatchHistoryItems></MatchHistoryItems>
                <MatchHistoryPlayer></MatchHistoryPlayer>
            </HStack>
        </Box>
    )
}

export default MatchHistory