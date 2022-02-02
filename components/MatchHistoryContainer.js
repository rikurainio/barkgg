import { Flex, Box, Text, List, ListItem, Heading } from '@chakra-ui/react'
import MatchHistory from './MatchHistory'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { m } from 'framer-motion'

const MatchHistoryContainer = ({puuid, setMatchData, singleMatchData, setSingleMatchData, requested2, setRequested2}) => {


    useEffect(() => {
        if(setMatchData.length){
            
        axiosTryGetMatchIds()
        .then(response => {
            console.log("response: ", response.length)
            for(let i=0; i < response.length; i++){
                console.log("matchid= ", response[i])
                
                axiosTryGetMatchDataByMatchId(response[i])
            }
        })
        .catch()
        }
    }, [])

    // SETTINGS FOR API REQUEST
    const API_KEY = process.env.API_KEY
    const API_KEY_TEXT = "?api_key="
    const API_KEY_TEXT2 = "&api_key="
    const BASE_URL = "https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/"
                        + puuid + "/ids?start=0&count=10" + API_KEY_TEXT2 + API_KEY

    const BASE_URL_MATCHDATA = "https://europe.api.riotgames.com/lol/match/v5/matches/"

    // TRY GET MATCHIDS BY BASE_URL
    async function axiosTryGetMatchIds() {
        try {
        setRequested2(false)
        const {data:response} = await axios.get(BASE_URL)
        setMatchData(response)
        return response
        }
        catch (error) {
        setRequested2(false)
        console.log(error);
        }
     }

    async function axiosTryGetMatchDataByMatchId(matchid) {

        try{
            const {data:response} = await axios.get(BASE_URL_MATCHDATA + matchid + API_KEY_TEXT + API_KEY)
            setSingleMatchData( singleMatchData => [...singleMatchData, response])
            return response
        }
        catch (error) {
            console.log(error)
        }
    }
     /*
     if(requested2){
         axiosTryGetMatchIds
     }
     */
     //RENDER
     return (
        <Flex
        marginTop={50}
        flexDirection={"column"}
        marginBottom={50}
        >
            
            <Heading
                fontSize={40}>
                Matches

                <List>
                    {singleMatchData.map(matchData => {
                        <ListItem><Text>{JSON.stringify(matchData.metadata)}</Text></ListItem>
                    })}
                </List>
            </Heading>
        </Flex>
    )
}

export default MatchHistoryContainer