import { Box, Text, List, ListItem, Heading, useColorModeValue } from '@chakra-ui/react'
import MatchHistory from './MatchHistory'
import { useEffect } from 'react'
import axios from 'axios'

import { motion } from 'framer-motion'
const MotionBox = motion(Box)

const MatchHistoryContainerMultiQuery = ({matchDatas, selfName}) => {
    const modeColorsPastGames = ('white', 'white')
    console.log("INFO", matchDatas[0].info)
    console.log("I AM ", selfName)

    return (
    <MotionBox
        initial={{opacity:0,  x:10}}
        animate={{opacity:100, x:0}}
        transition={{delay: 0.8}}
        width={"100%"}
        h={"300px"}
        className="matchhistorycontainer"
        >
        <Box width={"100%"}>
            <List>
                {matchDatas.map((match, index) => {
                    <ListItem>
                        <MatchHistory
                            selfName={selfName}
                            info={match['info']}
                            metadata={match['metadata']}
                        >
                        </MatchHistory>    
                    </ListItem>
                })}
            </List>
        </Box>
    </MotionBox>
)
}

export default MatchHistoryContainerMultiQuery