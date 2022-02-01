import {Flex,Text, Box, VStack, HStack, ListItem, List, Heading} from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import asd from '../public/ddragon/profileIconData.json'

const SummonerInfoBox = ({summonerData}) => {

    try {
        const summonerValues = JSON.parse(summonerData)
        const summonerIconId = summonerValues['profileIconId']
        const pathToSummonerIcon = "/ddragon/dragontail-9.3.1/9.3.1/img/profileicon/" + summonerIconId.toString() + ".png"
        const pathToSummonerIcon2 = "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/profileicon/" + summonerIconId.toString() + ".png"

        //console.log("pathi: ",pathToSummonerIcon)

        return (
            <Box
                width={500}
                height={300}
                as="div"
                className='summonerinfobox'
            >
                    <Text>RESULTS</Text>

                    <List>
                        <ListItem>
                            <Heading>
                                {summonerValues['name']}
                            </Heading>
                        </ListItem>
                        <ListItem>
                            <Text fontSize={25}>
                                Level {summonerValues['summonerLevel']}
                            </Text>
                        </ListItem>
                        <ListItem>
                            <Text fontSize={12}>
                                Encrypted Account ID: {summonerValues['accountId']}
                            </Text>
                        </ListItem>
                        <ListItem>
                            <Text fontSize={12}>
                                Encrypted PUUID: {summonerValues['puuid']}
                            </Text>
                        </ListItem>
                        <ListItem>
                            <Text fontSize={12}>
                                Encrypted ID: {summonerValues['id']}
                            </Text>
                        </ListItem>
                        <ListItem>
                            <Text fontSize={12}>
                                Revision date: {summonerValues['revisionDate']}
                            </Text>
                        </ListItem>
                    </List>

                    <Image
                        borderRadius='5px'
                        src={pathToSummonerIcon2}
                        width={100}
                        height={100}>
                    </Image>
            </Box>
        )

    }
    catch (err) {
        //console.log("couldnt parse obj")

        return (
            <div>

            </div>
        )
    }
}

export default SummonerInfoBox