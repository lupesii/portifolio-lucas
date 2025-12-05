import { cva, type VariantProps } from "cva";
import { createElement } from "react";

export const containerVariants = cva("mx-auto flex", {
	variants: {
		size: {
			md: "min-h-dvh max-w-[90vw] lg:max-w-[70vw]",
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
