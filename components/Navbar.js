import { Flex, Heading, Text, HStack, Box, Image } from "@chakra-ui/react"
//import { Image } from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <Flex
            backgroundColor="teal.500"
            as="nav"
        >
            <Flex
                marginTop={0}
                as="div">
                <HStack
                    >
                    <Box
                        width={300}
                        paddingTop={5}
                        justifyContent={"space-between"}
                        as="h1"
                    >   
                        <Heading
                            fontSize={35}
                            pr={10}>
                            Bark.GG
                        </Heading>
                        <Text className="navbar--text">
                        </Text>
                    </Box>
                    <Box>
                    </Box>
                </HStack>
                
            </Flex>
        </Flex>
    )
}

export default Navbar;