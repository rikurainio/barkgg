import { extendTheme, theme } from "@chakra-ui/react";
import { createBreakpoints } from '@chakra-ui/theme-tools'

// 2. Add your color mode config
const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
  }


const breakpoints = createBreakpoints({
sm: '30em',
md: '48em',
lg: '62em',
xl: '80em',
'2xl': '96em',
})


export const customTheme = extendTheme({
    colors: {
        primary: "red.500",
        secondary: "red.600",
        highlight: "red.700",
        warning: "red.300",
        danger: "red.300",
    },

    fonts: {
    },

    


    fontSize: {
        matchHistoryCard: "24px",
        large: 200,
    },
    config,
})

export default customTheme;