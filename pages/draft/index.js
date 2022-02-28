import { Box, Flex, Image, useColorMode, Button, useColorModeValue, Slider, SliderMark, SliderThumb, SliderTrack, SliderFilledTrack } from '@chakra-ui/react'
import { React, useState, useEffect, useRef, createRef } from 'react';
import { FaPen } from 'react-icons/fa';

import { ReactSketchCanvas } from 'react-sketch-canvas';
import ColorSelect from '../../components/colorpicker/ColorSelect';

export default function Draft(){
    const [cursor, setCursor] = useState('crosshair');
    const [className, setClassName] = useState('pen')
    const [sliderValue, setSliderValue] = useState(50)
    const [penColor, setPenColor] = useState("#00adef")
    const { colorMode, toggleColorMode } = useColorMode()
    const canvas = useRef()

    // STYLES FOR SUMMONERS RIFT CANVAS
    const styles = {
        border: "0",
        borderRadius: '0',
    }

    function returnColor(penColor){
        if(penColor == 'black' || penColor == "#000000"){
            return 'white'
        }
        else{
            return 'black'
        }
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
                            <Slider backgroundColor={'rgba(226, 232, 240,.0)'} borderRadius={"6px"} size={"lg"} marginBottom={"10px"} onChange={(val) => setSliderValue(val)}>
                                <SliderMark
                                    value={sliderValue}
                                    textAlign='center'
                                    bg={penColor}
                                    borderRadius={"4px"}
                                    color={returnColor(penColor)}
                                    mt='-12'
                                    ml='-5'
                                    w='12'
                                >
                                    {sliderValue}%
                                </SliderMark>
                                <SliderTrack backgroundColor={"#dfe1dc"}>
                                    <SliderFilledTrack backgroundColor={penColor}/>
                                </SliderTrack>
                                <SliderThumb boxSize={"30px"} backgroundColor={"#dfe1dc"}>
                                    <Box color='black'  as={FaPen} />
                                </SliderThumb>
                            </Slider>
                            <ColorSelect setPenColor={setPenColor}></ColorSelect>

                            <Button marginTop={"10px"} marginBottom={"1px"} onClick={() => {canvas.current.eraseMode(false)}}>
                                Pen
                            </Button>
                            <Button marginTop={"10px"} marginBottom={"1px"} onClick={() => {canvas.current.eraseMode(true); setClassName('eraser')}}>
                                Eraser
                            </Button>
                            <Button marginTop={"10px"} marginBottom={"1px"} onClick={() => {canvas.current.clearCanvas()}}>
                                Clear
                            </Button>
                            
                            
                        </Flex>
                        

                        <ReactSketchCanvas className={'sketch-canvas-' + className}
                            ref={canvas}
                            style={styles}
                            width="1100px"
                            height="810px"
                            backgroundImage='/backgrounds/summonersrift.png'
                            strokeWidth={sliderValue/3}
                            eraserWidth={sliderValue}
                            strokeColor={penColor}
                        />
                        
                    </Flex>
            </Flex>
        </Box>
    )
}