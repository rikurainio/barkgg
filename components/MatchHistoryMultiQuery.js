import {Box, Flex, HStack, useDisclosure, Collapse, Text } from '@chakra-ui/react'
import { useState } from 'react'
import MatchHistoryChampMultiQuery from './MatchHistoryChampMultiQuery'
import MatchHistoryStatsMultiQuery from './MatchHistoryStatsMultiQuery'
import MatchHistoryTimeModeMultiQuery from './MatchHistoryTimeModeMultiQuery'
import MatchHistoryChampAndRunes from './MatchHistoryChampAndRunes'
import MatchHistoryItems from './MatchHistoryItems'
import MatchHistoryPlayer from './MatchHistoryPlayer'
import MatchHistoryStats from './MatchHistoryStats'
import MatchHistoryTimeMode from './MatchHistoryTimeMode'
import { Fade, ScaleFade, Slide, SlideFade, useColorModeValue, useColorMode } from '@chakra-ui/react'

// FRAMER MOTION
import { motion } from 'framer-motion'
const MotionBox = motion(Box)

// COMPONENT FOR SHOWING SINGULAR MATCH HISTORY GAME CARD
// info PROP CONTAINS DATA FOR A SINGULAR MATCH
const MatchHistoryMultiQuery = ({match, name}) => {

    const selfName = name
    const info = match.info
    const metadata = match.metadata

    const modeColorsWin2 = useColorModeValue('rgba(195, 229, 255, 0.9)', 'rgba(31, 45, 63, 0.90)')
    const modeColorsLose2 = useColorModeValue('rgba(255, 202, 202, 0.9)', 'rgba(70, 26, 26, 0.90)')
    const modeColorsRemake2 = useColorModeValue('rgba(188, 188, 188, 0.9)', 'rgba(54, 54, 54, 0.90)')

    // HELPER CONTAINER OBJECTS FOR GETTING WANTED STATISTICS OUT OF THE CHUNK
    const relevantInfo = {
        gameId: info.gameId,
        gameDuration: info.gameDuration,
        gameMode: info.gameMode,
        participants: info.participants
    }
    
    const team1 = info.teams[0]
    const team2 = info.teams[1]
    const selfObj = {}
    const selfTeam = 100
    const teamsList = []
    const blueTeam = {}
    const redTeam = {}
    const allyTeamObj = {}
    const teamParticipants = []

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

    function checkIfRemake(gameDuration){
        if((gameDuration / 60) < 4.5){
            return true
        }
        else{
            return false
        }
    }

    //ITEMS FOR SELF (ID)
    const itemsBuilt = {}
    
    // FIND SELF FROM ALL THE PARTICIPANTS
    if(selfName.length){
        const self = info.participants.filter(participant => {

            // TRIM RIOT SUMMONER NAME & REMOVE WHITESPACE
            return (participant.summonerName)
                        .toUpperCase()
                        .trim()
                        .replace(/\s/g, "")
                        
                        == 
                        
                    selfName
                        .toUpperCase()
                        .trim()
                        .replace(/\s/g, "")
        })

        // GET OBJ OUT 1 ITEM ARRAY...
        if(self){
            try{
                self = self[0]
            }
            catch (error){
                console.log("problem settings self", error)
            }

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
                selfObj = self
                selfTeam = selfObj.teamId
                teamsList = info.teams
                blueTeam = info.teams[0]
                redTeam = info.teams[1]
            }
        }
        
        if(selfTeam == blueTeam.teamId){
            allyTeamObj = blueTeam

            info.participants.forEach(player => {
                if(player.teamId == 100)
                teamParticipants.push(player)
            })
            
        }
        if(selfTeam == redTeam.teamId){
            allyTeamObj = redTeam

            info.participants.forEach(player => {
                if(player.teamId == 200)
                teamParticipants.push(player)
            })
        }
    }

    // GIGA CHECKER
    if(info && metadata
            && Object.keys(info).length > 0
            && Object.keys(metadata).length > 0
            && typeof(info) == "object"
            && typeof(metadata) == "object"
            && selfObj && Object.keys(selfObj).length > 0
            && allyTeamObj && Object.keys(allyTeamObj).length > 0){

        return (
                <Flex flexDir={"row"}>
                    <MotionBox
                        width={"100%"}
                        whileHover={{scale: 1.01}}
                        className={"matchhistorycardmq"}
                        ml={"5px"}
                        mr={"5px"}
                        pl={"5px"}
                        pb={"5px"}
                        mt={"10px"}
                        backgroundColor={allyTeamObj.win ? modeColorsWin2 : checkIfRemake(relevantInfo.gameDuration) ? modeColorsRemake2 : modeColorsLose2}
                        borderRadius={6}
                        display={"flex"}
                    >
                            <MatchHistoryTimeModeMultiQuery 
                                gameMode={info}
                                gameEnded={info.gameEndTimestamp}
                                win={allyTeamObj.win}
                                gameDuration={info.gameDuration}>
                                
                            </MatchHistoryTimeModeMultiQuery>
                            <MatchHistoryStatsMultiQuery allyTeamObj={allyTeamObj} selfObj={selfObj}></MatchHistoryStatsMultiQuery>
                            <MatchHistoryChampMultiQuery selfObj={selfObj}></MatchHistoryChampMultiQuery>
                    </MotionBox>
                </Flex>
        )
    }
    else{
        return(null);
    }
}

export default MatchHistoryMultiQuery