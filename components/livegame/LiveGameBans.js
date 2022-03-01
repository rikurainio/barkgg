import {Box, Text, List, ListItem, Image, Flex} from '@chakra-ui/react'

const LiveGameBans = ({bans}) => {
    const CHAMP_CDN_PATH = "https://cdn.communitydragon.org/12.3.1/champion/"

    console.log("bans", bans)
    return (
        <Box>
            <Text fontWeight={500} fontSize={"20px"}> Bans </Text>
            <Flex>
                {bans.map(ban => {
                    return (
                            <Image
                                objectFit={"contain"}
                                src={CHAMP_CDN_PATH + ban.championId +"/square"}
                                borderRadius={1}
                                width={"60px"}
                            >
                            </Image>
                    )
                })}
            </Flex>
        </Box>
    )
}

export default LiveGameBans