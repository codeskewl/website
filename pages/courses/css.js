import Head from "next/head";
import { Heading } from "@chakra-ui/react";
import Section from "../../components/section";
import ColorHeading from "../../components/colorHeading";

function Page() {
	return (
		<>
			<Head>
				<title>CSS</title>
				<meta name="description" content="codeskewl" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Section>
				<ColorHeading
					gradient="linear-gradient(110deg, red.500, red.300)"
				>
					CSS
				</ColorHeading>
			</Section>
		</>
	)
}

export default Page;