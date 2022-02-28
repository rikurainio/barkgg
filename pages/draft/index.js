import { Box, Flex, Image, useColorMode, Button, useColorModeValue } from '@chakra-ui/react'
import { React, useState, useEffect, useRef, createRef } from 'react';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import ColorSelect from '../../components/colorpicker/ColorSelect';

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
                        <Flex paddingRight={"15px"} flexDir={"column"}>
                            <Button marginBottom={"5px"} onClick={() => {canvas.current.clearCanvas()}}>
                                Clear
                            </Button>
                            <Button marginBottom={"5px"}>
                                Size
                            </Button>
                            <ColorSelect setPenColor={setPenColor}></ColorSelect>
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