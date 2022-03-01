import { Box, Flex } from '@chakra-ui/react'
import LiveGameChampAndRunes from './LiveGameChampAndRunes'
import LiveGameName from './LiveGameName'
import LiveGameRank from './LiveGameRank'

const Player = ({data}) => {
    console.log("--> ", data)

    // RUNE CHAMP
    const spell_2_id = data.spell1Id
    const spell_1_id = data.spell2Id
    const championId = data.championId

    // ACCOUNT/SUMMONER
    const name = data.summonerName
    const summonerId = data.summonerId
    const iconId = data.profileIconId

    // RUNES
    const runes = data.perkIds
    const runePrimaryTree = data.perkStyle
    const runeSecondaryTree = data.perkSubStyle

    return (
        <Box>
            <Flex marginBottom={"10px"}>
                <LiveGameChampAndRunes s1={spell_1_id} s2={spell_2_id} c={championId}></LiveGameChampAndRunes>
                <LiveGameName name={name}></LiveGameName>
            </Flex>
        </Box>  
    )
}

export default Player