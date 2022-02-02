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
    
    const team1 = info.teams[0]
    const team2 = info.teams[1]
    const selfObj = {}
    const selfTeam = 100
    const teamsList = []
    const blueTeam = {}
    const redTeam = {}
    const allyTeamObj = {}

    const releveantTeam1Data = {
        win: team1.win,
        firstBlood: team1.objectives.champion.first,
        teamTotalKills: team1.objectives.champion.kills,
        teamDragonKills: team1.objectives.dragon.kills
    }
    const releveantTeam2Data = {
        win: team2.win,
        firstBlood: team2.objectives.champion.first,
        teamTotalKills: team2.objectives.champion.kills,
        teamDragonKills: team2.objectives.dragon.kills
    }


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
        selfTeam = selfObj.teamId
        teamsList = info.teams
        blueTeam = info.teams[0]
        redTeam = info.teams[1]

        if(selfTeam == blueTeam.teamId){
            allyTeamObj = blueTeam
        }
        if(selfTeam == redTeam.teamId){
            allyTeamObj = redTeam
        }
    }

    //console.log("info: ", relevantInfo)
    //console.log("metadata", relevantMetaData)
    //console.log(" MATCHHISTORY | itemsbuilt", itemsBuilt)
    //console.log("selfteam: ", selfObj.teamId)
    //console.log("my team object is : ", allyTeamObj)
    //console.log("teams: ", team1, team2)


    if(info && metadata){
        return (
            <Box
                width={"100%"}
                height={"100%"}
                mt={5}
                mb={5}
                display={'flex'}
                align='center'
                backgroundColor="#d4d4d4"
                borderRadius={5}
                >
                <HStack
                    >
                    <MatchHistoryTimeMode 
                        gameMode={info.gameMode}
                        gameEnded={info.gameEndTimestamp}
                        win={allyTeamObj.win}
                        gameDuration={info.gameDuration}>
                        
                    </MatchHistoryTimeMode>
                    <MatchHistoryChampAndRunes selfObj={selfObj}></MatchHistoryChampAndRunes>
                    <MatchHistoryStats allyTeamObj={allyTeamObj} selfObj={selfObj}></MatchHistoryStats>
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