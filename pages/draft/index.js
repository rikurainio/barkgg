import { Box, Flex, Image, useColorMode, Button, useColorModeValue,
         Slider, SliderMark, SliderThumb, SliderTrack, SliderFilledTrack } from '@chakra-ui/react'
import { React, useState, useEffect, useRef, createRef } from 'react';
import { FaPen } from 'react-icons/fa';

import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import ColorSelect from '../../components/colorpicker/ColorSelect';
import Ward from '../../components/mapitems/Ward';
import Laner from '../../components/mapitems/Laner'

export default function Draft(){
    //WARD & LANER COMPONENTS
    const [wardComponents, setWardComponents] = useState([])
    const [lanerComponents, setLanerComponents] = useState([])

    // OTHER STATES
    const [cursor, setCursor] = useState('crosshair');
    const [className, setClassName] = useState('pen')
    const [sliderValue, setSliderValue] = useState(50)
    const [penColor, setPenColor] = useState("#00adef")
    const { colorMode, toggleColorMode } = useColorMode()
    const canvas = useRef()
    

    //REFS
    const wardRef = useRef()

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

    function addWard(wardType){
        if(wardType == "normal"){

        }
        if(wardType == "control"){

        }
    }

    return (
        <Box>
            <Flex   background={colorMode === 'light' ? "#F8F8F8" : "black"}
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
                        
                            <Button marginTop={"10px"} marginBottom={"1px"} onClick={() => {canvas.current.eraseMode(false); setClassName('pen')}}>
                                Pen
                            </Button>
                            <Button marginTop={"10px"} marginBottom={"1px"} onClick={() => {canvas.current.eraseMode(true); setClassName('eraser')}}>
                                Eraser
                            </Button>
                            <Button marginTop={"10px"} marginBottom={"1px"} onClick={() => {canvas.current.clearCanvas()}}>
                                Clear
                            </Button>
                            
                            <Flex>
                                <Button width={"80px"} marginRight={"10px"} marginTop={"10px"} marginBottom={"1px"} onClick={() => {canvas.current.undo()}}>
                                    Undo
                                </Button>
                                <Button width={"80px"} marginTop={"10px"} marginBottom={"1px"} onClick={() => {canvas.current.redo()}}>
                                    Redo
                                </Button>
                            </Flex>
                           
                            <Button marginTop={"10px"} marginBottom={"1px"} onClick={addWard("normal")}>
                                Ward
                            </Button>
                            <Button marginTop={"10px"} marginBottom={"1px"} onClick={addWard("control")}>
                                Control Ward
                            </Button>
                        </Flex>
                    
               
                        <Box placeItems={"center"}>
                            <Box>
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
                            </Box>
                            <Box
                                className='sketch-overlay-box'
                                marginTop={"-810px"}
                                position={"absolute"}
                                width="1100px"
                                height="810px"
                            >
                                <Box
                                    marginTop={"-10px"}
                                    backgroundColor={"rgba(0,0,0,.4)"}
                                    width={"1100px"}
                                    height={"51px"}
                                >
                                    <Draggable nodeRef={wardRef}>
                                        <Box marginLeft={"10px"} marginTop={"10px"} maxW={"52px"} borderRadius={"full"} className='ward' ref={wardRef}><Ward wardType={"normal"}></Ward></Box>
                                    </Draggable>
                                    <Draggable nodeRef={wardRef}>
                                        <Box marginLeft={"80px"} marginTop={"-24px"} maxW={"52px"} borderRadius={"full"} className='ward' ref={wardRef}> <Laner letter={"T"} side={"b"}></Laner></Box>
                                    </Draggable>
                                    <Draggable nodeRef={wardRef}>
                                        <Box marginLeft={"117px"} maxW={"52px"} borderRadius={"full"} className='ward' ref={wardRef}> <Laner letter={"JG"} side={"b"}></Laner></Box>
                                    </Draggable>
                                    <Draggable nodeRef={wardRef}>
                                        <Box marginLeft={"154px"} maxW={"52px"} borderRadius={"full"} className='ward' ref={wardRef}> <Laner letter={"M"} side={"b"}></Laner></Box>
                                    </Draggable>
                                    <Draggable nodeRef={wardRef}>
                                        <Box marginLeft={"191px"} maxW={"52px"} borderRadius={"full"} className='ward' ref={wardRef}> <Laner letter={"AD"} side={"b"}></Laner></Box>
                                    </Draggable>
                                    <Draggable nodeRef={wardRef}>
                                        <Box marginLeft={"228px"} maxW={"52px"} borderRadius={"full"} className='ward' ref={wardRef}> <Laner letter={"S"} side={"b"}></Laner></Box>
                                    </Draggable>

                                    <Draggable nodeRef={wardRef}>
                                        <Box marginLeft={"280px"} maxW={"52px"} borderRadius={"full"} className='ward' ref={wardRef}> <Laner letter={"T"} side={"r"}></Laner></Box>
                                    </Draggable>
                                    <Draggable nodeRef={wardRef}>
                                        <Box marginLeft={"317px"} maxW={"52px"} borderRadius={"full"} className='ward' ref={wardRef}> <Laner letter={"JG"} side={"r"}></Laner></Box>
                                    </Draggable>
                                    <Draggable nodeRef={wardRef}>
                                        <Box marginLeft={"354px"} maxW={"52px"} borderRadius={"full"} className='ward' ref={wardRef}> <Laner letter={"M"} side={"r"}></Laner></Box>
                                    </Draggable>
                                    <Draggable nodeRef={wardRef}>
                                        <Box marginLeft={"391px"} maxW={"52px"} borderRadius={"full"} className='ward' ref={wardRef}> <Laner letter={"AD"} side={"r"}></Laner></Box>
                                    </Draggable>
                                    <Draggable nodeRef={wardRef}>
                                        <Box marginLeft={"428px"} maxW={"52px"} borderRadius={"full"} className='ward' ref={wardRef}> <Laner letter={"S"} side={"r"}></Laner></Box>
                                    </Draggable>
                                </Box>
                               
                            </Box>
                        </Box>
                        
                    </Flex>
            </Flex>
        </Box>
    )
}