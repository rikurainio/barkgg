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
        <Box zIndex={100}>
            <Flex
            backgroundColor={modeColorsFooterNavbar}
            >
            <Flex
                alignItems={"flex-end"}
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
                    marginLeft={"400px"}
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
                        spacing={"10px"}>
                            <Link href="/"
                                >
                                Home
                            </Link>

                            <Link href="/multiquery">
                                Multiquery
                            </Link>

                            <Link href={"/livegame"}>
                                Live Game
                            </Link>

                            <Link href={"/draft"}>
                                Draft Tool
                            </Link>

                            <Link href={"/coinflip"}>
                                Coinflip
                            </Link>
                    </HStack>
                </Box>

                
                
                <Box paddingLeft={"10px"} paddingTop={"20px"}>
                    <SearchBar>
                    </SearchBar>
                </Box>

                <Box
                    className="color-mode-container"
                    display={"flex"}
                    paddingLeft={"420px"}
                    paddingTop={"8px"}
                    >
                    <Text fontWeight={100} fontSize={"20px"} paddingRight={"13px"}>Theme</Text>
                    <Switch size='md' defaultChecked={true} marginTop={"7px"} onChange={toggleColorMode}/>
                </Box>

                </Flex>
            </Flex>
        </Box>
    )
}

export default Navbar;