import { cva, type VariantProps } from "cva";
import { createElement } from "react";

export const containerVariants = cva("mx-auto flex", {
	variants: {
		size: {
			md: "min-h-dvh max-w-[90w] lg:max-w-[1400px] px-[2em]",
		},
	},
	defaultVariants: {
		size: "md",
	},
});

interface ContainerProps
	extends VariantProps<typeof containerVariants>,
		React.ComponentProps<"div"> {
	as?: keyof React.JSX.IntrinsicElements;
}

export default function Container({
	as = "div",
	className,
	children,
	...props
}: ContainerProps) {
	return createElement(
		as,
		{
			className: containerVariants({ size: "md", className }),
			...props,
		},
		children,
	);
}
