import { cva, type VariantProps } from "cva";
import type { ComponentProps } from "react";

export const skeletonVariants = cva(
	"animate-pulse bg-cinza-200 pointer-events-none",
	{
		variants: {
			rounded: {
				sm: "rounded-sm",
				lg: "rounded-lg",
				full: "rounded-full",
			},
		},
		defaultVariants: {
			rounded: "lg",
		},
	},
);

interface SkeletonProps
	extends VariantProps<typeof skeletonVariants>,
		ComponentProps<"div"> {}

export default function Skeleton({
	rounded,
	className,
	...props
}: SkeletonProps) {
	return (
		<div className={skeletonVariants({ rounded, className })} {...props}></div>
	);
}
