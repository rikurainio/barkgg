import { Flex, Text, Box, HStack, Heading } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Flex
            justifyContent={"center"}
            className="footer--pin"
            backgroundColor="gray.300"
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