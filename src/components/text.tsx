import { cva, type VariantProps } from "cva";
import React, { type ComponentProps, type ElementType } from "react";

const textVariants = cva("max-w-fit max-h-fit m-0 p-0 leading-none", {
	variants: {
		variant: {
			none: "",
			"anony-xsm": "text-[12px] font-normal font-mono",
			"anony-sm": "text-[15px] font-normal font-mono",
			"anony-sm-bold": "text-[15px] font-semibold font-mono",
			"anony-xl-bold": "text-xl font-semibold font-mono",
			"anony-md-bold": "text-2xl font-semibold font-mono",
			"anony-lg": "text-[26px] font-normal font-mono",
			"anony-lg-bold": "text-[26px] font-semibold font-mono",
			"anony-xlg-bold": "text-[50px] font-semibold font-mono",
			"albert-sm": "text-[11px] font-normal font-sans",
			"albert-sm-bold": "text-[11px] font-semibold font-sans",
			"albert-md": "text-[16px] font-normal font-sans",
			"albert-md-bold": "text-lg font-semibold font-sans",
			"albert-lg": "text-[22px] font-normal font-sans",
			"albert-lg-bold": "text-[22px] font-semibold font-sans",
			"albert-italic": "text-[26px] font-semibold italic font-sans",
		},
		color: {
			white: "text-white",
			"cinza-100": "text-cinza-100",
			muted: "text-white/50",
		},
		trace: {
			true: "border-l border-l-azul pl-3.5",
			false: "",
		},
	},
	defaultVariants: {
		variant: "albert-md",
		color: "cinza-100",
		trace: false,
	},
});

type TextProps<T extends ElementType = "span"> = VariantProps<
	typeof textVariants
> &
	ComponentProps<T> & {
		as?: T;
	};

export default function Text<T extends ElementType = ElementType>({
	as,
	className,
	children,
	variant,
	color,
	trace,
	...props
}: TextProps<T>) {
	const Tag = (as ?? "span") as ElementType;
	return React.createElement(
		Tag,
		{
			className: textVariants({ variant, color, trace, className }),
			...props,
		},
		children,
	);
}
