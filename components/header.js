import Link from "next/link";

import {
	Box,
	Heading,

} from "@chakra-ui/react";


import Sidebar from "./sidebar";
import Menu from "./menu";

function Component() {
	return (
		<header>
			<Box
				position="fixed"
				alignContent={"center"}
				top={0}
				width="100vw"
				bg="white"
				p={4}
				display="flex"
				alignItems={"center"}
				justifyContent={"space-between"}
				zIndex={400}
			>
				<Box display="flex" gap={4} alignItems="center">
					<Box >
						<Sidebar />
					</Box>
					<Heading as={Link} href="/" position={"relative"} bottom="2px">
						Codeskewl
					</Heading>
				</Box>

				<Menu />

			</Box>
		</header>
	)
}

export default Component;

