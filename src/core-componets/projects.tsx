import Container from "../components/container";
import ProjectCard from "../components/project-card";
import ProjectCardSkeleton from "../components/project-card-skeleton";
import Text from "../components/text";
import Title from "../components/title";
import { useProjects } from "../hooks/useProjects";
import { ProjectState } from "../types/project-state";

export default function Projects() {
	const { data, isLoading } = useProjects();
	return (
		<Container
			as="section"
			className="flex flex-col justify-center gap-7.5 h-auto"
		>
			<div className="space-y-5">
				<Title>Projects</Title>
				<Text
					variant="none"
					color="muted"
					className="font-mono font-semibold text-[20px] md:text-[22px]"
				>
					Explore my mini-projects showcasing my skills in web development and
					design.
				</Text>
			</div>
			<div className="grid xlg_grid-cols-3 lg:grid-cols-2 grid-cols-1 justify-center content-center gap-7.5">
				{isLoading && (
					<>
						<ProjectCardSkeleton />
						<ProjectCardSkeleton />
					</>
				)}

				{!isLoading &&
					data?.map((projeto) => (
						<>
							<ProjectCard
								key={projeto.id}
								titulo={projeto.title}
								descricao={projeto.description}
								webSiteURL={projeto.webSiteURL}
								githubURL={projeto.githubURL}
								status={
									projeto.status
										? ProjectState.Completed
										: ProjectState.Incompleted
								}
								languages={projeto.languages}
								imageURL={projeto.imageURL}
							/>
						</>
					))}
			</div>
		</Container>
	);
}
