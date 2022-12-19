import Image from 'next/image'
import { Box } from "@chakra-ui/react";

function Component() {
	return (

		<Box as="footer" p={4} px={[5, 10, 20]}>
			<a
				href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
				target="_blank"
				rel="noopener noreferrer"
			>
				Powered by{' '}
				<span >
					<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
				</span>
			</a>
		</Box>
	)
}

export default Component;