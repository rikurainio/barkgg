import { Flex, Heading, Box, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SearchBar from '../components/SearchBar'
import PlayerInfoBox from '../components/PlayerInfoBox'


//HOME
export default function Home() {
  return (
    <Flex as="div" className="content-container">
        <Box
          h="2000">

          <PlayerInfoBox></PlayerInfoBox>


        </Box>
    </Flex>
  )
}
