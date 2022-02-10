import { Box, Flex, Text, useColorMode, useColorModeValue, List, ListItem } from '@chakra-ui/react'
import SearchBarMultiQuery from '../../components/SearchBarMultiQuery'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import SummonerInfoBoxMultiQuery from '../../components/SummonerInfoBoxMultiQuery'
import axios from 'axios'

export default function Stats(){
    const router = useRouter()
    const { colorMode, toggleColorMode } = useColorMode()
    const [isFetching, setIsFetching] = useState(true)
    const [requested, setRequested] = useState(false)

    //SUMMONER
    const [puuids, setPuuids] = useState([])
    const [encryptedSummonerIds, setEncryptedSummonerIds] = useState([])
    const [summonerIconIds, setSummonerIconIds] = useState([])
    const [summonerNames, setSummonerNames] = useState([])
    const [summonerDatas, setSummonerDatas] = useState([])
    const [leagueDatas, setLeagueDatas] = useState([])


    useEffect(() => {
        if(router.isReady){
            console.log("router query: ", router.query)
            const multiQuerySplit = router.query.summonerNames.split(" ")

            multiQuerySplit.forEach(queryName => {
                axios.get("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"
                    + queryName + "?api_key=" + process.env.API_KEY)
                    .then((response => {
                        //VER 1.0
                        setPuuids(puuids => [...puuids, response.data.puuid])
                        setEncryptedSummonerIds(encryptedSummonerIds => [...encryptedSummonerIds, response.data.id])
                        setSummonerIconIds(summonerIconIds => [...summonerIconIds, response.data.summonerIconId])

                        const formatName = response.data.name
                                                .toUpperCase()
                                                .trim()
                                                .replace(/\s/g, "")
                        
                        setSummonerDatas(summonerDatas => [...summonerDatas, JSON.stringify(response.data)])

                        axios.get("https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/" 
                                + response.data.id + "?api_key=" + process.env.API_KEY)

                            .then(response => {
                                setLeagueDatas(leagueDatas => [...leagueDatas, response.data])
                                setIsFetching(false)
                                return response
                            })
                            .catch(error => {
                                console.log(error)
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
            })
        }
        else{
            console.log("Could not perform a multiquery. Please try again")
        }
    }, [router.isReady])

    console.log("summonerDatas: ", summonerDatas)

    return (
        <Flex
        background={colorMode === 'light' ? "#F8F8F8" : "black"}
        backgroundImage={colorMode === 'light' ? '/backgrounds/anniefaded.png' : '/backgrounds/xinzhaoart.png'}
        backgroundSize={"100%"}
        backgroundRepeat={"no-repeat"}
        height={"1600px"}
        as="div" 
        className="content-container"
        justifyContent={"center"}
        >
          
            <Box marginTop={"70px"}>
                <Text> Results: </Text>

                <List>
                    {Array
                        .from(Array(leagueDatas.length))
                        .map((x, index) =>
                            <ListItem key={"summoner-info-item" + index}>
                                <SummonerInfoBoxMultiQuery
                                    summonerData={summonerDatas[index]}
                                    leagueData={leagueDatas[index]}>
                                </SummonerInfoBoxMultiQuery>
                            </ListItem>)
                    }
                </List>
            </Box>
      </Flex>
    )
}