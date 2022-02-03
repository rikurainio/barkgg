import { Flex, Box, Text, List, ListItem, Heading, VStack, HStack } from '@chakra-ui/react'
import MatchHistory from './MatchHistory'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { m } from 'framer-motion'

const MatchHistoryContainer = ({selfName, puuid, setMatchData, singleMatchData,
                                    setSingleMatchData, requested2, setRequested2, setSummonerName
                                        , resetComponentStates}) => {
    //const [matchInfo, setMatchInfo] = useState({})
    //const [matchMetaData, setMatchMetaData] = useState({})

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


    // SETTINGS FOR API REQUEST
    const API_KEY = process.env.API_KEY
    const API_KEY_TEXT = "?api_key="
    const API_KEY_TEXT2 = "&api_key="
    const BASE_URL = "https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/"
                        + puuid + "/ids?start=0&count=5" + API_KEY_TEXT2 + API_KEY

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

    // HELPER FUNCTION
    function parseValues(){
        //console.log("metadata --> ", singleMatchData[0]['metadata'])
        //console.log("info --> ",  singleMatchData[0]['info'])
        info = singleMatchData[0]['info']
        metadata = singleMatchData[0]['metadata']
    }

    function compare(a, b){
    }

    if(singleMatchData.length){
        parseValues()
        //console.log("matches data", singleMatchData)

        singleMatchData.sort((elemA, elemB) => {
            //console.log("element A: ", elemA, "element B", elemB)
            const a = elemA['info'].gameEndTimestamp
            const b = elemB['info'].gameEndTimestamp
            //console.log("a,b", a,b)

            if(a < b){
                return 1
            }
            if(a > b){
                return -1
            }
            return 0
        })
    }

     return (
        <Flex
        className="matchhistorycontainer"
        marginTop={"40px"}
        flexDirection={"column"}
        marginBottom={"0px"}
        >
            
            <Heading
                fontSize={40}>
                Matches
                <Text
                    paddingLeft={"3px"}
                    fontSize="sm">
                    past (10 Games)
                </Text>
            </Heading>

            <Box>
                {/*Array(singleMatchData.length).fill(<MatchHistory></MatchHistory>)*/}
                {Array
                    .from(Array(singleMatchData.length))
                    .map((x, index) => 
                        <MatchHistory
                            selfName={selfName}
                            info={singleMatchData[index]['info']}
                            metadata={singleMatchData[index]['metadata']}
                            setSummonerName={setSummonerName}
                            resetComponentStates={resetComponentStates}>
                        </MatchHistory>
                )}
            </Box>
           
        </Flex>
    )
}

export default MatchHistoryContainer