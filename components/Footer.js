import { Flex, Text, Box, useColorModeValue, Link } from '@chakra-ui/react'
import Twitter from 'react-color/lib/components/twitter/Twitter';
import { FaTwitter, FaDiscord } from 'react-icons/fa';


const Footer = () => {
    const modeColorsFooterNavbar = useColorModeValue('rgb(245, 245, 250)', 'rgb(53, 54, 51)')

    return (
        <Flex
            height={'360px'}
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
                    <Flex flexDir={'column'} paddingTop={"20px"} spacing={"30px"}>
                        <Text fontSize={'50px'} textAlign={'center'}>
                            Socials
                        </Text>
                        <Flex justifyContent={'center'} alignContent={'center'} textAlign={'center'}>
                            <Flex flexDir={'column'} marginRight={'10px'}>
                                <Link href='https://twitter.com/RhanLoL'>
                                    <FaTwitter fontSize={'80px'}></FaTwitter>
                                </Link>
                                <Text>
                                    @RhanLoL
                                </Text>
                            </Flex>

                            <Flex flexDir={'column'} justifyContent={'center'} alignContent={'center'} marginLeft={'10px'}>
                                <Link href='https://discord.com/users/107596792421449728'>
                                    <FaDiscord fontSize={'80px'}></FaDiscord>
                                </Link>
                                <Text>
                                    Rhan#5498
                                </Text>
                            </Flex>

                        </Flex>
                    </Flex>
                </Box>
            </Box>
        </Flex>
    )
}

export default Footer;