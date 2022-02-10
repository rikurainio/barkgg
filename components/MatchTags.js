import { Flex, Text, useColorModeValue, HStack,
            Tag, TagLeftIcon, TagLabel, Box } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { GiQueenCrown, GiPointyHat, GiHeartWings, GiCrossedSwords } from 'react-icons/gi';
import { FaCrown } from 'react-icons/fa'

const MatchTags = () => {

    const modeColorsBg = useColorModeValue('rgba(255, 255, 255, 0.6)', 'rgba(0, 0, 0, 0.6)')   

    return (
        <Flex
            height={"100px"}
            width={"45px"}
            borderRadius={5}
            marginRight={"5px"}
            marginTop={"14px"}
            bgColor={modeColorsBg}
            >

            <Flex flexDir={"column"}>
                    <Tag
                        marginTop={"3px"}
                        marginLeft={"2px"}
                        justifyContent={"center"}
                        minHeight={"22px"}
                        width={"41px"}
                        variant='subtle' 
                        colorScheme='yellow'>


                        <TagLabel fontSize={"10px"}>MVP</TagLabel>
                    </Tag>

                    <Tag
                        marginTop={"2px"}
                        marginLeft={"2px"}
                        justifyContent={"center"}
                        minHeight={"22px"}
                        width={"41px"}
                        variant='subtle' 
                        colorScheme='purple'>


                        <TagLabel fontSize={"10px"}>MVP</TagLabel>
                    </Tag> 
                    <Tag
                        marginTop={"2px"}
                        marginLeft={"2px"}
                        justifyContent={"center"}
                        minHeight={"22px"}
                        width={"41px"}
                        variant='subtle' 
                        colorScheme='green'>


                        <TagLabel fontSize={"10px"}>MVP</TagLabel>
                    </Tag>
                    <Tag
                        marginTop={"2px"}
                        marginLeft={"2px"}
                        justifyContent={"center"}
                        minHeight={"22px"}
                        width={"41px"}
                        variant='subtle' 
                        colorScheme='red'>


                        <TagLabel fontSize={"10px"}>MVP</TagLabel>
                    </Tag> 
            </Flex>
                
        </Flex>
    )
}

export default MatchTags