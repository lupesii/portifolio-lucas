import { cx } from "cva";
import type { ComponentProps } from "react";
import Icon from "./icon";
import Text from "./text";

interface LanguageBadgeProps {
	icon: ComponentProps<typeof Icon>["svg"];
	children: string;
	className?: string;
}

export default function LanguageBadge({
	icon,
	className,
	children,
}: LanguageBadgeProps) {
	return (
		<div
			className={cx(
				"inline-flex items-center gap-1.5 bg-cinza-400 border border-cinza-100 rounded-[10px] px-2.5 py-3",
				className,
			)}
		>
			<Icon svg={icon} />
			<Text
				variant="none"
				className="font-sans text-[16px] font-semibold"
				color="muted"
			>
				{children}
			</Text>
		</div>
	);
}
