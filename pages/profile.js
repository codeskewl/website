import Link from "next/link";
import Head from 'next/head'
import Image from 'next/image'
import { useUser, useSession } from '@clerk/nextjs'
import { UserProfile } from "@clerk/nextjs";

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
  Skeleton,
} from "@chakra-ui/react";

import Section from '../components/section';
import ColorHeading from '../components/colorHeading';

export default function ProfilePage() {

  const { isLoaded, isSignedIn, user } = useUser()
  const { session } = useSession();

  function logout() {
    session.end()
  }

  function profile() {
    if (!isLoaded) {
      return <Skeleton height="80vh" />
    }

    if (!isSignedIn) {
      return (
        <Flex gap={3} flexWrap={"wrap"} mb={8}>

          <Link href="/sign-in" passHref>
            <Button >
              Sign In
            </Button>
          </Link>

          <Link href="/sign-up" passHref>
            <Button >
              Sign Up
            </Button>
          </Link>
        </Flex>
      )
    }




    return (
      <Flex gap={3} flexWrap={"wrap"} mb={8} overflow="hidden" >
        <Button colorScheme="red" onClick={logout}>
          Logout
        </Button>

      </Flex>
    )
  }

  return (
    <div>
      <Head>
        <title>Login</title>
        <meta name="description" content="codeskewl" />
      </Head>

      <Section>
        <ColorHeading
          gradient={"linear-gradient(110deg, green.500, yellow.400)"}
        >
          Profile
        </ColorHeading>



        {profile()}

      </Section>
    </div>
  )
}
