import { extendTheme, theme } from "@chakra-ui/react";
import { createBreakpoints } from '@chakra-ui/theme-tools'
import { mode } from '@chakra-ui/theme-tools';

// 2. Add your color mode config
const config = {
    initialColorMode: 'light',
    useSystemColorMode: true,
}

const breakpoints = createBreakpoints({
sm: '30em',
md: '48em',
lg: '62em',
xl: '80em',
'2xl': '96em',
})

const styles = {
    global: props => ({
        body: {
            color: mode('black', '#dfe1dc')(props),
        },
        p: {
            color: mode('black', '#dfe1dc')(props),
        }
    }),
};

export const customTheme = extendTheme({
    styles,

    colors: {
        navbarLight: '#cccccc',
        textLight: 'black',
        matchPlateWinLight: 'blue.200',
        matchPlateLossLight: 'red.200',

        navbarDark: '5a5b56',
        navbarDark2: '1c1e1d',
        textDark: 'ece2cf',
        matchPlateWinDark: '1f2d3f',
        matchPlateLossDark: '461a1a',
    },

    fontSize: {
        matchHistoryCard: "24px",
        large: 200,
    },
    config,
})

export default customTheme;