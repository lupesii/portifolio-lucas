import Perfil from "../assets/images/foto.svg?react";
import Container from "../components/container";
import HistoryCard from "../components/history-card";
import LanguageIcons from "../components/languagens-icons";
import Text from "../components/text";
import Title from "../components/title";

export default function AboutMe() {
	const experiences = [
		{
			name: "Self-employed",
			roll: "Freelance Developer",
			description: "Developed custom websites and applications for clients.",
			date: "2022 - Present",
		},
		{
			name: "Self-employed2",
			roll: "Freelance Developer2",
			description: "Developed custom websites and applications for clients2.",
			date: "2022 - Present2",
		},
	];

	const educations = [
		{
			name: "Fatec Prof° Jessen Vidal",
			roll: "Technologist in Multiplatform Software Development",
			description:
				"Pursuing a Technologist Degree in Software Development with a focus on web development and software engineering",
			date: "2025 - Present",
		},
		{
			name: "Self-employed2",
			roll: "Freelance Developer2",
			description: "Developed custom websites and applications for clients2.",
			date: "2022 - Present2",
		},
	];

	return (
		<Container
			as="section"
			className="flex flex-col justify-center content-center grid-cols-[auto_1fr] grid-rows-[repeat(3,max-content)] grid-flow-row gap-y-5"
		>
			<Title className="whitespace-nowrap">About Me</Title>
			<aside className="flex gap-8">
				<div className="flex flex-col justify-between">
					<Perfil />
					<a
						href="/Lucas Silva e Pereira.pdf"
						download="Curriculo_Lucas.pdf"
						className="inline-block w-full  text-center bg-cinza-400 text-white border border-azul font-mono font-semibold text-[28px] py-5 rounded-[10px]"
					>
						My Resume
					</a>
				</div>
				<div className="flex flex-col gap-7">
					<Text as="h1" variant="anony-lg">
						Hi, I am Lucas Pereira
					</Text>
					<Text as="p" variant="anony-lg">
						I am a Full-Stack developer, always looking for new experiences and
						oportunies to learn and grow. I studied in a technical school in the
						systems development course. I study on the internet courses with
						many projects, especially in the Front-End area.
					</Text>
					<div className="flex flex-col gap-3">
						<Text as="h2" variant="anony-md-bold">
							Tools and Technologies I use
						</Text>
						<div className="grid grid-cols-2 grid-flow-row auto-rows-fr gap-y-10">
							<LanguageIcons card title="Front-End" />
							<LanguageIcons card title="Back-End" />
							<LanguageIcons card title="Tools" />
							<LanguageIcons card title="UI Design" />
						</div>
					</div>
				</div>
			</aside>
			<aside className="flex justify-between">
				<div className="space-y-1.5 w-2/5 min-h-[140px] h-fit">
					<Title>Experience</Title>
					<HistoryCard history={experiences} className="relative" />
				</div>

				<div className="space-y-1.5 w-2/5 min-h-[140px] h-fit">
					<Title>Education</Title>
					<HistoryCard history={educations} className="relative" />
				</div>
			</aside>
		</Container>
	);
}
