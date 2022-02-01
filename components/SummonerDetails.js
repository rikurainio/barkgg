import axios from 'axios'
import { Flex, Box, UnorderedList } from '@chakra-ui/react'
import { Image } from 'next/image'

const SummonerDetails = ({setSummonerData, summonerName, requested, setRequested, setSummonerIconId, setPuuid}) => {

    // SETTINGS FOR API REQUEST
    const API_KEY = process.env.API_KEY
    const API_KEY_TEXT = "?api_key="
    const BASE_URL = "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"
    //console.log("APIKEY: ", API_KEY)


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