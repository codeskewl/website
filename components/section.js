import { Box } from "@chakra-ui/react";

function Section({ children }) {
	return (
		<Box px={[5, 10, 20]} py={[5, 10, 20]}>
			{children}
		</Box>
	)
}

export default Section;