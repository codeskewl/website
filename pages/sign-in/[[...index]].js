import { Box } from "@chakra-ui/react";
import Section from "../../components/section";
import { SignIn } from "@clerk/nextjs";


const SignInPage = () => (
	<Section>
		<Box textAlign="center">
			<Box display="inline-block" >
				<SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
			</Box>
		</Box>
	</Section>
);

export default SignInPage;