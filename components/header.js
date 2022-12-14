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
	useDisclosure
} from "@chakra-ui/react";

import { BsList, BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { useRef } from "react";

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
			>
				<Box display="flex" gap={4} alignItems="center">
					<Box >
						<Sidebar />
					</Box>
					<Heading position={"relative"} bottom="2px">
						codeskewl
					</Heading>
				</Box>

				<MenuBar />

			</Box>
		</header>
	)
}

export default Component;


function MenuBar() {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const btnRef = useRef()

	return (
		<>
			<IconButton ref={btnRef} variant="outline" rounded="full" fontSize="xl" onClick={onOpen}>
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
					<DrawerCloseButton rounded="full" size="lg" fontSize="sm" />
					<DrawerHeader>codeskewl</DrawerHeader>

					<DrawerBody>
						<Heading>

						</Heading>
					</DrawerBody>

					<DrawerFooter>
						<Button variant='outline' mr={3} onClick={onClose}>
							Cancel
						</Button>
						<Button colorScheme='blue'>Save</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	)
};



function Sidebar() {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const btnRef = useRef()

	return (
		<>
			<IconButton ref={btnRef} onClick={onOpen} variant="outline" rounded="full">
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
					<DrawerCloseButton rounded="full" size="lg" fontSize="sm" />
					<DrawerHeader>codeskewl</DrawerHeader>

					<DrawerBody>
						<Heading>

						</Heading>
					</DrawerBody>

					<DrawerFooter>
						<Button variant='outline' mr={3} onClick={onClose}>
							Cancel
						</Button>
						<Button colorScheme='blue'>Save</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	)
};