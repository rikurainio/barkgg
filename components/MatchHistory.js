import {Box, HStack } from '@chakra-ui/react'
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
    const [matchId, setMatchId] = useState("")

    useEffect(() => {
        axiosTryGetMatchIds()
    }, [])

    // SETTINGS FOR AXIOS.GET MATCHIDS
    const API_KEY = process.env.API_KEY
    const API_KEY_TEXT = "&api_key="
    const API_KEY_TEXT_2 = "?api_key="
    const BASE_URL = "https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/"+ puuid +"/ids?start=0&count=10"


    // GET PAST GAMES HISTORY FOR PAST 10 GAMES
    async function axiosTryGetMatchIds() {
        try {
            const {data:response} = await axios.get(BASE_URL + API_KEY_TEXT + API_KEY)
            setMatchIds(response)
            setMatchId(response[0])
            console.log(matchIds)
            console.log(matchId)
            axiosTryGetMatchData()
            console.log(matchData)
        }
        catch (error) {
            console.log(error);
        }
    }

    // GET SINGLE MATCH DETAILS
    async function axiosTryGetMatchData() {
        try {

            const BASE_URL_2 = "https://europe.api.riotgames.com/lol/match/v5/matches/" + matchId
            const {data:response} = await axios.get(BASE_URL_2 + API_KEY_TEXT_2 + API_KEY)
            setMatchData(response)
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