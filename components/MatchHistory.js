import {Box, HStack } from '@chakra-ui/react'
import MatchHistoryChampAndRunes from './MatchHistoryChampAndRunes'
import MatchHistoryItems from './MatchHistoryItems'
import MatchHistoryPlayer from './MatchHistoryPlayer'
import MatchHistoryStats from './MatchHistoryStats'
import MatchHistoryTimeMode from './MatchHistoryTimeMode'
import axios from 'axios'

import { useEffect, useState } from 'react'

// INFO AND METADTA LOOPED BY AMOUNT OF GAMES
// ONE ROUND IS UNIQUE INFO
const MatchHistory = ({info, metadata, selfName}) => {
    //console.log("|MATCHHISTORY |INFO:", info, " | METADATA: ",metadata)
    //console.log(" INFO:: ", JSON.stringify(info))
    //console.log(" METADATA:: ", JSON.stringify(metadata))

    //const participants = [0,1,2,3,4,5,6,7,8,9]

    // HELPER CONTAINER OBJECTS FOR GETTING WANTED STATISTICS OUT OF THE CHUNK
    const relevantInfo = {
        gameId: info.gameId,
        gameDuration: info.gameDuration,
        gameMode: info.gameMode,

        participants: info.participants
    }

    const relevantMetaData = {
        dataVersion: metadata.dataVersion,
        matchId: metadata.matchId,
        participants: metadata.participants

    }

    // FIND SELF FROM ALL THE PARTICIPANTS
    if(selfName){
        const self = info.participants.filter(participant => {
            return (participant.summonerName).toUpperCase() == selfName.toUpperCase()
        })

        // GET OBJ OUT 1 ITEM ARRAY...
        if(self){
            self = self[0]
        }
        console.log("I am", self.summonerName)
    }

    //console.log("info: ", relevantInfo)
    //console.log("metadata", relevantMetaData)

    if(info && metadata){
        return (
            <Box
                minH={150}
                maxH={150}
                mt={10}
                mb={10}
                display={'flex'}
                align='center'
                backgroundColor="#d4d4d4"
                borderRadius={5}
                height={100}>
                <HStack >
                    <MatchHistoryTimeMode></MatchHistoryTimeMode>
                    <MatchHistoryChampAndRunes></MatchHistoryChampAndRunes>
                    <MatchHistoryStats participants={relevantInfo.participants}></MatchHistoryStats>
                    <MatchHistoryItems></MatchHistoryItems>
                    <MatchHistoryPlayer participants={relevantInfo.participants}></MatchHistoryPlayer>
                </HStack>
            </Box>
        )
    }
    else{
        return (
            <Box>
                <Text> Couldn't find match data </Text> 
            </Box>
        )
    }
}

export default MatchHistory