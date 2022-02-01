import axios from 'axios'
import { Flex, Box, UnorderedList } from '@chakra-ui/react'
import { Image } from 'next/image'

const SummonerDetails = ({setSummonerData, summonerName, requested, setRequested}) => {

    // SETTINGS FOR API REQUEST
    const API_KEY = "RGAPI-62747a68-6d7e-4a29-8891-a18ba363cbc3"
    const API_KEY_TEXT = "?api_key="
    const BASE_URL = "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"

    async function axiosTryGet() {
        try {
            setRequested(false)
            const {data:response} = await axios.get(BASE_URL + summonerName + API_KEY_TEXT + API_KEY)
            setSummonerData(JSON.stringify(response))
        }
        catch (error) {
            setRequested(false)
            console.log(error);
        }
    }
    if(requested){
        axiosTryGet()
    }
    
    //RENDER
    return (
        <div></div>
    )
}

export default SummonerDetails