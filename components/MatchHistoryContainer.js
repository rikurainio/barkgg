import { Box, Text, List, ListItem, Heading, ColorMode, useColorMode, useColorModeValue } from '@chakra-ui/react'
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

    // TEST VAR
    const info = {}
    const metadata = {}
    const modeColorsPastGames = ('white', 'white')
    const { colorMode, toggleColorMode } = useColorMode()

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


    //   console.log("MATCHES DATA LIST: "
     /*+"\n" + JSON.stringify(singleMatchData, null, 2) */
    //   +"\n" + "FOUND DATA CHUNK FOR " + singleMatchData.length + " MATCHES.")

    return (
    <MotionBox
        initial={{opacity:0,  x:10}}
        animate={{opacity:100, x:0}}
        transition={{delay: 0.8}}
        width={"100%"}
        h={"1000px"}
        className="matchhistorycontainer"
        >
        
        <Box
            marginTop={"10px"}
            background={colorMode === 'light' ? 'rgba(245, 245, 250, .65)' : 'rgba(40, 43, 44, .55)'}
            className='pastmatchesheading'>
                <Text
                paddingTop={"5px"}
                color={modeColorsPastGames}
                fontWeight={100}
                fontSize={"16px"}>
                <Text
                fontWeight={100}
                color={modeColorsPastGames}
                >
                </Text>
        </Text>
        </Box>

        

        <Box width={"100%"}>
            <List>
                {Array
                    .from(Array(singleMatchData.length))
                    .map((x, index) =>
                        <ListItem key={"match-history-item-" + index}>
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