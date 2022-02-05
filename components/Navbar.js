import { Flex, Heading, Text, HStack, Box, Image } from "@chakra-ui/react"
import { useEffect, useState } from 'react'
import axios from 'axios'

import Link from 'next/link'
//import { Image } from 'next/image'
import React from 'react'

const Navbar = () => {
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
            paddingRight={"260px"}
            justifyContent={"left"}
            width={"-moz-fit-content"}
            backgroundColor="gray.300"
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

                <Heading
                    paddingTop={"40px"}
                    fontWeight={100}
                    fontSize={"18px"}
                    paddingLeft={"5px"}
                    paddingRight={"500px"}
                    style={isServerOnline() ? {color: "green"} : {color: "red"}}>
                        {isServerOnline() ? "online" : "down"}
                </Heading>
            </Box>
            

            <Flex
                paddingTop={"20px"}
                marginTop={0}
                as="div">

                <Box
                    marginRight={"0px"}
                    width={300}
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
                
                
                </Flex>
            </Flex>
        </Box>
    )
}

export default Navbar;