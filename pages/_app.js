import '../styles/globals.css'
import { ChakraProvider} from '@chakra-ui/react'
import Layout from '../components/Layout'
import theme from '../styles/theme/index'
import { AppWrapper } from '../context/state'
import { useState } from '@chakra-ui/react'


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
          <AppWrapper>
              <Component {...pageProps} />
          </AppWrapper>
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
