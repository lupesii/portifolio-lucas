import { cva, type VariantProps } from "cva";
import React from "react";

const textVariants = cva("", {
	variants: {
		variant: {
			"anony-xsm": "text-[12px] font-normal",
			"anony-sm": "text-[15px] font-normal",
			"anony-sm-bold": "text-[15px] font-semibold",
			"anony-md-bold": "text-[28px] font-semibold",
			"anony-lg": "text-[32px] font-normal",
			"anony-xlg-bold": "text-[64px] font-semibold",
			"albert-sm": "text-[11px] font-normal",
			"albert-md": "text-lg font-normal",
			"albert-lg-bold": "text-2xl font-semibold",
		},
		color: {
			white: "text-white",
		},
	},
	defaultVariants: {
		variant: "albert-md",
		color: "white",
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
