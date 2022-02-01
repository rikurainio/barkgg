import { Flex, Box, Heading } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Flex
            min-height={"100vh"}
            className="footer--pin"
            backgroundColor="teal.500"
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