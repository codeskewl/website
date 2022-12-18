import Head from "next/head";
import { Heading } from "@chakra-ui/react";
import Section from "../../components/section";
import ColorHeading from "../../components/colorHeading";

function Page() {
	return (
		<>
			<Head>
				<title>JavaScript</title>
				<meta name="description" content="codeskewl" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Section>
				<ColorHeading
					gradient="linear-gradient(110deg, green.500, green.300)"
				>
					JavaScript
				</ColorHeading>
			</Section>
		</>
	)
}

export default Page;