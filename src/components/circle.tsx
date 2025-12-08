import { cva, type VariantProps } from "cva";
import type { ComponentProps } from "react";

export const circleVariants = cva("rounded-full inline-block", {
	variants: {
		color: {
			none: "",
			green: "bg-verde",
			blue: "bg-azul",
			cinza: "bg-cinza-400",
		},
		size: {
			sm: "w-1.25 h-1.25",
			lg: "w-2.5 h-2.5",
			md: "w-2 h-2",
			xlg: "w-4 h-4",
		},
	},
	defaultVariants: {
		color: "green",
		size: "sm",
	},
});

interface CircleProps
	extends Omit<ComponentProps<"div">, "size" | "color">,
		VariantProps<typeof circleVariants> {
	className?: string;
}

export default function Circle({
	color,
	size,
	className,
	children,
	...props
}: CircleProps) {
	return (
		<div
			{...props}
			className={circleVariants({ color, size, className })}
		></div>
	);
}
