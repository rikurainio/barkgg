import { Box, Text, Flex, List, ListItem, Heading, useColorModeValue, Spinner, useColorMode, colorMode } from '@chakra-ui/react'
import MatchHistoryMultiQuery from './MatchHistoryMultiQuery'
import { useEffect } from 'react'
import axios from 'axios'

import { motion } from 'framer-motion'
const MotionBox = motion(Box)

const MatchHistoryContainerMultiQuery = ({matchDatas, selfName, matchCount, isFetching}) => {
    const modeColorsPastGames = ('white', 'white')
    const { colorMode, toggleColorMode } = useColorMode()

    if(isFetching){
        return(
            <Flex
                    background={colorMode === 'light' ? "#F8F8F8" : "black"}
                    backgroundImage={colorMode === 'light' ? '/backgrounds/anniefaded.png' : '/backgrounds/xinzhaoart.png'}
                    backgroundSize={"100%"}
                    backgroundRepeat={"no-repeat"}
                    height={"1600px"}
                    as="div" 
                    className="content-container"
                    justifyContent={"center"}
                    >
                        <Box marginTop={"100px"}>
                            <Text paddingLeft={"5px"} paddingBottom={"10px"} fontWeight={500} textAlign={"center"}> Loading ... </Text>
                            <Spinner    thickness='18px'
                                        speed='0.4s'
                                        emptyColor={colorMode == 'light' ? "#f5f5fa" : "#0E0E0E"}
                                        color={colorMode == 'light' ? "#3182CE" : "#CE3636"}
                                        boxSize={"150px"}
                                        />
                        </Box>
                    </Flex>
        )
    }
    else if(matchDatas){
        console.log("have matchdatas", matchDatas)
        return (
            <MotionBox
                initial={{opacity:0,  x:10}}
                animate={{opacity:100, x:0}}
                transition={{delay: 0.8}}
                className="matchhistorycontainer"
                width={"100%"}
            > 
                <List>
                {
                    matchDatas.map(function(match){
                        return (
                            <ListItem key={match.matchId}>
                                <MatchHistoryMultiQuery match={match}>
                                </MatchHistoryMultiQuery>
                            </ListItem>
                        )
                    })
                }
                </List>
            </MotionBox>
    )
    }
    else{
        return (
            <Flex
                background={colorMode === 'light' ? "#F8F8F8" : "black"}
                backgroundImage={colorMode === 'light' ? '/backgrounds/anniefaded.png' : '/backgrounds/xinzhaoart.png'}
                backgroundSize={"100%"}
                backgroundRepeat={"no-repeat"}
                height={"1600px"}
                as="div" 
                className="content-container"
                justifyContent={"center"}
            >
                <Box marginTop={"100px"}>
                    <Text paddingLeft={"5px"} paddingBottom={"10px"} fontWeight={500} textAlign={"center"}> Loading ... </Text>
                    <Spinner    thickness='18px'
                                speed='0.4s'
                                emptyColor={colorMode == 'light' ? "#f5f5fa" : "#0E0E0E"}
                                color={colorMode == 'light' ? "#3182CE" : "#CE3636"}
                                boxSize={"150px"}
                                />
                </Box>
            </Flex>
        )
    }
}

export default MatchHistoryContainerMultiQuery 