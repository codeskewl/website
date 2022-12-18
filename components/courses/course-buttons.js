import Link from "next/link";
import { Button, Flex } from "@chakra-ui/react";
import Courses from "../../data/courses.json";

function CourseButtons({ disable }) {

	function courseButton({ title, slug }, idx) {
		return <Link href={`/courses/${slug}`} passHref rounded="full" key={idx}>
			<Button size="sm" rounded="full" disabled={disable === title}>
				{title}
			</Button>
		</Link>
	};

	function zeroButton() {
		return <Link href="/courses">
			<Button size="sm" rounded="full" disabled={disable == undefined}>
				Courses
			</Button>
		</Link>
	}

	return (
		<Flex gap={2} wrap="wrap">


			{zeroButton()}


			{Courses.map(courseButton)}
		</Flex>
	)
}

export default CourseButtons;