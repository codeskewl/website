import Link from "next/link";

import {
	Box,
	Button,
	Heading,
	IconButton,
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	useDisclosure,
	Stack
} from "@chakra-ui/react";

import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
} from '@chakra-ui/react'


import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { useRef } from "react";

function Sidebar() {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const btnRef = useRef()

	return (
		<>
			<IconButton ref={btnRef} variant="ghost" rounded="lg" fontSize="xl" onClick={onOpen}>
				<BsReverseLayoutTextSidebarReverse />
			</IconButton>
			<Drawer
				isOpen={isOpen}
				placement='left'
				onClose={onClose}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton rounded="lg" size="lg" fontSize="sm" />
					<DrawerHeader>Sidebar</DrawerHeader>

					<DrawerBody>
						<Stack spacing={1}>

							<Box as={Link} href="/" rounded="md" _hover={{ bg: "gray.100" }} padding={"0.5rem 1rem"} border="0.1rem solid gray.400" cursor="pointer" onClick={onClose}>
								Home
							</Box>

							<Box as={Link} href="/introduction" rounded="md" _hover={{ bg: "gray.100" }} padding={"0.5rem 1rem"} border="0.1rem solid gray.400" cursor="pointer" onClick={onClose}>
								Introduction
							</Box>

							<Box as={Link} href="/components" rounded="md" _hover={{ bg: "gray.100" }} padding={"0.5rem 1rem"} border="0.1rem solid gray.400" cursor="pointer" onClick={onClose}>
								Components
							</Box>




							<Accordion allowToggle outline={"none"} borderStyle="none">
								<AccordionItem>
									<h2>
										<AccordionButton width="100%" as={Box} rounded="md" _hover={{ bg: "gray.100" }} padding={"0.5rem 1rem"} border="0.1rem solid gray.400" cursor="pointer" display="flex" justifyContent={"space-between"}>
											Title 1

											<AccordionIcon float="right" />
										</AccordionButton>
									</h2>
									<AccordionPanel padding="0" pb={4} border="none" >
										<Stack spacing={1} pt={1} pl={6} pr={3}>
											<Box rounded="md" _hover={{ bg: "gray.100" }} padding={"0.5rem 1rem"} border="0.1rem solid gray.400" cursor="pointer">
												foobar
											</Box>

											<Box rounded="md" _hover={{ bg: "gray.100" }} padding={"0.5rem 1rem"} border="0.1rem solid gray.400" cursor="pointer">
												foobar
											</Box>


											<Box rounded="md" _hover={{ bg: "gray.100" }} padding={"0.5rem 1rem"} border="0.1rem solid gray.400" cursor="pointer">
												foobar
											</Box>
										</Stack>
									</AccordionPanel>
								</AccordionItem>
							</Accordion>

							<Accordion allowToggle outline={"none"} borderStyle="none">
								<AccordionItem>
									<h2>
										<AccordionButton width="100%" as={Box} rounded="md" _hover={{ bg: "gray.100" }} padding={"0.5rem 1rem"} border="0.1rem solid gray.400" cursor="pointer" display="flex" justifyContent={"space-between"}>
											Title 2

											<AccordionIcon float="right" />
										</AccordionButton>
									</h2>
									<AccordionPanel padding="0" pb={4} border="none" >
										<Stack spacing={1} pt={1} pl={6} pr={3}>
											<Box rounded="md" _hover={{ bg: "gray.100" }} padding={"0.5rem 1rem"} border="0.1rem solid gray.400" cursor="pointer">
												foobar
											</Box>

											<Box rounded="md" _hover={{ bg: "gray.100" }} padding={"0.5rem 1rem"} border="0.1rem solid gray.400" cursor="pointer">
												foobar
											</Box>

											<Box rounded="md" _hover={{ bg: "gray.100" }} padding={"0.5rem 1rem"} border="0.1rem solid gray.400" cursor="pointer">
												foobar
											</Box>
										</Stack>
									</AccordionPanel>
								</AccordionItem>
							</Accordion>

							<Box rounded="md" _hover={{ bg: "gray.100" }} padding={"0.5rem 1rem"} border="0.1rem solid gray.400" cursor="pointer">
								Contact
							</Box>

							<Accordion allowToggle outline={"none"} borderStyle="none">
								<AccordionItem>
									<h2>
										<AccordionButton width="100%" as={Box} rounded="md" _hover={{ bg: "gray.100" }} padding={"0.5rem 1rem"} border="0.1rem solid gray.400" cursor="pointer" display="flex" justifyContent={"space-between"}>
											More Info

											<AccordionIcon float="right" />
										</AccordionButton>
									</h2>
									<AccordionPanel padding="0" pb={4} border="none" >
										<Stack spacing={1} pt={1} pl={6} pr={3}>
											<Box rounded="md" _hover={{ bg: "gray.100" }} padding={"0.5rem 1rem"} border="0.1rem solid gray.400" cursor="pointer">
												foobar
											</Box>

											<Box rounded="md" _hover={{ bg: "gray.100" }} padding={"0.5rem 1rem"} border="0.1rem solid gray.400" cursor="pointer">
												foobar
											</Box>


											<Box rounded="md" _hover={{ bg: "gray.100" }} padding={"0.5rem 1rem"} border="0.1rem solid gray.400" cursor="pointer">
												foobar
											</Box>
										</Stack>

									</AccordionPanel>
								</AccordionItem>
							</Accordion>
						</Stack>
					</DrawerBody>

					<DrawerFooter>
						{/* <Button variant='outline' mr={3} onClick={onClose}>
							Cancel
						</Button>
						<Button colorScheme='blue'>Save</Button> */}
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	)
};


export default Sidebar;