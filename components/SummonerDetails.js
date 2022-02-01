import axios from 'axios'
import { Flex, Box, UnorderedList } from '@chakra-ui/react'
import { Image } from 'next/image'

const SummonerDetails = ({setSummonerData, summonerName, requested, setRequested, setSummonerIconId, setPuuid}) => {

    // SETTINGS FOR API REQUEST
    const API_KEY = "RGAPI-619b15a5-d227-49c0-8b50-1be5d2b1e3dc"
    const API_KEY_TEXT = "?api_key="
    const BASE_URL = "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"

    async function axiosTryGet() {
        try {
            setRequested(false)
            const {data:response} = await axios.get(BASE_URL + summonerName + API_KEY_TEXT + API_KEY)
            setSummonerData(JSON.stringify(response))
            setSummonerIconId((response)['profileIconId'])
            setPuuid((response)['puuid'])
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