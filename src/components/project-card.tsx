import { type MouseEvent, useRef } from "react";
import ExternalIcon from "../assets/icons/External-link.svg?react";
import GithubIcon from "../assets/icons/languages/github.svg?react";
import type { ProjectState } from "../types/project-state";
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
				flex lg:flex-col lg:justify-center gap-5 lg:gap-0
				px-5 lg:px-7.5 py-5 lg:py-2.5 lg:max-w-[500px]`}
			onMouseMove={movingCard}
			onMouseLeave={resetCard}
			ref={cardRef}
		>
			<img
				src={imageURL}
				className="hidden sm:block sm:w-[200px] md:w-[300px] lg:w-auto lg:mt-3 aspect-auto"
			/>

			<div className="w-full">
				<div className="flex flex-col gap-2.5 lg:mt-4.5 mb-6 overflow-hidden">
					<Text variant="anony-md-bold" color="white">
						{titulo}
					</Text>
					<Text
						as="p"
						variant="anony-xl-bold"
						color="muted"
						className="h-[90px] line-clamp-3"
					>
						{descricao}
					</Text>
				</div>
				<LanguageBadgeList languageList={languages} className="mb-6" />
				<div className="flex items-center justify-between border-t border-t-white lg:mt-[88px] pt-4">
					<IconLink
						href={webSiteURL}
						target="_blank"
						icon={ExternalIcon}
						className="flex items-center gap-1.5 bg-azul p-3 rounded-5 w-max"
					>
						Website
					</IconLink>

					<IconLink
						href={githubURL}
						target="_blank"
						icon={GithubIcon}
						className="flex items-center gap-1.5 bg-transparent border border-cinza-100 p-3 rounded-5 w-max"
					>
						More info
					</IconLink>

					<ProjectStatus status={status} />
				</div>
			</div>
		</article>
	);
}
