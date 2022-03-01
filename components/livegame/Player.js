import { Box } from '@chakra-ui/react'
import LiveGameChampAndRunes from './LiveGameChampAndRunes'
import LiveGameName from './LiveGameName'
import LiveGameRank from './LiveGameRank'

const Player = ({data}) => {
    console.log("--> ", data)
    return (
        <Box>
                <LiveGameChampAndRunes></LiveGameChampAndRunes>
                <LiveGameName></LiveGameName>
                <LiveGameRank></LiveGameRank>
        </Box>
    )
}

export default Player