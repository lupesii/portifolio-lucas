import Container from "../components/container";
import ProjectCard from "../components/project-card";
import Text from "../components/text";
import Title from "../components/title";
import { ProjectState } from "../types/project-state";

export default function Projects() {
	return (
		<Container
			as="section"
			className="max-w-[75vw] flex flex-col justify-center gap-7.5 h-auto"
		>
			<div className="space-y-5">
				<Title>Projects</Title>
				<Text
					variant="none"
					color="muted"
					className="font-mono font-semibold text-[22px]"
				>
					Explore my mini-projects showcasing my skills in web development and
					design.
				</Text>
			</div>
			<div className="flex gap-7.5 flex-wrap">
				<ProjectCard
					titulo="Project Template"
					descricao="Description Template"
					webSiteURL="https://www.google.com"
					githubURL="https://www.github.com"
					status={ProjectState.Incompleted}
					languages={["Html5", "Javascript", "CSS3", "ReactJS", "Tailwind"]}
				/>
				<ProjectCard
					titulo="Project Template"
					descricao="Description Template"
					webSiteURL="https://www.google.com"
					githubURL="https://www.github.com"
					status={ProjectState.Completed}
					languages={["Html5", "Javascript", "CSS3", "ReactJS", "Tailwind"]}
				/>
				<ProjectCard
					titulo="Project Template"
					descricao="Description Template"
					webSiteURL="https://www.google.com"
					githubURL="https://www.github.com"
					status={ProjectState.Completed}
					languages={["Html5", "Javascript", "CSS3", "ReactJS", "Tailwind"]}
				/>
			</div>
		</Container>
	);
}
