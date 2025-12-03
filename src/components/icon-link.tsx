import { cva, cx, type VariantProps } from "cva";
import { type ComponentProps, createElement, type ElementType } from "react";
import Icon from "./icon";
import Text from "./text";

export const iconLinkVariants = cva("", {
	variants: {
		disabled: {
			true: "pointer-events-none",
		},
	},
	defaultVariants: {
		disabled: false,
	},
});

type IconLinkProps<T extends ElementType = "a"> = VariantProps<
	typeof iconLinkVariants
> &
	Omit<ComponentProps<T>, "disabled"> & {
		as?: T;
		icon: ComponentProps<typeof Icon>["svg"];
	};

export default function IconLink<T extends ElementType = ElementType>({
	as,
	icon,
	className,
	children,
	disabled,
	...props
}: IconLinkProps<T>) {
	const Tag = (as ?? "a") as ElementType;
	return createElement(
		Tag,
		{
			className: cx(iconLinkVariants({ disabled }), className),
			...props,
		},
		createElement(Icon, { svg: icon }),
		children ? (
			<Text variant="none" className="font-sans text-[16px]">
				{children}
			</Text>
		) : null,
	);
}
