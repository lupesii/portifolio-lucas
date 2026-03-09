import AboutMeInfo from "../components/about-me-info";
import Container from "../components/container";
import History from "../components/history";
import Title from "../components/title";
import useEducation from "../hooks/use-education";
import useExperience from "../hooks/use-experience";

export default function AboutMe() {
	const educationHook = useEducation();
	const experienceHook = useExperience();

	return (
		<Container
			as="section"
			className="flex-col justify-center lg:items-center content-center gap-y-20"
		>
			<div className="space-y-5">
				<Title className="whitespace-nowrap">About Me</Title>
				<AboutMeInfo />
			</div>
			<aside className="w-full grid lg:grid-cols-2 grid-cols-1 gap-10 md:gap-16 lg:gap-20 pb-16 md:pb-20 lg:pb-24">
				<div className="space-y-5 w-full min-h-[140px] h-fit">
					<Title>Experience</Title>
					<History hook={experienceHook} />
				</div>
				<div className="space-y-5 w-full min-h-[140px] h-fit">
					<Title>Education</Title>
					<History hook={educationHook} />
				</div>
			</aside>
		</Container>
	);
}
