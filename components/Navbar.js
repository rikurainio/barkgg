import { Flex, Heading, Text, HStack, Box, Badge, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { useEffect, useState } from 'react'
import { Switch,  Modal,
            ModalOverlay,
            ModalContent,
            ModalHeader,
            ModalFooter,
            ModalBody,
            ModalCloseButton, } from '@chakra-ui/react'
import axios from 'axios'

import SearchBar from "./SearchBar"
import Link from 'next/link'
import React from 'react'

const Navbar = () => {

    const { colorMode, toggleColorMode } = useColorMode()
    const modeColorsFooterNavbar = useColorModeValue('rgb(245, 245, 250)', 'rgb(40, 43, 44)')

    const [serverStatus, setServerStatus] = useState("online")
    const GET_STATUS_URL = "https://euw1.api.riotgames.com/lol/status/v3/shard-data"
    const API_QUERY = "?api_key="

    useEffect(() => {
        axiosTryGetServerStatus()
        .then(response => {
            try{
                if(response['services']['0']['status'] == 'online'){
                    setServerStatus('online')
                    return response
                }
                else{
                    setServerStatus('offline')
                    return response
                }
            }
            catch{
                console.log("riot api is having difficulties")
                setServerStatus('offline')
                return response
            }
        })
    }, [])

    async function axiosTryGetServerStatus(){
        try{
            const {data:response} = await axios.get(GET_STATUS_URL + API_QUERY + process.env.API_KEY)
            setServerStatus(response)
            return response
        }
        catch(err){
            console.log(err)
        }
    }

    function isServerOnline(){
        if(serverStatus == 'online'){
            return true
        }
        else{
            return false
        }
    }

    const summonerName = "rhan"
    const path = "/summoner/" + summonerName + "/livegame"

    return (
        <Box zIndex={100}
            backgroundColor={modeColorsFooterNavbar}
            height={"60px"}
        >
            <Flex
            justifyContent={"flex-start"}
            paddingTop={"20px"}
            backgroundColor={modeColorsFooterNavbar}
            >
            <Flex
                alignItems={"center"}
                marginBottom={"5px"}
                paddingTop={"0px"}
                marginTop={0}
                >

                <Box
                display={"flex"}
                className="server-status-container">

                    <Text
                        paddingLeft={"10px"}
                    >
                        euw server status:
                    </Text>
                    
                    <Box
                        paddingLeft={"10px"}
                        >
                        <Badge
                            fontSize={"12px"}
                            style={isServerOnline() ? {color: "#003d06", backgroundColor: "#1fed4f"}
                                                         : {color: "red", backgroundColor: "#ffbdbd"}}>
                                {isServerOnline() ? "online" : "down"}
                        </Badge>
                    </Box>
                </Box>

                <Box
                    className="navbar-barkgg"
                    justifyContent={"space-between"}>   
                    <Heading
                        marginLeft={"410px"}
                        fontSize={26}
                        pr={10}>
                        Bark.GG
                    </Heading>
                    <Text className="navbar--text">
                    </Text>
                </Box>
                
                <Box
                    display={"flex"}
                    >
                    <HStack
                        spacing={"9px"}>
                            <Text width={"65px"} fontSize={"16px"}>
                                <Link href="/"
                                >
                                    Home
                                </Link>
                            </Text>

                            <Text width={"110px"} fontSize={"16px"}>
                                <Link href="/multiquery">
                                    Multiquery
                                </Link>
                            </Text>

                            <Text width={"110px"} fontSize={"16px"}>
                                <Link href={"/livegame"}>
                                    Live Game
                                </Link>
                            </Text>
                            
                            <Text width={"110px"} fontSize={"16px"}>
                                <Link href={"/sketch"}>
                                    Sketch tool
                                </Link>
                            </Text>

                            <Text width={"110px"} fontSize={"16px"}>
                                <Link href={"/ask"}>
                                    Ask
                                </Link>
                            </Text>
                            <Box>
                                <SearchBar>
                                </SearchBar>
                            </Box>   
                            
                    </HStack>
                </Box>
            
                <Box
                    className="color-mode-container"
                    display={"flex"}
                    paddingLeft={"30px"}
                    >
                    <Text fontSize={"16px"} marginTop={"3px"} paddingRight={"10px"}>Theme</Text>
                    <Switch size='md' defaultChecked={true} paddingTop={"5px"} onChange={toggleColorMode}/>
                </Box>

                </Flex>
            </Flex>
        </Box>
    )
}

export default Navbar;