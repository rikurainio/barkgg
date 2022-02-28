import { Box, Flex, Image, useColorMode, Button, useColorModeValue, Slider, SliderMark, SliderThumb, SliderTrack, SliderFilledTrack } from '@chakra-ui/react'
import { React, useState, useEffect, useRef, createRef } from 'react';
import { FaPen } from 'react-icons/fa';

import { ReactSketchCanvas } from 'react-sketch-canvas';
import ColorSelect from '../../components/colorpicker/ColorSelect';

export default function Draft(){
    const [sliderValue, setSliderValue] = useState(50)
    const [penColor, setPenColor] = useState("#00adef")
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
                        paddingTop={"25px"}
                    >
                        <Flex flexDir={"column"} marginRight={"30px"} marginTop={"35px"}>
                            <Slider marginBottom={"10px"} onChange={(val) => setSliderValue(val)}>
                                <SliderMark
                                    value={sliderValue}
                                    textAlign='center'
                                    bg='blue.500'
                                    borderRadius={"4px"}
                                    color='white'
                                    mt='-10'
                                    ml='-5'
                                    w='12'
                                >
                                    {sliderValue}%
                                </SliderMark>
                                <SliderTrack backgroundColor={"#dfe1dc"}>
                                    <SliderFilledTrack/>
                                </SliderTrack>
                                <SliderThumb boxSize={"30px"} backgroundColor={"#dfe1dc"}>
                                    <Box color='black'  as={FaPen} />
                                </SliderThumb>
                            </Slider>
                            <ColorSelect setPenColor={setPenColor}></ColorSelect>
                            <Button marginTop={"10px"} marginBottom={"1px"} onClick={() => {canvas.current.clearCanvas()}}>
                                Clear
                            </Button>
                        </Flex>
                        

                        <ReactSketchCanvas
                            ref={canvas}
                            style={styles}
                            width="1100px"
                            height="810px"
                            backgroundImage='/backgrounds/summonersrift.png'
                            strokeWidth={sliderValue/2}
                            strokeColor={penColor}
                        />
                        
                    </Flex>
            </Flex>
        </Box>
    )
}