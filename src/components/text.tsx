import { cva, type VariantProps } from "cva";
import React, { type ComponentProps } from "react";

const textVariants = cva("max-w-fit max-h-fit m-0 p-0 leading-none", {
	variants: {
		variant: {
			none: "",
			"anony-lg":
				"text-[50px] sm:text-[55px] md:text-[60px] lg:text-[70px] font-mono",
			"anony-md": "text-2xl font-normal font-mono",
			"anony-sm": "text-[15px] md:text-[20px] font-normal font-mono",
			"anony-xsm": "text-[12px] md:text-[15px]  font-normal font-mono",
			"albert-lg": "text-[22px] font-normal font-sans",
			"albert-md": "text-[16px] font-normal font-sans",
			"albert-sm": "text-[11px] font-normal font-sans",
		},
		color: {
			white: "text-white",
			"cinza-100": "text-cinza-100",
			muted: "text-white/50",
		},
		bold: {
			true: "font-semibold",
			false: "",
		},
		trace: {
			true: "border-l border-l-azul pl-3.5",
			false: "",
		},
	},
	defaultVariants: {
		variant: "albert-md",
		bold: false,
		color: "cinza-100",
		trace: false,
	},
});

interface TextProps
	extends VariantProps<typeof textVariants>,
		Omit<ComponentProps<"span">, "color"> {
	as?: keyof React.JSX.IntrinsicElements;
}

export default function Text({
	as = "span",
	className,
	children,
	variant,
	bold,
	color,
	trace,
	...props
}: TextProps) {
	return React.createElement(
		as,
		{
			className: textVariants({ variant, bold, color, trace, className }),
			...props,
		},
		children,
	);
}
