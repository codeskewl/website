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
import CourseButtons from "../../components/courses/course-buttons";

function Page() {
	return (
		<>
			<Head>
				<title>Courses</title>
				<meta name="description" content="codeskewl" />
			</Head>

			<Section>
				<ColorHeading
					gradient="linear-gradient(110deg, gray.600, gray.500)"
				>
					Overview
				</ColorHeading>

				<UnorderedList pl={10} mb={8}>
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

					<ListItem fontSize="lg">
						Lorem
					</ListItem>

					<ListItem fontSize="lg">
						Lorem
					</ListItem>

					<ListItem fontSize="lg">
						Lorem
					</ListItem>

				</UnorderedList>

				<CourseButtons />
			</Section>
		</>
	)
}

export default Page;