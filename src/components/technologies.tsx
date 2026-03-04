import FigmaIcon from "../assets/icons/figma.svg?react";
import CSSIcon from "../assets/icons/languages/colored/css3.svg?react";
import GitIcon from "../assets/icons/languages/colored/git.svg?react";
import HtmlIcon from "../assets/icons/languages/colored/html5.svg?react";
import JSIcon from "../assets/icons/languages/colored/javascript.svg?react";
import NodeJSIcon from "../assets/icons/languages/colored/node.svg?react";
import PostmanIcon from "../assets/icons/languages/colored/postman.svg?react";
import PythonIcon from "../assets/icons/languages/colored/python.svg?react";
import ReactIcon from "../assets/icons/languages/colored/react.svg?react";
import TailwindIcon from "../assets/icons/languages/colored/tailwind.svg?react";
import VercelIcon from "../assets/icons/languages/colored/vercel.svg?react";
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
		techGroup: TechnologiesTypes.back,
		icon: NodeJSIcon,
	},
	{
		techGroup: TechnologiesTypes.back,
		icon: PythonIcon,
	},
	{
		techGroup: TechnologiesTypes.tools,
		icon: GithubIcon,
	},
	{
		techGroup: TechnologiesTypes.tools,
		icon: GitIcon,
	},
	{
		techGroup: TechnologiesTypes.tools,
		icon: PostmanIcon,
	},
	{
		techGroup: TechnologiesTypes.tools,
		icon: VercelIcon,
	},
	{
		techGroup: TechnologiesTypes.ui,
		icon: FigmaIcon,
	},
];

interface TechnologiesProps {
	tech: TechnologiesTypes;
}

export default function Technologies({ tech }: TechnologiesProps) {
	return (
		<div className="flex flex-col justify-center gap-4">
			<Text as="h3" variant="albert-lg" bold trace>
				{tech}
			</Text>
			<div className="space-x-2.5">
				{technologiesList.map((t, index) => {
					if (t.techGroup === tech) {
						return (
							<span
								className="inline-block bg-cinza-400 border border-cinza-100 p-2 rounded-5"
								key={index}
							>
								<Icon size="md" svg={t.icon} />
							</span>
						);
					}
				})}
			</div>
		</div>
	);
}
