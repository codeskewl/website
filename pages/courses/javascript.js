import Head from "next/head";
import { Heading } from "@chakra-ui/react";
import Section from "../../components/section";
import ColorHeading from "../../components/colorHeading";
import CourseButtons from "../../components/courses/course-buttons";

function Page() {
	return (
		<>
			<Head>
				<title>JavaScript</title>
				<meta name="description" content="codeskewl" />
			</Head>

			<Section>
				<ColorHeading
					gradient="linear-gradient(110deg, green.500, green.300)"
				>
					JavaScript
				</ColorHeading>

				<CourseButtons disable="JavaScript" />
			</Section>
		</>
	)
}

export default Page;