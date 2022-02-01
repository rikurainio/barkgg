import {Flex,Text, Box, VStack, HStack, ListItem, List} from '@chakra-ui/react'

const SummonerInfoBox = ({summonerData}) => {

    try {
        const summonerValues = JSON.parse(summonerData)
        console.log("parsedobj", summonerValues)

        return (
            <Box
                width={500}
                height={300}
                as="div"
                className='summonerinfobox'
            >
                    <Text>RESULTS</Text>
                    {
                        /*
                        Object.keys(summonerValues).map((obj, i) => {
                            return (
                                <div>
                                    {summonerValues[obj]}
                                </div>
                            )
                        })
                        */
                        /*
                        Object.keys(summonerValues).map((obj, i) => {
                            return (
                                <div>
                                    {summonerValues['name']}
                                </div>
                            )
                        })
                        */
                    }

                    <List>
                        <ListItem>
                            <Text>
                                {summonerValues['name']}
                            </Text>
                        </ListItem>
                        <ListItem>
                            <Text>
                                {summonerValues['summonerLevel']}
                            </Text>
                        </ListItem>
                        <ListItem>
                            <Text>
                                {summonerValues['profileIconId']}
                            </Text>
                        </ListItem>
                    </List>
            </Box>
        )

    }
    catch (err) {
        console.log("couldnt parse obj")

        return (
            <div>

            </div>
        )
    }
}

export default SummonerInfoBox