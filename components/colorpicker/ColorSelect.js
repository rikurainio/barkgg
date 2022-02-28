import { Flex } from '@chakra-ui/react'

import ColorSquare from "./ColorSquare"

const ColorSelect = ({setPenColor}) => {
    return (
        <Flex>
            <ColorSquare setPenColor={setPenColor} color={"#00adef"}> </ColorSquare>
            <ColorSquare setPenColor={setPenColor} color={"#fef200"}> </ColorSquare>
            <ColorSquare setPenColor={setPenColor} color={"#ff0b88"}> </ColorSquare>
            <ColorSquare setPenColor={setPenColor} color={"#1FD430"}> </ColorSquare>
            <ColorSquare setPenColor={setPenColor} color={"#FFFFFF"}> </ColorSquare>
            <ColorSquare setPenColor={setPenColor} color={"#000000"}> </ColorSquare>
        </Flex>
    )
}

export default ColorSelect