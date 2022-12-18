
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,

} from "@chakra-ui/react";

import Section from '../components/section';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="codeskewl" />
      </Head>

      <Section>
        <Heading
          bgGradient={"linear-gradient(270deg,#db59ff 8.88%,#6870de 52.13%,#2ecae6 86.08%)"}
          bgClip='text'
          fontSize={["2xl", "4xl", '5xl']}
          fontWeight='extrabold'
          mb={4}
        >
          Welcome to Codeskewl
        </Heading>

        <Text mb={8}>
          Codeskewl is an interactive set of resources meant to increase your visibility with regards to what's possible on the web and beyond.
        </Text>


        <Flex gap={3} flexWrap={"wrap"} mb={8}>
          <Button >
            Get Started
          </Button>

          <Button colorScheme={"green"}>
            Contact
          </Button>
        </Flex>

        <UnorderedList>
          <ListItem>Lorem ipsum dolor sit amet</ListItem>
          <ListItem>Consectetur adipiscing elit</ListItem>
          <ListItem>Integer molestie lorem at massa</ListItem>
          <ListItem>Facilisis in pretium nisl aliquet</ListItem>
        </UnorderedList>
      </Section>

      <Box bg="green.200" height="400px">

      </Box>

      <Box bg="red.200" height="500px">

      </Box>

      <Box bg="blue.200" height="500px">

      </Box>

      <Box bg="teal.200" height="500px">

      </Box>

    </div >
  )
}
