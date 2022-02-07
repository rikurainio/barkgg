import axios from 'axios'
import { Heading, Box } from '@chakra-ui/react'
import { useEffect } from 'react'


const SummonerDetails = ({setSummonerData, summonerData, summonerName, requested,
                            setRequested, setSummonerIconId, setPuuid,
                                setLeagueData, encryptedSummonerId ,setEncryptedSummonerId}) => {

    // SETTINGS FOR API REQUEST
    const API_KEY = process.env.API_KEY
    const API_KEY_TEXT = "?api_key="
    const BASE_URL = "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"
    const BASE_URL_LEAGUE = "https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/"
    //console.log("APIKEY: ", API_KEY)

    

    async function axiosTryGet() {
        try {
            setRequested(false)
            const {data:response} = await axios.get(BASE_URL + summonerName + API_KEY_TEXT + API_KEY)
            setSummonerData(JSON.stringify(response))
            setSummonerIconId((response)['profileIconId'])
            setEncryptedSummonerId((response)['id'])
            setPuuid((response)['puuid'])
            return response
        }
        catch (error) {
            setRequested(false)
            console.log(error);
            return
        }
    }

    async function axiosTryGetRank(summonerId) {
        try{
            const id = summonerId
            const {data:response} = await axios.get(BASE_URL_LEAGUE + id + API_KEY_TEXT + API_KEY)
            setLeagueData(response)
            return response
        }
        catch (error) {
            console.log(error);
            return
        }
    }

    if(requested && summonerName){
        axiosTryGet().then(
            response => {
                if(response){
                    axiosTryGetRank((response)['id'])
                }
            },
        )
    }
    //RENDER
    return (null);
}

export default SummonerDetails