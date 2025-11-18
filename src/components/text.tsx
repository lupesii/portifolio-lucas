import { cva, type VariantProps } from "cva";
import React from "react";

const textVariants = cva("max-w-fit max-h-fit m-0 p-0 leading-none", {
	variants: {
		variant: {
			none: "",
			"anony-xsm": "text-[12px] font-normal font-mono",
			"anony-sm": "text-[15px] font-normal font-mono",
			"anony-sm-bold": "text-[15px] font-semibold font-mono",
			"anony-md-bold": "text-[28px] font-semibold font-mono",
			"anony-lg": "text-[32px] font-normal font-mono",
			"anony-xlg-bold": "text-[64px] font-semibold font-mono",
			"albert-sm": "text-[11px] font-normal font-sans",
			"albert-sm-bold": "text-[11px] font-semibold font-sans",
			"albert-md": "text-lg font-normal font-sans",
			"albert-md-bold": "text-lg font-semibold font-sans",
			"albert-lg-bold": "text-2xl font-semibold font-sans",
		},
		color: {
			white: "text-white",
			"cinza-100": "text-cinza-100",
		},
	},
	defaultVariants: {
		variant: "albert-md",
		color: "cinza-100",
	},
});

interface TextProps extends VariantProps<typeof textVariants> {
	as?: keyof React.JSX.IntrinsicElements;
	className?: string;
	children: React.ReactNode;
}

export default function Text({
	as = "span",
	className,
	children,
	variant,
	color,
	...props
}: TextProps) {
	return React.createElement(
		as,
		{
			className: textVariants({ variant, color, className }),
			...props,
		},
		children,
	);
}
