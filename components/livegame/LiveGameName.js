import {Box, Text} from '@chakra-ui/react'

const LiveGameName = ({name}) => {
    return (
        <Box paddingLeft={"5px"}>
            <Text paddingTop={"40px"} textAlign={"center"} fontWeight={500} fontSize={"24px"}>{name}</Text>
        </Box>
    )
}

export default LiveGameName