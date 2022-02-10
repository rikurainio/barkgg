import { Flex, Text, useColorModeValue } from '@chakra-ui/react'


const MatchTags = () => {

    const modeColorsBg = useColorModeValue('rgba(255, 255, 255, 0.6)', 'rgba(0, 0, 0, 0.6)')   

    return (
        <Flex marginRight={"20px"} marginLeft={"20px"} bgColor={modeColorsBg}>
            <Text> Tag </Text>
        </Flex>
    )
}

export default MatchTags