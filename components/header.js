import Link from "next/link";

import {
	Box,
	Flex,
	IconButton,
} from "@chakra-ui/react";

import { BsHouseDoor, BsPerson } from "react-icons/bs";
import Sidebar from "./sidebar";
import Menu from "./menu";

import { useRef } from "react";

function Component() {
	const btnRef = useRef()

	return (

		<Flex
			position="fixed"
			alignContent={"center"}
			top={0}
			width="100vw"
			bg="white"
			p={4}
			px={[5, 10, 20]}
			alignItems={"center"}
			justifyContent="space-between"
			zIndex={400}
			a="header"
		>
			<Flex gap={2} alignItems="center">
				<Sidebar />

				<Link href="/" passHref>
					<IconButton ref={btnRef} variant="ghost" rounded="lg" fontSize="2xl" >
						<BsHouseDoor />
					</IconButton>
				</Link>

				<Link href="/login" passHref>
					<IconButton ref={btnRef} variant="ghost" rounded="lg" fontSize="2xl" >
						<BsPerson />
					</IconButton>
				</Link>
			</Flex>

			<Menu />
		</Flex>
	)
}

export default Component;

