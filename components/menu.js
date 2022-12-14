import Link from "../components/link";
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


import { BsList, } from "react-icons/bs";
import { useRef } from "react";

function Menu() {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const btnRef = useRef()

	return (
		<>
			<IconButton ref={btnRef} variant="ghost" rounded="lg" fontSize="2xl" onClick={onOpen}>
				<BsList />
			</IconButton>
			<Drawer
				isOpen={isOpen}
				placement='right'
				onClose={onClose}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton rounded="lg" left={4} float="left" size="lg" fontSize="sm" />
					<DrawerHeader textAlign={"right"}>Menu</DrawerHeader>

					<DrawerBody>
						<Heading>

						</Heading>

						<Stack fontSize={"lg"} spacing={2}>
							<Box>
								<Box onClick={onClose} display="inline-block">
									<Link href="/">
										Home
									</Link>
								</Box>
							</Box>


							<Box >
								<Box onClick={onClose} display="inline-block">
									<Link href="/profile" >
										Profile
									</Link>
								</Box>
							</Box>

							<Box>
								<Box onClick={onClose} display="inline-block">
									<Link href="/account">
										Account
									</Link>
								</Box>
							</Box>
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

export default Menu;