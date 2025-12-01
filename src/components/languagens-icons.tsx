import CssIcon from "../assets/icons/languages/css3.svg?react";
import HtmlIcon from "../assets/icons/languages/html5.svg?react";
import JsIcon from "../assets/icons/languages/javascript.svg?react";
import NextIcon from "../assets/icons/languages/next.svg?react";
import NodeIcon from "../assets/icons/languages/node.svg?react";
import ReactIcon from "../assets/icons/languages/react.svg?react";
import TailIcon from "../assets/icons/languages/tailwind.svg?react";
import Icon from "./icon";

export default function LanguageIcons() {
	return (
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
