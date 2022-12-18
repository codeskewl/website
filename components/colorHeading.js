import {
	Heading
} from "@chakra-ui/react";


function ColorHeading({ gradient = "linear-gradient(270deg,#db59ff 8.88%,#6870de 52.13%,#2ecae6 86.08%)", children }) {
	return (
		<Heading
			as="h1"
			display="inline-block"
			bgGradient={gradient}
			bgClip='text'
			fontSize={["2xl", "4xl", '5xl']}
			fontWeight='extrabold'
			mb={4}

		>
			{children}
		</Heading>
	);
}

export default ColorHeading;