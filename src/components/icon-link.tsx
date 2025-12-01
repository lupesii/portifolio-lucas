import { cva, type VariantProps } from "cva";
import Icon from "./icon";

export const IconLinkVariants = cva("", {
	variants: {
		disabled: {
			true: "pointer-events-none",
		},
	},
	defaultVariants: {
		disabled: false,
	},
});

interface IconLinkProps
	extends Omit<React.ComponentProps<"a">, "disabled">,
		VariantProps<typeof IconLinkVariants> {
	icon: React.ComponentProps<typeof Icon>["svg"];
}

export default function IconLink({
	icon,
	className,
	disabled,
	target = "_blank",
	...props
}: IconLinkProps) {
	return (
		<a
			target={target}
			rel="noopener noreferrer"
			className={IconLinkVariants({ disabled, className })}
			{...props}
		>
			<Icon svg={icon} />
		</a>
	);
}
