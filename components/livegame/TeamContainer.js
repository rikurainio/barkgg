import {Flex, Box, Text, List, ListItem, useColorModeValue} from '@chakra-ui/react'
import LiveGameBans from './LiveGameBans'

import Player from './Player'

const TeamContainer = ({teamId, bluePlayers, redPlayers, blueBans, redBans}) => {

    const modeColors = useColorModeValue('rgba(245, 245, 250, 0.4)', 'rgba(40, 43, 44, 0.4)')

    if(teamId == "100" && bluePlayers.length == 5){
        return (
            <Box
                padding={"10px"}
                borderRadius={"8px"}
                backgroundColor={modeColors}
            >
                <Box>
                    <Text textAlign={"center"} fontWeight={500} fontSize={"24px"}> Blue Team</Text>
                </Box>

                <List>
                {bluePlayers.map(player => {
                    return(
                        <ListItem>
                            <Player data={player}></Player>
                        </ListItem>
                    )
                })}
                </List>
               
                <LiveGameBans bans={blueBans}></LiveGameBans>
            </Box>
        )
    }

    if(teamId == "200" && redPlayers.length == 5){
        return (
            <Box
                padding={"10px"}
                borderRadius={"8px"}
                backgroundColor={modeColors}
            >
                <Box>
                    <Text textAlign={"center"} fontWeight={500} fontSize={"24px"}> Red Team</Text>
                </Box>

                <List>
                {redPlayers.map(player => {
                    return(
                        <ListItem> 
                            <Player data={player}></Player>
                        </ListItem>
                    )
                })}
                </List>
               
                <LiveGameBans bans={redBans}></LiveGameBans>
            </Box>
        )
    }  
    else{return (null)}
}

export default TeamContainer