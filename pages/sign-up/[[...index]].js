import { Box } from "@chakra-ui/react";
import Section from "../../components/section";
import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => (
	<Section>
		<Box textAlign="center">
			<Box display="inline-block" >
				<SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
			</Box>
		</Box>
	</Section>
);

export default SignUpPage;