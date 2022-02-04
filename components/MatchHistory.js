import {Box, HStack } from '@chakra-ui/react'
import MatchHistoryChampAndRunes from './MatchHistoryChampAndRunes'
import MatchHistoryItems from './MatchHistoryItems'
import MatchHistoryPlayer from './MatchHistoryPlayer'
import MatchHistoryStats from './MatchHistoryStats'
import MatchHistoryTimeMode from './MatchHistoryTimeMode'

// FRAMER MOTION
import { motion } from 'framer-motion'
const MotionBox = motion(Box)

// COMPONENT FOR SHOWING SINGULAR MATCH HISTORY GAME CARD
// info PROP CONTAINS DATA FOR A SINGULAR MATCH
const MatchHistory = ({info, metadata, selfName, setSummonerName, resetComponentStates}) => {
    console.log(" INFO KEYS:: ", Object.keys(info))

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

            console.log("participant summonername: ",
                participant.summonerName
                    .toUpperCase()
                    .trim())
            console.log("selfName to upper: ",
                 selfName
                    .toUpperCase()
                    .trim())
            return (participant.summonerName).toUpperCase().trim() == selfName.toUpperCase().trim()
        })
        console.log("self after matching --> ", self)

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
        }
        if(selfTeam == redTeam.teamId){
            allyTeamObj = redTeam
        }
    }

    console.log("relevant info: ", relevantInfo)
    //console.log("metadata", relevantMetaData)
    //console.log(" MATCHHISTORY | itemsbuilt", itemsBuilt)
    console.log("I am: ", selfObj)
    console.log("my team object is: ", selfObj.teamId)
    //console.log("my team object is : ", allyTeamObj)
    //console.log("teams: ", team1, team2)

    // GIGA CHECKER
    if(info && metadata
            && Object.keys(info).length > 0
            && Object.keys(metadata).length > 0
            && typeof(info) == "object"
            && typeof(metadata) == "object"
            && selfObj && Object.keys(selfObj).length > 0
            && allyTeamObj && Object.keys(allyTeamObj).length > 0){

        return (
            <MotionBox
                whileHover={{scale: 1.03}}
                className={"matchhistorycard"}
                mt={5}
                mb={5}
                backgroundColor={allyTeamObj.win ? "blue.200" : "red.300"}
                borderRadius={7}
                >
                <HStack
                    >
                    <MatchHistoryTimeMode 
                        gameMode={info}
                        gameEnded={info.gameEndTimestamp}
                        win={allyTeamObj.win}
                        gameDuration={info.gameDuration}>
                        
                    </MatchHistoryTimeMode>
                    <MatchHistoryChampAndRunes selfObj={selfObj}></MatchHistoryChampAndRunes>
                    <MatchHistoryStats allyTeamObj={allyTeamObj} selfObj={selfObj}></MatchHistoryStats>
                    <MatchHistoryItems itemsBuilt={itemsBuilt}></MatchHistoryItems>
                    <MatchHistoryPlayer
                        participants={relevantInfo.participants}
                        setSummonerName={setSummonerName}
                        resetComponentStates={resetComponentStates}>

                    </MatchHistoryPlayer>
                </HStack>
            </MotionBox>
        )
    }
    else{
        return(null);
    }
}

export default MatchHistory