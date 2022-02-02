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

    const selfObj = {}

    //ITEMS FOR SELF (ID)
    const itemsBuilt = {}
    
    // FIND SELF FROM ALL THE PARTICIPANTS
    if(selfName){
        const self = info.participants.filter(participant => {
            return (participant.summonerName).toUpperCase() == selfName.toUpperCase()
        })

        // GET OBJ OUT 1 ITEM ARRAY...
        if(self){
            self = self[0]

            if(self){
                itemsBuilt = {
                    item0: self.item0,
                    item1: self.item1,
                    item2: self.item2,
                    item3: self.item3,
                    item4: self.item4,
                    item5: self.item5,
                    item6: self.item6,
                }
            }
        }
        //console.log("I am", self.summonerName)
        selfObj = self
    }

    //console.log("info: ", relevantInfo)
    //console.log("metadata", relevantMetaData)
    //console.log(" MATCHHISTORY | itemsbuilt", itemsBuilt)
    //console.log("self: ", selfObj)

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
                    <MatchHistoryChampAndRunes selfObj={selfObj}></MatchHistoryChampAndRunes>
                    <MatchHistoryStats participants={relevantInfo.participants}></MatchHistoryStats>
                    <MatchHistoryItems itemsBuilt={itemsBuilt}></MatchHistoryItems>
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