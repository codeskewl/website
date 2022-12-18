import Header from "./header";
import Footer from "./footer";
import Head from "next/head";
import { Box } from "@chakra-ui/react";

export default function Layout({ children }) {
	return (
		<>
			<Header />

			<Box as="main" mt={["70.2px", "70.2px", "75.2px"]} >
				{children}
			</Box>

			<Footer />
		</>
	)
}

