import { Flex, Text, useColorModeValue, HStack,
            Tag, TagLeftIcon, TagLabel, Box } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { GiQueenCrown } from 'react-icons/gi';
import { FaCrown } from 'react-icons/fa'

const MatchTags = () => {

    const modeColorsBg = useColorModeValue('rgba(255, 255, 255, 0.6)', 'rgba(0, 0, 0, 0.6)')   

    return (
        <Flex
            width={"70px"}
            borderRadius={5}
            marginRight={"5px"}
            marginLeft={"1px"}
            marginTop={"20px"}
            marginBottom={"20px"} 
            bgColor={modeColorsBg}
            >

            <Flex flexDir={"column"}>
                    <Tag justifyContent={"center"} height={"20px"} width={"70px"} variant='subtle' colorScheme='cyan'>
                        <FaCrown size={"10px"}></FaCrown>
                        <TagLabel fontSize={"12px"}>MVP</TagLabel>
                    </Tag> 

                    <Tag justifyContent={"center"} height={"20px"} width={"70px"} variant='subtle' colorScheme='yellow'>
                        <FaCrown size={"10px"}></FaCrown>
                        <TagLabel fontSize={"12px"}>farmer</TagLabel>
                    </Tag> 

                    <Tag justifyContent={"center"} height={"20px"} width={"70px"} variant='subtle' colorScheme='orange'>
                        <FaCrown size={"10px"}></FaCrown>
                        <TagLabel fontSize={"12px"}>deathless</TagLabel>
                    </Tag> 

                    <Tag justifyContent={"center"} height={"20px"} width={"70px"} variant='subtle' colorScheme='green'>
                        <FaCrown size={"10px"}></FaCrown>
                        <TagLabel fontSize={"12px"}>fast game</TagLabel>
                    </Tag> 
            </Flex>
                
        </Flex>
    )
}

export default MatchTags