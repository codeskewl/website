
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


export default function Page() {
  return (
    <div>
      <Head>
        <title>Introduction</title>
        <meta name="description" content="codeskewl" />
      </Head>

      <Section>

        <Text
          bgGradient='linear(-15deg, #FF0080, #7928CA)'
          bgClip='text'
          fontSize='6xl'
          fontWeight='extrabold'
        >
          Introduction
        </Text>

        <Heading>
          Heading
        </Heading>

        <Heading size="lg">
          Heading
        </Heading>

        <Heading size="md">
          Heading
        </Heading>

        <Heading size="sm">
          Heading
        </Heading>

        <br />

        <Flex gap={3} flexWrap={"wrap"}>
          <p>
            Lorem ipsum.
          </p>

          <Text color="blue.500">
            Lorem ipsum.
          </Text>

          <Text color="green.500">
            Lorem ipsum.
          </Text>

          <Text color="red.500">
            Lorem ipsum.
          </Text>

          <Text color="yellow.500">
            Lorem ipsum.
          </Text>

          <Text color="purple.500">
            Lorem ipsum.
          </Text>

          <Text color="pink.500">
            Lorem ipsum.
          </Text>

          <Text color="teal.500">
            Lorem ipsum.
          </Text>
        </Flex>

        <br />

        <Flex display={"flex"} gap={3} flexWrap={"wrap"}>
          <Button>
            Button
          </Button>

          <Button colorScheme={"blue"}>
            Button
          </Button>

          <Button colorScheme={"green"}>
            Button
          </Button>

          <Button colorScheme={"red"}>
            Button
          </Button>

          <Button colorScheme={"yellow"}>
            Button
          </Button>

          <Button colorScheme={"purple"}>
            Button
          </Button>

          <Button colorScheme={"pink"}>
            Button
          </Button>

          <Button colorScheme={"teal"}>
            Button
          </Button>

        </Flex>

        <br />

        <UnorderedList>
          <ListItem>Lorem ipsum dolor sit amet</ListItem>
          <ListItem>Consectetur adipiscing elit</ListItem>
          <ListItem>Integer molestie lorem at massa</ListItem>
          <ListItem>Facilisis in pretium nisl aliquet</ListItem>
        </UnorderedList>
      </Section>

    </div>
  )
}
