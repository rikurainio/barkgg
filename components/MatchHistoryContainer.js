import { Box, Text, List, ListItem, Heading } from '@chakra-ui/react'
import MatchHistory from './MatchHistory'
import { useEffect } from 'react'
import axios from 'axios'

import { motion } from 'framer-motion'
const MotionBox = motion(Box)

const MatchHistoryContainer = ({selfName, puuid, setMatchData, singleMatchData,
                                    setSingleMatchData, requested2, setRequested2, setSummonerName
                                        , resetComponentStates}) => {

    useEffect(() => {
        if(setMatchData.length && puuid != ""){
            axiosTryGetMatchIds()
            .then(response => {
                //console.log("response: ", response.length)
                for(let i=0; i < response.length; i++){
                    //console.log("matchid= ", response[i])
                    axiosTryGetMatchDataByMatchId(response[i])
                }
            })
            .catch()
        }
    }, [])


    console.log("MATCH HISTORY CONTAINER GETS THESE PROPS: "
                 +"\n" + "self name: " + selfName
                 +"\n" + "puuId: " + puuid
                 +"\n" + "requested " + requested2)

    // TEST VAR
    const info = {}
    const metadata = {}

    // SETTINGS FOR API REQUEST
    const API_KEY = process.env.API_KEY
    const API_KEY_TEXT = "?api_key="
    const API_KEY_TEXT2 = "&api_key="
    const BASE_URL = "https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/"
                        + puuid + "/ids?start=0&count=8" + API_KEY_TEXT2 + API_KEY
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
            return
        }
     }

    // AXIOS GET SINGLE MATCH DATA CHUNK FOR X AMOUNT OF GAMES
    async function axiosTryGetMatchDataByMatchId(matchid) {

        try{
            const {data:response} = await axios.get(BASE_URL_MATCHDATA + matchid + API_KEY_TEXT + API_KEY)
            setSingleMatchData( singleMatchData => [...singleMatchData, response])
            return response
        }
        catch (error) {
            console.log(error)
            return
        }
    }

    function parseValues(){
        info = singleMatchData[0]['info']
        metadata = singleMatchData[0]['metadata']
    }

    if(singleMatchData.length){
        parseValues()
        singleMatchData.sort((elemA, elemB) => {
            const a = elemA['info'].gameEndTimestamp
            const b = elemB['info'].gameEndTimestamp
            if(a < b){
                return 1
            }
            if(a > b){
                return -1
            }
            return 0
        })
    }

    console.log("MATCHES DATA LIST: "
     /*+"\n" + JSON.stringify(singleMatchData, null, 2) */
    +"\n" + "FOUND DATA CHUNK FOR " + singleMatchData.length + " MATCHES.")

    return (
    <MotionBox
        className="matchhistorycontainer"
        marginTop={"40px"}
        flexDirection={"column"}
        marginBottom={"0px"}>
        
        <Heading
            fontSize={40}>
            Matches
            <Text
                paddingLeft={"3px"}
                fontSize="sm">
                past (8 Games)
            </Text>
        </Heading>

        <Box>
            <List>
                {Array
                    .from(Array(singleMatchData.length))
                    .map((x, index) =>
                        <ListItem>
                            <MatchHistory
                                selfName={selfName}
                                info={singleMatchData[index]['info']}
                                metadata={singleMatchData[index]['metadata']}
                                setSummonerName={setSummonerName}
                                resetComponentStates={resetComponentStates}>
                            </MatchHistory>
                        </ListItem>)}
            </List>
        </Box>
    </MotionBox>
)
}

export default MatchHistoryContainer