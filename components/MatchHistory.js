import {Flex, Box, VSTack, HStack, Image } from '@chakra-ui/react'
import MatchHistoryChampAndRunes from './MatchHistoryChampAndRunes'
import MatchHistoryItems from './MatchHistoryItems'
import MatchHistoryPlayer from './MatchHistoryPlayer'
import MatchHistoryStats from './MatchHistoryStats'
import MatchHistoryTimeMode from './MatchHistoryTimeMode'
import axios from 'axios'

import { useEffect, useState } from 'react'

const MatchHistory = ({puuid}) => {
    const [matchIds, setMatchIds] = useState([])
    const [matchData, setMatchData] = useState()

    console.log("matchids: ", matchIds)
    console.log("matchdata: ", matchData)

    // SETTINGS FOR AXIOS.GET MATCHIDS
    const API_KEY = "RGAPI-619b15a5-d227-49c0-8b50-1be5d2b1e3dc"
    const API_KEY_TEXT = "&api_key="
    const BASE_URL = "https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/ZVh2B7K9CtAHjBiWewQ09fwY7w3QSP5KRuefE8c7zD4DLpT08RbLrhM6K-pZGNWlsiBestWhGNubqA/ids?start=0&count=10"

    // SETTINGS FOR AXIOS.GET SINGLE MATCH DATA
    const API_KEY_TEXT_2 = "?api_key="
    const BASE_URL_2 = "https://europe.api.riotgames.com/lol/match/v5/matches/EUW1_5705616853"

    useEffect(() => {
        axiosTryGetMatchIds()
        axiosTryGetMatchData()
    }, [])

    // GET PAST GAMES HISTORY FOR PAST 10 GAMES
    async function axiosTryGetMatchIds() {
        try {
            const {data:response} = await axios.get(BASE_URL + API_KEY_TEXT + API_KEY)
            setMatchIds(JSON.stringify(response))
        }
        catch (error) {
            console.log(error);
        }
    }

    // GET SINGLE MATCH DETAILS
    async function axiosTryGetMatchData() {
        try {
            const {data:response} = await axios.get(BASE_URL_2 + API_KEY_TEXT_2 + API_KEY)
            setMatchData(JSON.stringify(response))
        }
        catch (error) {
            console.log(error);
        }
    }

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