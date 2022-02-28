import {Box, IconButton} from '@chakra-ui/react'

const ColorSquare = ({color, setPenColor}) => {
    return (
        <Box padding={"2px"}>
            <IconButton
                onClick={() => {setPenColor(color)}}
                size={"xs"}
                borderRadius={"2px"}
                border={"0px"}
                background={color}
                _hover={{ bg: color }}>
            </IconButton>
        </Box>
        
    )
}

export default ColorSquare  