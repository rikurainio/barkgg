import { Box, Text, Center } from '@chakra-ui/react'

const Ward = ({wardType}) => {
    if(wardType == "normal"){
        return (
            <Center>
                <Box
                    backgroundColor={"rgba(10, 255, 136,0.25)"}
                    borderRadius={"full"}
                    width={"49px"}
                    height={"49px"}
                    textAlign={"center"}
                >
                </Box>

                <Box
                pos={"absolute"}
                backgroundColor={"rgba(10, 255, 136,0.5)"}
                borderRadius={"full"}
                width={"12px"}
                height={"12px"}
                textAlign={"center"}
                >
                </Box>
                
            </Center>
        )
    }
    if(wardType == "control"){
        return (
            <Center>
                <Box
                    backgroundColor={"rgba(255, 11, 136,0.25)"}
                    borderRadius={"full"}
                    width={"49px"}
                    height={"49px"}
                    textAlign={"center"}
                >
                </Box>

                <Box
                pos={"absolute"}
                backgroundColor={"rgba(255, 11, 136,0.5)"}
                borderRadius={"full"}
                width={"12px"}
                height={"12px"}
                textAlign={"center"}
                >
                </Box>
                
            </Center>
        )
    }
    else{
        return null
    }
}

export default Ward