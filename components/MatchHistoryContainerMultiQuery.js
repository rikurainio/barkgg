import { Box, Text, List, ListItem, Heading, useColorModeValue } from '@chakra-ui/react'
import MatchHistoryMultiQuery from './MatchHistoryMultiQuery'
import { useEffect } from 'react'
import axios from 'axios'

import { motion } from 'framer-motion'
const MotionBox = motion(Box)

const MatchHistoryContainerMultiQuery = ({matchDatas, selfName}) => {
    const modeColorsPastGames = ('white', 'white')
    //console.log("MATCH CHUNKS FOR PLAYER", selfName, matchDatas)
    //console.log("I AM ", selfName)
    //console.log("PRMS:", selfName, matchDatas[0]['info'])

    console.log("matchdatas length", matchDatas.length, "selfname: ", selfName)

    return (
            <MotionBox
                initial={{opacity:0,  x:10}}
                animate={{opacity:100, x:0}}
                transition={{delay: 0.8}}
                className="matchhistorycontainer"
                width={"100%"}
            >
                <List>
                    {Array
                        .from(Array(matchDatas.length))
                        .map((x, index) =>
                            <ListItem key={"match-histories-item-" + index}>
                                <MatchHistoryMultiQuery
                                    match={matchDatas[index]}
                                >
                                </MatchHistoryMultiQuery>
                            </ListItem>
                        )}
                </List>
            </MotionBox>
    )
}

export default MatchHistoryContainerMultiQuery