import { cva, cx, type VariantProps } from "cva";
import Skeleton from "./skeleton";
import Text from "./text";

export const projectStatusVariants = cva(
	"hidden sm:block font-sans font-semibold py-1 px-3 rounded-2xl text-[16px]",
	{
		variants: {
			status: {
				Completed: "bg-verde",
				Incompleted: "bg-vermelho",
			},
		},
		defaultVariants: {
			status: "Incompleted",
		},
	},
);

interface ProjectStatusProps
	extends VariantProps<typeof projectStatusVariants> {
	className?: string;
	loading?: boolean;
}

export default function ProjectStatus({
	status,
	className,
	loading,
}: ProjectStatusProps) {
	if (loading) {
		return (
			<Skeleton
				className={cx([
					projectStatusVariants({ status, className }),
					`w-1/5 h-5`,
				])}
				rounded="full"
			/>
		);
	}

	return (
		<>
			<Text
				variant="none"
				className={projectStatusVariants({ status, className })}
			>
				{status}
			</Text>
		</>
	);
}
