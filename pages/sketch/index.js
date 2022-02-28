import { Box, Flex, Image, useColorMode, Button, useColorModeValue,
         Slider, SliderMark, SliderThumb, SliderTrack, SliderFilledTrack, HStack, List, ListItem } from '@chakra-ui/react'
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
    const [wardCount, setWardCount] = useState(1)
    const [controlWardCount, setControlWardCount] = useState(1)

    // OTHER STATES
    const [cursor, setCursor] = useState('crosshair');
    const [className, setClassName] = useState('pen')
    const [sliderValue, setSliderValue] = useState(50)
    const [penColor, setPenColor] = useState("#00adef")
    const { colorMode, toggleColorMode } = useColorMode()

    //REFS
    const wardRef = useRef()
    const controlWardRef = useRef()

    const bef1 = useRef()
    const bef2 = useRef()
    const bef3 = useRef()
    const bef4 = useRef()
    const bef5 = useRef()

    const ref1 = useRef()
    const ref2 = useRef()
    const ref3 = useRef()
    const ref4 = useRef()
    const ref5 = useRef()

    const canvas = useRef()

    const refList = []
    refList.push(bef1, bef2, bef3, bef4, bef5, ref1, ref2, ref3, ref4, ref5)

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
            setWardCount(wardCount + 1)
        }
        if(wardType == "control"){
            setControlWardCount(controlWardCount + 1)
        }
    }

    function handleWantReset(){
        setWantReset(true)
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
                                Clear drawings
                            </Button>
                            <Flex>
                                <Button width={"80px"} marginRight={"10px"} marginTop={"10px"} marginBottom={"1px"} onClick={() => {canvas.current.undo()}}>
                                    Undo
                                </Button>
                                <Button width={"80px"} marginTop={"10px"} marginBottom={"1px"} onClick={() => {canvas.current.redo()}}>
                                    Redo
                                </Button>
                            </Flex>
                           
                            <Button marginTop={"10px"} marginBottom={"1px"} onClick={() => {addWard("normal")}}>
                                Ward
                            </Button>
                            <Button marginTop={"10px"} marginBottom={"1px"} onClick={() => {addWard("control")}}>
                                Control Ward
                            </Button>
                        </Flex>
                    
               
                        <Box className='test' placeItems={"center"}>
                            <Box borderRadius={"10px"}>
                                <ReactSketchCanvas className={'sketch-canvas-' + className}
                                    ref={canvas}
                                    style={styles}
                                    width="1100px"
                                    height="810px"
                                    backgroundImage='/backgrounds/summonersrift.png'
                                    strokeWidth={sliderValue/4.2}
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
                                bgColor={"rgba(0,0,0,.0)"}
                            >   
                                <Box
                                    paddingTop={"5px"}
                                        backgroundColor={"rgba(40, 43, 44,1)"}
                                        width={"1100px"}
                                        height={"60px"}
                                >
                                    <HStack paddingLeft={"10px"} spacing={"55px"}>
                                        <List>
                                            {Array(wardCount).fill(1).map((elem, idx) => {
                                                return(
                                                <Box key={"ward-"+idx} as="div">
                                                    <Draggable key={"r1"} nodeRef={bef1}>
                                                        <Box
                                                            pos={"absolute"}
                                                            maxW={"52px"} 
                                                            borderRadius={"full"} 
                                                            className='ward' key={"asd"} 
                                                            ref={bef1}> 
                                                            <Ward
                                                                wardType={"normal"} 
                                                            >
                                                            </Ward>
                                                        </Box>
                                                    </Draggable>
                                                </Box>
                                                )
                                            })}
                                        </List>
                                        <List>
                                            {Array(controlWardCount).fill(1).map((elem, idx) => {
                                                return(
                                                <Box key={"controlWard-"+idx} as="div">
                                                    <Draggable key={"r1"} nodeRef={bef1}>
                                                        <Box
                                                            pos={"absolute"}
                                                            maxW={"52px"} 
                                                            borderRadius={"full"} 
                                                            className='ward' key={"asd"} 
                                                            ref={bef1}> 
                                                            <Ward
                                                                wardType={"control"} 
                                                            >
                                                            </Ward>
                                                        </Box>
                                                    </Draggable>
                                                </Box>
                                                )
                                            })}
                                        </List>
                                    </HStack>   

                                    <HStack paddingLeft={"130px"} paddingTop={"25px"}>
                                        <HStack paddingLeft={"20px"} paddingRight={"40px"} spacing={"34px"}>
                                            <Draggable key={"r1"} nodeRef={bef1}>
                                                <Box maxW={"52px"} borderRadius={"full"} className='ward' key={"asd"} ref={bef1}> <Laner letter={"T"} side={"b"}></Laner></Box>
                                            </Draggable>
                                            <Draggable key={"r2"} nodeRef={bef2}>
                                                <Box maxW={"52px"} borderRadius={"full"} className='ward' ref={bef2}> <Laner letter={"JG"} side={"b"}></Laner></Box>
                                            </Draggable>
                                            <Draggable key={"r3"} nodeRef={bef3}>
                                                <Box maxW={"52px"} borderRadius={"full"} className='ward' ref={bef3}> <Laner letter={"M"} side={"b"}></Laner></Box>
                                            </Draggable>
                                            <Draggable key={"r4"} nodeRef={bef4}>
                                                <Box maxW={"52px"} borderRadius={"full"} className='ward' ref={bef4}> <Laner letter={"AD"} side={"b"}></Laner></Box>
                                            </Draggable>
                                            <Draggable key={"r5"} nodeRef={bef5}>
                                                <Box  maxW={"52px"} borderRadius={"full"} className='ward' ref={bef5}> <Laner letter={"S"} side={"b"}></Laner></Box>
                                            </Draggable>
                                        </HStack>
                                        <HStack spacing={"34px"}>
                                            <Draggable key={"b1"} nodeRef={ref1}>
                                                <Box  maxW={"52px"} borderRadius={"full"} className='ward' ref={ref1}> <Laner letter={"T"} side={"r"}></Laner></Box>
                                            </Draggable>
                                            <Draggable key={"b2"} nodeRef={ref2}>
                                                <Box  maxW={"52px"} borderRadius={"full"} className='ward' ref={ref2}> <Laner letter={"JG"} side={"r"}></Laner></Box>
                                            </Draggable>
                                            <Draggable key={"b3"} nodeRef={ref3}>
                                                <Box maxW={"52px"} borderRadius={"full"} className='ward' ref={ref3}> <Laner letter={"M"} side={"r"}></Laner></Box>
                                            </Draggable>
                                            <Draggable key={"b4"} nodeRef={ref4}>
                                                <Box maxW={"52px"} borderRadius={"full"} className='ward' ref={ref4}> <Laner letter={"AD"} side={"r"}></Laner></Box>
                                            </Draggable>
                                            <Draggable key={"b5"} nodeRef={ref5}>
                                                <Box maxW={"52px"} borderRadius={"full"} className='ward' ref={ref5}> <Laner letter={"S"} side={"r"}></Laner></Box>
                                            </Draggable>
                                        </HStack>
                                        
                                    </HStack>
                                </Box>
                               
                            </Box>
                        </Box>
                        
                    </Flex>
            </Flex>
        </Box>
    )
}