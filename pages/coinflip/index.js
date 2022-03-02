import { Box, Flex, useColorMode, useColorModeValue, Button, Text } from '@chakra-ui/react'
import { useState } from 'react'

export default function Coinflip(){
    const answers = ["yes", "no", "nah", "not today", "yeah", "go for it", "today is your day", "I wouldn't suggest it", "free elo today", "not too free but go", "semi free",
                        "not free", "doubling your LP today", "!DANGER! DO NOT QUEUE", "go have fun :)", "yes but in duo only", "yes but solo only", "yes but flex queue only",
                        "yes but ARAM only", "play one aram for good luck then to solo", "360 on chair before queue"                
    ]

    const [answer, setAnswer] = useState("")
    const [showAnswer, setShowAnswer] = useState(false)
    const { colorMode, toggleColorMode } = useColorMode()
    const modeBg = useColorModeValue('rgba(255,255,255,.3)','rgba(64, 60, 59,.4)')

    function getRandomAnswer(){
        setShowAnswer(true)
        setAnswer(answers[Math.floor(Math.random()*answers.length)])
    }

    return (
        <Box>
            <Flex background={colorMode === 'light' ? "#F8F8F8" : "black"}
                    backgroundImage={colorMode === 'light' ? '/backgrounds/anniefadedblur.png' : '/backgrounds/xinzhaoartblur.png'}
                    backgroundSize={"100%"}
                    backgroundRepeat={"no-repeat"}
                    height={"2100px"}
                    as="div" 
                    className="content-container"
                    justifyContent={"center"}>

                <Flex
                    width={"500px"} 
                    height={"200px"} 
                    marginTop={"100px"}
                    flexDir={"column"}
                >
                    <Text marginBottom={"30px"} textAlign={"center"} fontSize={"20px"} fontWeight={500}> Should I queue right now? </Text>
                    <Button onClick={() => {getRandomAnswer()}}>
                        Get answer
                    </Button>
                    <Box bgColor={modeBg} marginTop={"10px"} borderRadius={"7px"}>
                        {showAnswer ? <Text paddingTop={"0px"} fontSize={"24px"} textAlign={"center"} >{answer}</Text> :  <Text paddingTop={"0px"} fontSize={"24px"} textAlign={"center"}>?</Text>}
                    </Box>
                    
                </Flex>
            </Flex>
         
        </Box>
    )
}