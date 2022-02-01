import { extendTheme, theme } from "@chakra-ui/react";

// 2. Add your color mode config
const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
  }

export const customTheme = extendTheme({
    colors: {
        primary: "red.500",
        secondary: "red.600",
        highlight: "red.700",
        warning: "red.300",
        danger: "red.300",
    },

    fontSize: {
        large: 200,
    },
    config,
})

export default customTheme;