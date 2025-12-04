import JSIcon from "../assets/icons/languages/colored/javascript.svg?react";
import CssIcon from "../assets/icons/languages/css3.svg?react";
import HtmlIcon from "../assets/icons/languages/html5.svg?react";
import JsIcon from "../assets/icons/languages/javascript.svg?react";
import NextIcon from "../assets/icons/languages/next.svg?react";
import NodeIcon from "../assets/icons/languages/node.svg?react";
import ReactIcon from "../assets/icons/languages/react.svg?react";
import TailIcon from "../assets/icons/languages/tailwind.svg?react";
import Icon from "./icon";
import Text from "./text";

interface LanguageIconsProps {
	card?: boolean;
	title?: string;
}

export default function LanguageIcons({ card, title }: LanguageIconsProps) {
	return card ? (
		<div className="flex flex-col justify-center gap-4">
			<Text as="h3" variant="anony-md-bold" trace>
				{title}
			</Text>
			<div className="space-x-2.5">
				<span className="inline-block bg-cinza-400 border border-cinza-100 p-2 rounded-[5px]">
					<Icon size="md" svg={JSIcon} />
				</span>
				<span className="inline-block bg-cinza-400 border border-cinza-100 p-2 rounded-[5px]">
					<Icon size="md" svg={JSIcon} />
				</span>
				<span className="inline-block bg-cinza-400 border border-cinza-100 p-2 rounded-[5px]">
					<Icon size="md" svg={JSIcon} />
				</span>
				<span className="inline-block bg-cinza-400 border border-cinza-100 p-2 rounded-[5px]">
					<Icon size="md" svg={JSIcon} />
				</span>
				<span className="inline-block bg-cinza-400 border border-cinza-100 p-2 rounded-[5px]">
					<Icon size="md" svg={JSIcon} />
				</span>
			</div>
		</div>
	) : (
		<div className="flex justify-center items-center gap-3.75 mb-7">
			<Icon svg={HtmlIcon} />
			<Icon svg={CssIcon} />
			<Icon svg={JsIcon} />
			<Icon svg={ReactIcon} />
			<Icon svg={NodeIcon} />
			<Icon svg={NextIcon} />
			<Icon svg={TailIcon} />
		</div>
	);
}
