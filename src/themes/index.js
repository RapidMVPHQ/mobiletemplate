import { extendTheme } from 'native-base';


const colors = {
    primary: {
        50: '#E8F9FD',
        100: '#84A7E5',
        200: '#407BFF',
        300: '#2263F9',
        400: '#2155CD',
    },
    accent: {
        50: '#B0E5C1',
        100: '#20A74B',
    },
    neutral: {
        50: '#FFFFFF',
    },
}

const config = {
    initialColorMode: 'dark',
    strictMode: 'warn',
}

const fontConfig = {
    thin: 100,
    extralight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    main: 600,
    bold: 700,
    black: 800,
    extrabold: 900,
  }


const theme = extendTheme({
    // fonts: {
    //     heading: 'Poppins, sans-serif',
    //     body: 'Montserrat, sans-serif',
    // },
    colors,
    fontConfig,
    config,
})


export default theme;