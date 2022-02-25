import { Box, Text, Flex, colorMode, useColorMode ,useColorModeValue } from '@chakra-ui/react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const LiveGame = () => {
    const router = useRouter()
    const { colorMode, toggleColorMode } = useColorMode()
    const [isFetching, setIsFetching] = useState(true)
    const [requested, setRequested] = useState(false)
    const [summonerName, setSummonerName] = useState("")
    const [puuid, setPuuid] = useState("")
    const [encryptedSummonerId, setEncryptedSummonerId] = useState("")
    const [liveGameData, setLiveGameData] = useState({})

    useEffect(() => {
        setRequested(false)

        // GOT QUERY PARAM
        if(router.isReady){
            console.log("router query: ", router.query.summonerName)
            // SUMMONER LIVE GAME BY NEW
            axios.get("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"
                    + router.query.summonerName + "?api_key=" + process.env.API_KEY)
                    .then((response => {
                        //VER 1.0
                        setPuuid(response.data.puuid)
                        setEncryptedSummonerId(response.data.id)
                        //setSummonerIconId(response.data.summonerIconId)
                        const formatName = response.data.name
                                                .toUpperCase()
                                                .trim()
                                                .replace(/\s/g, "")
                        
                        setSummonerName(formatName)
                        //setSummonerData(JSON.stringify(response.data))

                        axios.get("https://euw1.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/" + 
                                    response.data.id + "api_key=" + process.env.API_KEY)

                            .then(response => {
                                setLiveGameData(response.data)
                                setIsFetching(false)
                                return response
                            })
                            .catch(error => {
                                console.log("couldnt find live game data",error)
                                setIsFetching(false)
                                return error
                            })
                        return response
                    }))
                    .catch(error => {
                        console.log(error)
                        setIsFetching(false)
                        return error
                    })
        }
        else{
            setSummonerName("Could not find summoner name... Try again")
        }
    }, [router.isReady])

    return (
        <Flex
        background={colorMode === 'light' ? "#F8F8F8" : "black"}
        backgroundImage={colorMode === 'light' ? '/backgrounds/anniefaded.pngblur' : '/backgrounds/xinzhaoarblur.png'}
        backgroundSize={"100%"}
        backgroundRepeat={"no-repeat"}
        height={"2000px"}
        as="div" 
        className="content-container"
        justifyContent={"center"}
        >
            <Text> livegame data chunk: </Text>
            <Box>
                {JSON.stringify(liveGameData)}
            </Box>
        </Flex>
    )
}

export default LiveGame