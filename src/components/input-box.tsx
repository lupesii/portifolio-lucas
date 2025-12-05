import { cva, cx, type VariantProps } from "cva";
import { type ComponentProps, createElement, type JSX } from "react";
import Text from "./text";

export const inputBoxVariants = cva(
	"bg-cinza-300 border border-cinza-100 py-4.5 pl-3 rounded-[10px] text-white font-sans",
);

interface InputBoxProps
	extends ComponentProps<"input">,
		VariantProps<typeof inputBoxVariants> {
	as?: keyof JSX.IntrinsicElements;
}

export default function InputBox({
	as = "input",
	className,
	id,
	...props
}: InputBoxProps) {
	return (
		<div
			className={cx(
				"flex flex-col justify-center gap-1.25 min-w-60",
				className,
			)}
		>
			<Text
				as="label"
				for={id}
				variant="none"
				className="font-sans text-[20px] font-medium"
			>
				{id}
			</Text>
			{createElement(as, {
				id,
				className: cx(
					inputBoxVariants({}),
					as == "textarea" ? "resize-none h-45" : "",
				),
				...props,
			})}
		</div>
	);
}
