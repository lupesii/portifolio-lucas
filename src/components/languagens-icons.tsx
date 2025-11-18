import CssIcon from "../assets/icons/css3.svg?react";
import HtmlIcon from "../assets/icons/html5.svg?react";
import JsIcon from "../assets/icons/js.svg?react";
import NextIcon from "../assets/icons/next.svg?react";
import NodeIcon from "../assets/icons/nodejs-icon.svg?react";
import ReactIcon from "../assets/icons/react.svg?react";
import TailIcon from "../assets/icons/tailwind.svg?react";
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
