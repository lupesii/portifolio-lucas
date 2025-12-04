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
}

export default function ProjectCard({
	titulo,
	descricao,
	webSiteURL,
	githubURL,
	status,
	languages,
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
			className="inline-block bg-cinza-400 px-7.5 py-2.5 rounded-[10px] max-w-[460px] transition duration-50 transform-3d border border-azul"
			onMouseMove={movingCard}
			onMouseLeave={resetCard}
			ref={cardRef}
		>
			<img src="/Rectangle 8.png" className="mt-3" />

			<div className="flex flex-col gap-2.5 mt-4.5 mb-6">
				<Text variant="anony-2xl-bold" color="white">
					{titulo}
				</Text>
				<Text variant="anony-xl-bold" color="muted">
					{descricao}
				</Text>
			</div>

			<LanguageBadgeList languageList={languages} />

			<div className="flex items-center justify-between border-t border-t-white mt-[88px] pt-4">
				<IconLink
					href={webSiteURL}
					icon={ExternalIcon}
					className="flex items-center gap-1.5 bg-azul p-3 rounded-[10px] w-fit"
				>
					Website
				</IconLink>

				<IconLink
					href={githubURL}
					icon={GithubIcon}
					className="flex items-center gap-1.5 bg-transparent border border-cinza-100 p-3 rounded-[10px] w-fit"
				>
					More info
				</IconLink>

				<ProjectStatus status={status} />
			</div>
		</article>
	);
}
