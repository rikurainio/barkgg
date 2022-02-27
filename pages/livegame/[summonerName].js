import { useRouter } from 'next/router'
import { Flex, Box, useColorMode, Text, Spinner, useColorModeValue, color } from '@chakra-ui/react'
import SummonerInfoBox from '../../components/SummonerInfoBox'
import { useState, useEffect } from 'react'
import MatchHistoryContainer from '../../components/MatchHistoryContainer'
import axios from 'axios'
import { useAppContext } from '../../context/state'


const Summoner = () => {
    const router = useRouter()
    const [requested, setRequested] = useState(false)
    const [isFetching, setIsFetching] = useState(true)
    const { colorMode, toggleColorMode } = useColorMode()
    const modeColorsShadowBox = useColorModeValue('rgba(255, 255, 255, 0)', 'rgba(0, 0, 0, 0)')   

    const [liveGame, setLiveGame] = useState()
    const [puuid, setPuuid] = useState("")
    const [encryptedSummonerId, setEncryptedSummonerId] = useState("")

    useEffect(() => {
        setRequested(false)

        // GOT QUERY PARAM
        if(router.isReady){
            let configGetSummonerByName = {
                headers: {
                    "X-Riot-Token": process.env.API_KEY
                }
            }
            let configGetLiveGameById = {
                headers: {
                    "X-Riot-Token": process.env.API_KEY
                }
            }
            console.log("query name: ", router.query.summonerName)

            // GET SUMMONER BY LITERAL NAME
            axios.get("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + router.query.summonerName, configGetSummonerByName)
                .then((response => {
                    //VER 1.0
                    setPuuid(response.data.puuid)
                    setEncryptedSummonerId(response.data.id)
                }))
        }
        else{
        }
    }, [router.isReady])
    
    if(isFetching){
        return(
            <Flex
                    background={colorMode === 'light' ? "#F8F8F8" : "black"}
                    backgroundImage={colorMode === 'light' ? '/backgrounds/anniefadedblur.png' : '/backgrounds/xinzhaoartblur.png'}
                    backgroundSize={"100%"}
                    backgroundRepeat={"no-repeat"}
                    height={"1600px"}
                    as="div" 
                    className="content-container"
                    justifyContent={"center"}
                    >
                        <Box marginTop={"100px"}>
                            <Text paddingLeft={"5px"} paddingBottom={"10px"} fontWeight={500} textAlign={"center"}> Loading ... </Text>
                            <Spinner    thickness='18px'
                                        speed='0.4s'
                                        emptyColor={colorMode == 'light' ? "#f5f5fa" : "#0E0E0E"}
                                        color={colorMode == 'light' ? "#3182CE" : "#CE3636"}
                                        boxSize={"150px"}
                                        />
                        </Box>
                    </Flex>
        )
    }
    else{
        console.log("data post fetch: ", liveGame)
        return (
            <Flex
                flexDir={"row"}
                background={colorMode === 'light' ? "#F8F8F8" : "black"}
                backgroundImage={colorMode === 'light' ? '/backgrounds/anniefadedblur.png' : '/backgrounds/xinzhaoartblur.png'}
                backgroundSize={"100%"}
                backgroundRepeat={"no-repeat"}
                height={"1600px"}
                as="div" 
                className="content-container"
                justifyContent={"center"}
                >
            </Flex>
        )
    }
}

export default Summoner