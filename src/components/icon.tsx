import { cva, type VariantProps } from "cva";

export const iconVariants = cva("", {
	variants: {
		size: {
			none: "",
			sm: "w-5 h-5",
		},
		animate: {
			true: "animate-spin",
		},
	},
	defaultVariants: {
		size: "sm",
		animate: false,
	},
});

interface IconProps
	extends React.ComponentProps<"svg">,
		VariantProps<typeof iconVariants> {
	svg: React.FC<React.ComponentProps<"svg">>;
}

export default function Icon({
	svg: SvgComponent,
	className,
	animate,
	size,
	...props
}: IconProps) {
	return (
		<SvgComponent
			className={iconVariants({ animate, size, className })}
			{...props}
		></SvgComponent>
	);
}
