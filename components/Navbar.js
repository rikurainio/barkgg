import { Flex, Heading, Text, HStack, Box, Image, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { useEffect, useState } from 'react'
import { Switch } from '@chakra-ui/react'
import axios from 'axios'

import Link from 'next/link'
//import { Image } from 'next/image'
import React from 'react'

const Navbar = () => {

    const { colorMode, toggleColorMode } = useColorMode()
    const modeColorsFooterNavbar = useColorModeValue('rgb(245, 245, 250)', 'rgb(25, 29, 28)')

    const [serverStatus, setServerStatus] = useState("online")
    const GET_STATUS_URL = "https://euw1.api.riotgames.com/lol/status/v3/shard-data"
    const API_QUERY = "?api_key="

    useEffect(() => {
        axiosTryGetServerStatus()
        .then(response => {
            console.log("response from status api", response['services']['0']['status'])

            if(response['services']['0']['status'] == 'online'){
                setServerStatus('online')
                return response
            }
            else{
                setServerStatus('offline')
                return response
            }
            return response
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

    return (
        <Box>
            <Flex
            paddingBottom={"5px"}
            justifyContent={"left"}
            backgroundColor={modeColorsFooterNavbar}
            as="nav">

            <Box
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
                        paddingTop={"39px"}
                        fontWeight={100}
                        fontSize={"19px"}
                        style={isServerOnline() ? {color: "green"} : {color: "red"}}>
                            {isServerOnline() ? "online" : "down"}
                    </Heading>
                </Box>
            </Box>

            <Flex
                paddingTop={"20px"}
                marginTop={0}
                as="div">

                <Box
                    paddingBottom={"2px"}
                    marginLeft={"310px"}
                    justifyContent={"space-between"}>   
                    <Heading
                        fontSize={40}
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

                <Box
                    className="color-mode-container"
                    display={"flex"}
                    marginLeft={"230px"}
                    paddingTop={"8px"}
                    >
                    <Text fontWeight={100} fontSize={"22px"} paddingRight={"13px"}>Lights</Text>
                    <Switch size='lg' defaultChecked={true} marginTop={"3px"} onChange={toggleColorMode}/>
                </Box>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Navbar;