import type { ComponentProps } from "react";
import Circle from "./circle";
import Text from "./text";

interface TitleProps extends ComponentProps<"h1"> {}

export default function Title({ className, children }: TitleProps) {
	return (
		<div>
			<Text variant="anony-xlg-bold" className={className}>
				{children}
			</Text>
			<Circle color="blue" size="lg" />
		</div>
	);
}
