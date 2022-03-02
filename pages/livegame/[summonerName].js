import { useRouter } from 'next/router'
import { Flex, Box, useColorMode, Text, Spinner, useColorModeValue, color, HStack } from '@chakra-ui/react'
import SummonerInfoBox from '../../components/SummonerInfoBox'
import { useState, useEffect } from 'react'
import MatchHistoryContainer from '../../components/MatchHistoryContainer'
import axios from 'axios'
import { useAppContext } from '../../context/state'
import TeamContainer from '../../components/livegame/TeamContainer'
import GameType from '../../components/livegame/GameType'

const Summoner = () => {
    const router = useRouter()
    const [requested, setRequested] = useState(false)
    const [isFetching, setIsFetching] = useState(false)
    const { colorMode, toggleColorMode } = useColorMode()
    const modeColorsShadowBox = useColorModeValue('rgba(255, 255, 255, 0)', 'rgba(0, 0, 0, 0)')   
    const [liveGame, setLiveGame] = useState()
    const [playing, setPlaying] = useState(false)

    useEffect(() => {
        setIsFetching(true)
        setRequested(false)

        // GOT QUERY PARAM
        if(router.isReady){
            let summonerPromise = {}
            // GET SUMMONER BY LITERAL NAME
            summonerPromise = axios.get("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + router.query.summonerName + "?api_key=" + process.env.API_KEY)
            summonerPromise.then(function(result){
                let liveGamePromise = {}
                liveGamePromise = axios.get("https://euw1.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/" + result.data.id + "?api_key=" + process.env.API_KEY)

                liveGamePromise
                    .then(function(result){
                        if(result){
                            let liveGameData = result.data
                            if(result.status == 404){
                                setPlaying(false)
                            }
                            else if(result.status == 200){
                                setLiveGame(liveGameData)
                                setIsFetching(false)
                                setPlaying(true)
                            }
                        }
                        else{
                            setPlaying(false)
                        }
                    })
                    .catch((err) => {
                        console.log("summoner probably not in a live game.", err)
                        setPlaying(false)
                        setIsFetching(false)
                    })
            })
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
        if(playing){
            if(liveGame.participants.length == 10){
                return (
                    <Flex
                        flexDir={"column"}
                        background={colorMode === 'light' ? "#F8F8F8" : "black"}
                        backgroundImage={colorMode === 'light' ? '/backgrounds/anniefadedblur.png' : '/backgrounds/xinzhaoartblur.png'}
                        backgroundSize={"100%"}
                        backgroundRepeat={"no-repeat"}
                        height={"1100px"}
                        className="content-container"
                    >
                        <Box
                            padding={"10px"}
                            bgColor={colorMode === 'light' ? "rgba(248,248,248, .8)" : "rgba(20,20,20, .8)"}>
                            <GameType
                                startTime={liveGame.gameStartTime}
                                gameLength={liveGame.gameLength}
                                gameMode={liveGame.gameMode}
                                gameType={liveGame.gameType}    
                                mapId={liveGame.mapId}
                                queueId={liveGame.gameQueueConfigId}
                            >
                            </GameType>
                        </Box>  

                        <Box>
                            <Flex justify={"center"} paddingTop={"20px"} flexDir={"row"}>
                                <Box marginRight={"20px"}>
                                    <TeamContainer
                                        teamId={"100"} 
                                        bluePlayers={liveGame.participants.slice(0,5)}
                                        blueBans={liveGame.bannedChampions.filter((ban) => ban.teamId == 100)}>
                                    </TeamContainer>
                                </Box>
                                
                                <Box marginLeft={"20px"}>
                                    <TeamContainer
                                        teamId={"200"}
                                        redPlayers={liveGame.participants.slice(5,10)}
                                        redBans={liveGame.bannedChampions.filter((ban) => ban.teamId == 200)}>
                                    </TeamContainer>
                                </Box>
                            </Flex>
                        </Box>
                    </Flex>
                )
            }
        }
        else{
            return (
                <Flex
                    background={colorMode === 'light' ? "#F8F8F8" : "black"}
                    backgroundImage={colorMode === 'light' ? '/backgrounds/anniefadedblur.png' : '/backgrounds/xinzhaoartblur.png'}
                    backgroundSize={"100%"}
                    backgroundRepeat={"no-repeat"}
                    height={"1600px"}
                    className="content-container"
                    justifyContent={"center"}
                    >
                        <Box marginTop={"100px"}>
                            <Text paddingLeft={"5px"} paddingBottom={"10px"} fontWeight={500} textAlign={"center"}> Summoner is not in a live game. </Text>
                        </Box>
            </Flex>
            )
        }
        
    }
}

export default Summoner