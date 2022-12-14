import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>codeskewl</title>
        <meta name="description" content="Codeskewl – code is cool!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box bg="green.200" height="400px">

      </Box>

      <Box bg="red.200" height="500px">

      </Box>

      <Box bg="blue.200" height="500px">

      </Box>

      <Box bg="teal.200" height="500px">

      </Box>

    </div>
  )
}
