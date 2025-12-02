import { cva, type VariantProps } from "cva";
import { createElement } from "react";

export const containerVariants = cva("mx-auto", 
	{
	variants: {
		size: {
			md: "md:h-screen max-w-[75vw]",
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
