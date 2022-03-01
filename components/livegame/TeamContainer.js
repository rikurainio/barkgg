import {Flex, Box, Text, List, ListItem, useColorModeValue} from '@chakra-ui/react'
import LiveGameBans from './LiveGameBans'

import Player from './Player'

const TeamContainer = ({teamId, bluePlayers, redPlayers, blueBans, redBans}) => {

    const modeColors = useColorModeValue('rgba(255,255,255, 1)', 'rgba(72, 72, 72, 1)')

    if(teamId == "100" && bluePlayers.length == 5){
        return (
            <Box
                padding={"10px"}
                borderRadius={"8px"}
                backgroundColor={modeColors}
            >
                <Box>
                    <Text fontWeight={500} fontSize={"16px"}> Blue Team</Text>
                </Box>

                <List>
                {bluePlayers.map((player, idx) => {
                    return(
                        <ListItem key={"blue-player-" + idx}>
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
                    <Text fontWeight={500} fontSize={"16px"}> Red Team</Text>
                </Box>

                <List>
                {redPlayers.map((player, idx) => {
                    return(
                        <ListItem key={"red-player-"+ idx}> 
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