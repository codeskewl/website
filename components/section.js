import { Box } from "@chakra-ui/react";

function Section({ children }) {
	return (
		<Box px={[5, 10, 20]} py={[5, 10, 20]} pt={[5, 10, 10]}>
			{children}
		</Box>
	)
}

export default Section;