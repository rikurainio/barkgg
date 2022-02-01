import { Flex, Box } from '@chakra-ui/react'
import MatchHistory from './MatchHistory'

const MatchHistoryContainer = (props) => {
    return (
        <Flex
            marginTop={50}
            flexDirection={"column"}
            marginBottom={50}
            >
            <MatchHistory></MatchHistory>
            <MatchHistory></MatchHistory>
            <MatchHistory></MatchHistory>
            <MatchHistory></MatchHistory>
            <MatchHistory></MatchHistory>
            <MatchHistory></MatchHistory>
            <MatchHistory></MatchHistory>
            <MatchHistory></MatchHistory>
            <MatchHistory></MatchHistory>
            <MatchHistory></MatchHistory>
        </Flex>
    )
}

export default MatchHistoryContainer