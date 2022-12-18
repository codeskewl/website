import Head from "next/head";
import { Heading } from "@chakra-ui/react";
import Section from "../../components/section";
import ColorHeading from "../../components/colorHeading";
import CourseButtons from "../../components/courses/course-buttons";

function Page() {
	return (
		<>
			<Head>
				<title>CSS</title>
				<meta name="description" content="codeskewl" />
			</Head>

			<Section>
				<ColorHeading
					gradient="linear-gradient(110deg, red.500, red.300)"
				>
					CSS
				</ColorHeading>

				<CourseButtons disable="CSS" />
			</Section>
		</>
	)
}

export default Page;