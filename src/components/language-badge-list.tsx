import CSSIcon from "../assets/icons/languages/colored/css3.svg?react";
import HtmlIcon from "../assets/icons/languages/colored/html5.svg?react";
import NodeIcon from "../assets/icons/languages/colored/node.svg?react";
import ReactIcon from "../assets/icons/languages/colored/react.svg?react";
import TailwindIcon from "../assets/icons/languages/colored/tailwind.svg?react";
import LanguageBadge from "./language-badge";

export const LanguageBadgeInfo = [
	{
		nome: "Node.js",
		svg: NodeIcon,
	},
	{
		nome: "CSS3",
		svg: CSSIcon,
	},
	{
		nome: "Html5",
		svg: HtmlIcon,
	},
	{
		nome: "Tailwind",
		svg: TailwindIcon,
	},
	{
		nome: "ReactJS",
		svg: ReactIcon,
	},
];

interface LanguageBadgeListProps {
	languageList: string[];
	className?: string;
}

export default function LanguageBadgeList({
	languageList,
	className,
}: LanguageBadgeListProps) {
	const svgComponents = languageList.map((language) => {
		return LanguageBadgeInfo.find((object) =>
			object.nome === language ? object.svg : null,
		);
	});

	return (
		<div className="flex items-center flex-wrap gap-3.75 lg:mb-8">
			{svgComponents.map((badge, index) =>
				badge ? (
					<LanguageBadge key={index} icon={badge.svg} className={className}>
						{badge.nome}
					</LanguageBadge>
				) : null,
			)}
		</div>
	);
}
