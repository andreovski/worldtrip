import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: { 
    yellow: {
      "500": "#FFBA08",
    },
    gray: {
      "50": "#F5F8FA",
      "300": "#DADADA"
    },
    teal: {
      "700": "#47585B" 
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'teal.700'
      }
    }
  }
})