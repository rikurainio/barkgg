import {Box, Text, List, ListItem, Image, Flex} from '@chakra-ui/react'

const LiveGameBans = ({bans}) => {
    const CHAMP_CDN_PATH = "https://cdn.communitydragon.org/12.4.1/champion/"
    const HELMET_BRO_PATH = "../../noban.png"

    function validBan(id){
        if(id != -1){
            return true
        }
        return false
    }

    console.log("bans", bans)
    return (
        <Box>
            <Text fontWeight={500} fontSize={"20px"}> Bans </Text>
            <Flex>
                {bans.map(ban => {
                    return (
                            <Flex>
                                <Image
                                objectFit={"contain"}
                                src={validBan(ban.championId) ? (CHAMP_CDN_PATH + ban.championId +"/square") : (HELMET_BRO_PATH)}
                                borderRadius={0}
                                width={"60px"}
                                >
                                </Image>
                                {/*
                                <Text>
                                    {ban.pickTurn}
                                </Text>
                                */}
                            </Flex>
                    )
                })}
            </Flex>
        </Box>
    )
}

export default LiveGameBans