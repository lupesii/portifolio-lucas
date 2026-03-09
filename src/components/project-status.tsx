import { cva, type VariantProps } from "cva";
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
			status: "Completed",
		},
	},
);

interface ProjectStatusProps
	extends VariantProps<typeof projectStatusVariants> {
	className?: string;
}

export default function ProjectStatus({
	status,
	className,
}: ProjectStatusProps) {
	const content = status === "Completed" ? "Completed" : "Incompleted";
	return (
		<>
		<Text
			variant="none"
			className={projectStatusVariants({ status, className })}
		>
			{content}
		</Text>
		</>
	);
}
