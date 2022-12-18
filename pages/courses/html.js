import Link from "next/link";
import Head from "next/head";

import {
	Button,
	Flex
} from "@chakra-ui/react";

import Section from "../../components/section";
import ColorHeading from "../../components/colorHeading";
import CourseButtons from "../../components/courses/course-buttons";


function Page() {
	return (
		<>
			<Head>
				<title>HTML</title>
				<meta name="description" content="codeskewl" />
			</Head>

			<Section>
				<ColorHeading
					gradient="linear-gradient(110deg, blue.500, blue.300)"
				>
					HTML
				</ColorHeading>

				<CourseButtons disable="HTML" />

			</Section>
		</>
	)
}

export default Page;