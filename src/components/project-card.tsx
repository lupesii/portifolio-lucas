import { type MouseEvent, useRef } from "react";
import ExternalIcon from "../assets/icons/External-link.svg?react";
import GithubIcon from "../assets/icons/languages/github.svg?react";
import type { ProjectState } from "../types/project-state";
import Circle from "./circle";
import IconLink from "./icon-link";
import LanguageBadgeList from "./language-badge-list";
import ProjectStatus from "./project-status";
import Text from "./text";

export interface ProjectCardProps {
	titulo: string;
	descricao: string;
	webSiteURL: string;
	githubURL: string;
	status: ProjectState;
	languages: string[];
	imageURL: string;
}

export default function ProjectCard({
	titulo,
	descricao,
	webSiteURL,
	githubURL,
	status,
	languages,
	imageURL,
}: ProjectCardProps) {
	const cardRef = useRef<HTMLDivElement>(null);

	function movingCard(e: MouseEvent<HTMLDivElement>) {
		if (!cardRef.current) return;

		const card = cardRef.current.getBoundingClientRect();
		const x = e.clientX - card.left;
		const y = e.clientY - card.top;

		const centerX = card.width / 2;
		const centerY = card.height / 2;

		const deltaX = x - centerX;
		const deltaY = y - centerY;

		const rotateX = (deltaY / centerY) * -10;
		const rotateY = (deltaX / centerX) * 10;

		cardRef.current.style.transform = `
		perspective(600px)
		rotateX(${rotateX}deg)
		rotateY(${rotateY}deg)
	`;
	}

	function resetCard() {
		if (!cardRef.current) return;
		cardRef.current.style.transform =
			"perspective(600px) rotateX(0deg) rotateY(0deg)";
	}

	return (
		<article
			className={`
				bg-cinza-400 rounded-5 transition duration-50 transform-3d border border-azul
				flex lg:flex-col gap-5 lg:gap-0
				px-5 lg:px-7.5 py-5 lg:py-2.5 lg:max-w-[500px]`}
			onMouseMove={movingCard}
			onMouseLeave={resetCard}
			ref={cardRef}
		>
			<img
				src={imageURL}
				className={`
					hidden aspect-video object-cover w-full max-h-[300px] sm:block sm:max-w-[250px] lg:max-w-full
					md:max-h-[350px] md:w-full lg:mt-3	
					justify-self-start border border-white
				`}
			/>

			<div className="flex flex-col w-full h-full">
				<div className="flex flex-col gap-2.5 lg:mt-4.5 mb-6 overflow-hidden">
					<Text
						variant="anony-sm"
						bold
						color="white"
						className="inline-flex items-center sm:inline"
					>
						{titulo}
						<Circle
							className="sm:hidden ml-2"
							size="lg"
							color={status === "Completed" ? "green" : "red"}
						/>
					</Text>
					<Text
						as="p"
						variant="anony-xsm"
						bold
						color="muted"
						className="text-[15px] h-[90px] line-clamp-3"
					>
						{descricao}
					</Text>
				</div>
				<LanguageBadgeList languageList={languages} />
				<div className="flex items-center justify-between border-t border-t-white mt-5 lg:mt-auto pt-4">
					<div className="flex gap-4">
						<IconLink
							href={webSiteURL}
							target="_blank"
							icon={ExternalIcon}
							className="flex items-center gap-1.5 bg-azul p-3 rounded-5 w-max"
							hover={false}
						>
							Website
						</IconLink>
						<IconLink
							href={githubURL}
							target="_blank"
							icon={GithubIcon}
							className="flex items-center gap-1.5 bg-transparent border border-cinza-100 p-3 rounded-5 w-max"
							hover={false}
						>
							More info
						</IconLink>
					</div>

					<ProjectStatus status={status} />
				</div>
			</div>
		</article>
	);
}
