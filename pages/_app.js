import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { ClerkProvider } from '@clerk/nextjs';

import Layout from '../components/layout'


export default function App({ Component, pageProps }) {
  return <ChakraProvider>
    <ClerkProvider {...pageProps} >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ClerkProvider>
  </ChakraProvider>
}
