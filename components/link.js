import Link from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";

function Component({ children, href, title }) {
	return (
		<Link href={href} passHref>
			<ChakraLink>
				{children}
			</ChakraLink>
		</Link>
	)
}

export default Component;