import { Flex, Box } from '@chakra-ui/react'
import MatchHistory from './MatchHistory'

const MatchHistoryContainer = ({puuid}) => {
    return (
        <Flex
            marginTop={50}
            flexDirection={"column"}
            marginBottom={50}
            >
            <MatchHistory puuid={puuid}></MatchHistory>
            <MatchHistory puuid={puuid}></MatchHistory>
            <MatchHistory puuid={puuid}></MatchHistory>

        </Flex>
    )
}

export default MatchHistoryContainer