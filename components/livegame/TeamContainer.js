import {Flex, Box, Text, List, ListItem} from '@chakra-ui/react'
import LiveGameBans from './LiveGameBans'

import Player from './Player'

const TeamContainer = ({teamId, bluePlayers, redPlayers}) => {
    if(teamId == "100" && bluePlayers.length == 5){
        return (
            <Box>
                <Box>
                    <Text fontWeight={500} fontSize={"24px"}> Blue Team</Text>
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
               
                <LiveGameBans></LiveGameBans>
            </Box>
        )
    }
    if(teamId == "200" && redPlayers.length == 5){
        return (
            <Box>
                <Box>
                    <Text fontWeight={500} fontSize={"24px"}> Blue Team</Text>
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
               
                <LiveGameBans></LiveGameBans>
            </Box>
        )
    }  
    else{return (null)}
}

export default TeamContainer