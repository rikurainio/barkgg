import { Flex, Heading, Text, HStack, Box, Image } from "@chakra-ui/react"
import Link from 'next/link'
//import { Image } from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <Flex
            paddingBottom={"5px"}
            paddingRight={"260px"}
            justifyContent={"center"}
            width={"-moz-fit-content"}
            backgroundColor="gray.300"
            as="nav"
        >
            <Flex
                paddingTop={"20px"}
                marginTop={0}
                as="div">

                <Box
                    marginRight={"0px"}
                    width={300}
                    justifyContent={"space-between"}>   
                    <Heading
                        fontSize={35}
                        pr={10}>
                        Bark.GG
                    </Heading>
                    <Text className="navbar--text">
                    </Text>
                </Box>
                
                <Box
                    display={"flex"}
                    alignContent={"center"}
                    >
                    <HStack
                        spacing={"20px"}>
                            <Link href="/">
                                <a>
                                    <Text fontWeight={100} fontSize={"22px"} className="navbar-link-text">
                                        Profile
                                    </Text>
                                </a>
                            </Link>
                            <Link href="/stats">
                                <a>
                                    <Text fontWeight={100} fontSize={"22px"} className="navbar-link-text">Summoner Stats</Text>
                                </a>
                            </Link>
                            <Link href="/livegame">
                                <a>
                                    <Text fontWeight={100} fontSize={"22px"} className="navbar-link-text">Live Game</Text>
                                </a>
                            </Link>
                    </HStack>
                </Box>
                
                
            </Flex>
        </Flex>
    )
}

export default Navbar;