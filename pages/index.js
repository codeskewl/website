
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
import ColorHeading from '../components/colorHeading';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="codeskewl" />
      </Head>

      <Section>
        <ColorHeading>
          Welcome to Codeskewl
        </ColorHeading>

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


    </div >
  )
}
