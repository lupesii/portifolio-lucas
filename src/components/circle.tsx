import { cva, type VariantProps } from "cva";

export const circleVariants = cva("rounded-full inline-block", {
	variants: {
		color: {
			none: "",
			green: "bg-verde",
			blue: "bg-azul",
		},
		size: {
			sm: "w-1.25 h-1.25",
			lg: "w-2.5 h-2.5",
		},
	},
	defaultVariants: {
		color: "green",
		size: "sm",
	},
});

interface CircleProps extends VariantProps<typeof circleVariants> {
	className?: string;
}

export default function Circle({ color, size, className }: CircleProps) {
	return <div className={circleVariants({ color, size, className })}></div>;
}
