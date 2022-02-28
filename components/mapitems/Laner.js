import { Box, Center, Text } from '@chakra-ui/react'

const Laner = ({letter, side}) => {
    if(side == "b"){
        return (
            <Center>
                    <Box
                    pos={"absolute"}
                    backgroundColor={"rgba(0, 130, 255,0.5)"}
                    borderRadius={"full"}
                    width={"30px"}
                    height={"30px"}
                    textAlign={"center"}
                    >
                            <Text fontWeight={500} fontSize={"14px"} color={"white"} paddingLeft={"1px"} paddingTop={"4px"}>{letter}</Text>
                    </Box>
                    
                </Center>
        ) 
    }
    if(side == "r"){
        return (
            <Center>
               
                    <Box
                    pos={"absolute"}
                    backgroundColor={"rgba(255, 5, 0,0.5)"}
                    borderRadius={"full"}
                    width={"30px"}
                    height={"30px"}
                    textAlign={"center"}
                    >
                        <Text fontWeight={500} fontSize={"14px"} color={"white"} paddingLeft={"1px"} paddingTop={"4px"}>{letter}</Text>
                    </Box>
                    
                </Center>
        ) 
    }
    else{
        return (null)
    }
}

export default Laner