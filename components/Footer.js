import { Flex, Box, Heading } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Flex
            className="footer--pin"
            backgroundColor="red.500"
            as="footer">

            <Flex
                as="h1"
            >
                <Heading>
                    Footer
                </Heading>
            </Flex>
        </Flex>
    )
}

export default Footer;