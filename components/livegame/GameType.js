import {Box, Flex, Text} from '@chakra-ui/react'
import { useState, useEffect } from 'react'

const GameType = ({startTime, gameLength, gameMode, gameType, mapId, queueId}) => {
    const hours = 0
    const minutes = Math.trunc(((gameLength) / 60) + 3)
    const seconds = 0

    const [[hrs, mins, secs], setTime] = useState([hours, minutes, seconds]);
    

    const tick = () => {
        if (hrs === 0 && mins === 0 && secs === 0) 
            reset()
        else if (secs === 59) {
            setTime([hrs, mins + 1, 0]);
        } else if (mins === 59 && secs === 59) {
            setTime([hrs + 1, 0, 0]);
        } else {
            setTime([hrs, mins, secs + 1]);
        }
    };

    const reset = () => setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);

    useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });


    function getRankedText(gameType, mapId, queueId){
        // IS A RANKED SOLO OR FLEX Q
        if(mapId == 11 && queueId == 420){
            return "Ranked Solo"
        }
        if(mapId == 11 && queueId == 440){
            return "Ranked Flex"
        }
        // NORMAL TYPE
        if(gameMode == "URF"){
            return "URF"
        }
        if(gameMode == "ARAM"){
            return "ARAM"
        }
        else{
            return "Normal"
        }
    }


    return (
        <Flex>
            <Box>
                <Text fontWeight={500}>
                    {getRankedText(gameType, mapId, queueId)}
                </Text>
            </Box>
            <Box paddingLeft={"10px"}>
                <Text>
                    {mapId == 11 ? "Summoner's Rift" : "Howling Abyss"}
                </Text>
            </Box>
            <Box paddingLeft={"10px"}>
                {hrs == 0 ?
                    <Text>
                        {`${mins
                        .toString()
                        .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}
                    </Text>
                    :
                    <Text>
                        {`${hrs.toString().padStart(2, '0')}:${mins
                        .toString()
                        .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}
                    </Text>
                }
            </Box>
        </Flex>
    )
}

export default GameType