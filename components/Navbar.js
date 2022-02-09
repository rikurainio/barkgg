import { Flex, Heading, Text, HStack, Box, Image, useColorMode, useColorModeValue } from "@chakra-ui/react"
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
//import { Image } from 'next/image'
import React from 'react'

const Navbar = () => {

    const { colorMode, toggleColorMode } = useColorMode()
    const modeColorsFooterNavbar = useColorModeValue('rgb(245, 245, 250)', 'rgb(53, 54, 51)')

    const [serverStatus, setServerStatus] = useState("online")
    const GET_STATUS_URL = "https://euw1.api.riotgames.com/lol/status/v3/shard-data"
    const API_QUERY = "?api_key="

    useEffect(() => {
        axiosTryGetServerStatus()
        .then(response => {
            if(response['services']['0']['status'] == 'online'){
                setServerStatus('online')
                return response
            }
            else{
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
        <Box zIndex={100}>
            <Flex
            justifyContent={"left"}
            backgroundColor={modeColorsFooterNavbar}
            >
            <Box
                paddingBottom={"5px"}
                display={"flex"}
                className="server-status-container">

                <Heading
                paddingTop={"40px"}
                fontWeight={100}
                fontSize={"18px"}
                paddingLeft={"10px"}
                >
                euw server status:
                </Heading>
                <Box
                    >
                    <Heading
                        paddingLeft={"2px"}
                        paddingTop={"38.4px"}
                        fontWeight={100}
                        fontSize={"19px"}
                        style={isServerOnline() ? {color: "green"} : {color: "red"}}>
                            {isServerOnline() ? "online" : "down"}
                    </Heading>
                </Box>
            </Box>

            


            <Flex
                alignItems={"flex-end"}
                marginBottom={"5px"}
                paddingTop={"0px"}
                marginTop={0}
                >

                <Box
                    marginLeft={"410px"}
                    justifyContent={"space-between"}>   
                    <Heading
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
                        spacing={"20px"}>
                            <Link href="/">
                                Home
                            </Link>

                            <Link href="/stats">
                                Summoner Stats
                            </Link>

                            <Link href={path}>
                                Live Game
                            </Link>
                    </HStack>
                </Box>

                
                
                <Box marginLeft={"10px"} paddingTop={"20px"}>
                    <SearchBar>
                    </SearchBar>
                </Box>

                <Box
                    className="color-mode-container"
                    display={"flex"}
                    marginLeft={"420px"}
                    paddingTop={"8px"}
                    >
                    <Text fontWeight={100} fontSize={"22px"} paddingRight={"13px"}>Theme</Text>
                    <Switch size='lg' defaultChecked={true} marginTop={"3px"} onChange={toggleColorMode}/>
                </Box>

                </Flex>
            </Flex>
        </Box>
    )
}

export default Navbar;