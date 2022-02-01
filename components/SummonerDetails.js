import axios from 'axios'
import { Flex, Box, HStack, Vstack, UnorderedList, ListItem, List } from '@chakra-ui/react'
import { Image } from 'next/image'

const SummonerDetails = (summonerName) => {
    const API_KEY = "RGAPI-62747a68-6d7e-4a29-8891-a18ba363cbc3"
    const API_KEY_TEXT = "?api_key="

    const summonerData = [];

    axios
        .get('https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + summonerName + API_KEY_TEXT + API_KEY)
        .then(repsonse => {
            summonerData = repsonse.data
            console.log(Response.data)
        })
        .catch(error => {
            console.log("Could not fetch data from requested endpoint. Error: " + error)
        })

    //RENDER
    return (
        <Flex
            as="div">

            <Box>
                <List>
                    {summonerData.map(item => {
                        <ListItem>item</ListItem>
                    })}
                </List>
            </Box>

        </Flex>
    )
}

export default SummonerDetails