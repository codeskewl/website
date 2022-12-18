import Head from "next/head";
import { Heading } from "@chakra-ui/react";
import Section from "../../components/section";
import ColorHeading from "../../components/colorHeading";

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
			</Section>
		</>
	)
}

export default Page;