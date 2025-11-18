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
	url: string;
	icon: React.ComponentProps<typeof Icon>["svg"];
	aria_label: string;
}

export default function IconLink({
	icon,
	url,
	className,
	disabled,
	target = "_blank",
	aria_label,
	...props
}: IconLinkProps) {
	return (
		<a
			href={url}
			target={target}
			rel="noopener noreferrer"
			aria-label={aria_label}
			className={IconLinkVariants({ disabled, className })}
			{...props}
		>
			<Icon svg={icon} />
		</a>
	);
}
