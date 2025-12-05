import CSSIcon from "../assets/icons/languages/colored/css3.svg?react";
import HtmlIcon from "../assets/icons/languages/colored/html5.svg?react";
import JSIcon from "../assets/icons/languages/colored/javascript.svg?react";
import ReactIcon from "../assets/icons/languages/colored/react.svg?react";
import TailwindIcon from "../assets/icons/languages/colored/tailwind.svg?react";
import GithubIcon from "../assets/icons/languages/github.svg?react";
import { TechnologiesTypes } from "../types/technologies";
import Icon from "./icon";
import Text from "./text";

const technologiesList = [
	{
		techGroup: TechnologiesTypes.front,
		icon: HtmlIcon,
	},
	{
		techGroup: TechnologiesTypes.front,
		icon: CSSIcon,
	},
	{
		techGroup: TechnologiesTypes.front,
		icon: JSIcon,
	},
	{
		techGroup: TechnologiesTypes.front,
		icon: ReactIcon,
	},
	{
		techGroup: TechnologiesTypes.front,
		icon: TailwindIcon,
	},
	{
		techGroup: TechnologiesTypes.tools,
		icon: GithubIcon,
	},
	{
		techGroup: TechnologiesTypes.back,
		icon: JSIcon,
	},
	{
		techGroup: TechnologiesTypes.back,
		icon: JSIcon,
	},
	{
		techGroup: TechnologiesTypes.back,
		icon: JSIcon,
	},
	{
		techGroup: TechnologiesTypes.back,
		icon: JSIcon,
	},

	// --- TOOLS (4 itens) ---
	{
		techGroup: TechnologiesTypes.tools,
		icon: GithubIcon,
	},
	{
		techGroup: TechnologiesTypes.tools,
		icon: GithubIcon,
	},
	{
		techGroup: TechnologiesTypes.tools,
		icon: GithubIcon,
	},
	{
		techGroup: TechnologiesTypes.tools,
		icon: GithubIcon,
	},

	// --- UI (3 itens) ---
	{
		techGroup: TechnologiesTypes.ui,
		icon: TailwindIcon,
	},
	{
		techGroup: TechnologiesTypes.ui,
		icon: TailwindIcon,
	},
	{
		techGroup: TechnologiesTypes.ui,
		icon: TailwindIcon,
	},
];

interface TechnologiesProps {
	tech: TechnologiesTypes;
}

export default function Technologies({ tech }: TechnologiesProps) {
	return (
		<div className="flex flex-col justify-center gap-4">
			<Text as="h3" variant="anony-md-bold" trace>
				{tech}
			</Text>
			<div className="space-x-2.5">
				{technologiesList.map((t) => {
					if (t.techGroup === tech) {
						return (
							<span className="inline-block bg-cinza-400 border border-cinza-100 p-2 rounded-[5px]">
								<Icon size="md" svg={t.icon} />
							</span>
						);
					}
				})}
			</div>
		</div>
	);
}
