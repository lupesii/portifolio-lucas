import { cx } from "cva";
import type { ComponentProps } from "react";
import Circle from "./circle";
import Text from "./text";

interface TitleProps extends ComponentProps<"h1"> {}

export default function Title({ className, children }: TitleProps) {
	return (
		<div>
			<Text
				as="h1"
				variant="anony-xlg-bold"
				className={cx("inline", className)}
			>
				{children}
			</Text>
			<Circle color="blue" size="lg" />
		</div>
	);
}
