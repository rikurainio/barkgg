import { Box, Text, List, ListItem, Heading, useColorModeValue } from '@chakra-ui/react'
import MatchHistoryMultiQuery from './MatchHistoryMultiQuery'
import { useEffect } from 'react'
import axios from 'axios'

import { motion } from 'framer-motion'
const MotionBox = motion(Box)

const MatchHistoryContainerMultiQuery = ({matchDatas, selfName}) => {
    const modeColorsPastGames = ('white', 'white')
    console.log("MATCH CHUNKS FOR PLAYER", selfName, matchDatas)
    //console.log("I AM ", selfName)
    //console.log("PRMS:", selfName, matchDatas[0]['info'])

    return (
    <MotionBox
        initial={{opacity:0,  x:10}}
        animate={{opacity:100, x:0}}
        transition={{delay: 0.8}}
        h={"300px"}
        className="matchhistorycontainer"
        >
        <Box>
            <List>
                {matchDatas.map((match, index) => {
                    <ListItem key={"history-container-"+index}>
                        <MatchHistoryMultiQuery
                            selfName={selfName}
                            info={match.info}
                            metadata={match.metadata}
                        >
                        </MatchHistoryMultiQuery>    
                    </ListItem>
                })}
            </List>
        </Box>
    </MotionBox>
)
}

export default MatchHistoryContainerMultiQuery