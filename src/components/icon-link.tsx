import { cva, cx, type VariantProps } from "cva";
import { type ComponentProps, createElement } from "react";
import Icon from "./icon";
import Text from "./text";

export const iconLinkVariants = cva("", {
	variants: {
		disabled: {
			true: "pointer-events-none opacity-50",
		},
	},
	defaultVariants: {
		disabled: false,
	},
});

const iconLinkShadowVariants = cva("", {
	variants: {
		hover: {
			true: "hidden group-hover:block absolute top-1/2 left-1/2 -translate-1/2 -z-1 w-1 h-1 shadow-[0px_0px_25px_10px_var(--color-azul)]",
		},
	},
	defaultVariants: {
		hover: true,
	},
});

interface IconLinkProps
	extends VariantProps<typeof iconLinkVariants>,
		ComponentProps<"a">,
		VariantProps<typeof iconLinkShadowVariants> {
	icon: ComponentProps<typeof Icon>["svg"];
}

export default function IconLink({
	icon,
	className,
	children,
	disabled,
	hover,
	...props
}: IconLinkProps) {
	return createElement(
		"a",
		{
			className: cx(
				iconLinkVariants({ disabled }),
				className,
				"group relative",
			),
			...props,
		},
		createElement(Icon, { svg: icon }),
		children ? (
			<Text variant="none" className="font-sans text-[16px]">
				{children}
			</Text>
		) : null,
		<div className={iconLinkShadowVariants({ hover })}></div>,
	);
}
