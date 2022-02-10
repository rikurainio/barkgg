import { Flex, Text, useColorModeValue, HStack,
            Tag, TagLeftIcon, TagLabel, Box } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { GiQueenCrown, GiPointyHat, GiHeartWings, GiCrossedSwords, GiCeilingBarnacle } from 'react-icons/gi';
import { FaCrown } from 'react-icons/fa'
import { useState, useEffect } from 'react'

const MatchTags = (teamParticipants) => {
    const modeColorsBg = useColorModeValue('rgba(255, 255, 255, 0.0)', 'rgba(0, 0, 0, 0.0)')

    useEffect(() => {
        
    }, [])

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
            </Flex>
        </Flex>
    )
}

export default MatchTags