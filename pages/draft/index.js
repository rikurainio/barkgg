import { Box, Flex, Image, useColorMode, Button, useColorModeValue } from '@chakra-ui/react'
import { React, useState, useEffect, useRef, createRef } from 'react';
import { ReactSketchCanvas } from 'react-sketch-canvas';

export default function Draft(){
    const [penColor, setPenColor] = useState("cyan")
    const { colorMode, toggleColorMode } = useColorMode()
    const canvas = useRef()

    // STYLES FOR SUMMONERS RIFT CANVAS
    const styles = {
        border: "0",
        borderRadius: '0',
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
                        paddingTop={"20px"}
                    >
                        <Flex flexDir={"column"}>
                            <Button onClick={() => {canvas.current.clearCanvas()}}>
                                Clear
                            </Button>
                            <Button>
                                Size
                            </Button>
                            <Button>
                                Color
                            </Button>
                        </Flex>
                        

                        <ReactSketchCanvas
                            ref={canvas}
                            style={styles}
                            width="1100px"
                            height="810px"
                            backgroundImage='/backgrounds/summonersrift.png'
                            strokeWidth={10}
                            strokeColor={penColor}
                        />
                    </Flex>
            </Flex>
        </Box>
    )
}