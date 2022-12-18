import Head from "next/head";
import {
	Heading,
	List,
	ListItem,
	ListIcon,
	OrderedList,
	UnorderedList,
} from "@chakra-ui/react";
import Section from "../../components/section";
import ColorHeading from "../../components/colorHeading";
import Link from "../../components/link";

function Page() {
	return (
		<>
			<Head>
				<title>Courses</title>
				<meta name="description" content="codeskewl" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Section>
				<ColorHeading
					gradient="linear-gradient(110deg, gray.600, gray.500)"
				>
					Overview
				</ColorHeading>

				<UnorderedList pl={10}>

					<ListItem fontSize="lg">
						<Link href="/courses/html">
							HTML
						</Link>
					</ListItem>

					<ListItem fontSize="lg">
						<Link href="/courses/css">
							CSS
						</Link>
					</ListItem>

					<ListItem fontSize="lg">
						<Link href="/courses/javascript">
							JavaScript
						</Link>
					</ListItem>

				</UnorderedList>
			</Section>
		</>
	)
}

export default Page;