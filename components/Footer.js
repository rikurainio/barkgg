import { Flex, Text, Box, HStack, Heading, useColorMode, useColorModeValue } from '@chakra-ui/react'

const Footer = () => {
    const modeColorsFooterNavbar = useColorModeValue('rgb(245, 245, 250)', 'rgb(53, 54, 51)')

    return (
        <Flex
            justifyContent={"center"}
            className="footer--pin"
            backgroundColor={modeColorsFooterNavbar}
            as="footer">

            <Box
                flexDirection={"row"}
                paddingBottom={"20px"}
                as="h1"
            >
                <Box>
                    <HStack paddingTop={"6px"} spacing={"30px"}>
                        <Text>
                            About
                        </Text>
                        <Text>
                            Copyright Notice
                        </Text>
                        <Text>
                            Sitemap
                        </Text>
                        <Text>
                            Contact
                        </Text>
                        <Text>
                            Socials
                        </Text>
                    </HStack>
                </Box>
            </Box>
        </Flex>
    )
}

export default Footer;