import { Box, Text, List, ListItem, Heading, useColorModeValue } from '@chakra-ui/react'
import MatchHistoryMultiQuery from './MatchHistoryMultiQuery'
import { useEffect } from 'react'
import axios from 'axios'

import { motion } from 'framer-motion'
const MotionBox = motion(Box)

const MatchHistoryContainerMultiQuery = ({matchDatas, selfName, matchCount}) => {
    const modeColorsPastGames = ('white', 'white')
    console.log("chunks for + " + selfName, matchDatas)
    console.log("data type is: ", typeof(matchDatas), " Is array?: ", Array.isArray(matchDatas))

    return (
            <MotionBox
                initial={{opacity:0,  x:10}}
                animate={{opacity:100, x:0}}
                transition={{delay: 0.8}}
                className="matchhistorycontainer"
                width={"100%"}
            >
            </MotionBox>
    )
}

export default MatchHistoryContainerMultiQuery 