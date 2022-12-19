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

export default function AccountPage() {

  const { isLoaded, isSignedIn, user } = useUser()
  const { session } = useSession();

  function logout() {
    session.end();
  }

  function account() {
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
      <Box>
        <Flex gap={3} flexWrap={"wrap"} mb={5} overflow="hidden" borderTop="1px" borderBottom="1px" borderColor={"gray.300"}>
          <Box ml={-12} mt="-5">
            <UserProfile appearance={{
              layout: {
                // socialButtonsVariant: 'blockButton',
                // socialButtonsPlacement: 'bottom',
                logoPlacement: "none"
              }
            }} />
          </Box>
        </Flex>

        <Flex gap={3} flexWrap={"wrap"} mb={5} overflow="hidden" >
          <Button colorScheme="red" onClick={logout}>
            Logout
          </Button>
        </Flex>
      </Box>

    )
  }

  return (
    <div>
      <Head>
        <title>Account</title>
        <meta name="description" content="codeskewl" />
      </Head>

      <Section>
        <ColorHeading
          gradient={"linear-gradient(110deg, red.700, pink.500)"}
        >
          Account
        </ColorHeading>



        {account()}


      </Section>
    </div>
  )
}
