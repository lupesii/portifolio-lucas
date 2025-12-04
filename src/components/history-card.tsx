import { cx } from "cva";
import { type ComponentProps, useState } from "react";
import ArrowIcon from "../assets/icons/arrow.svg?react";
import type { History } from "../types/history";
import Circle from "./circle";
import Icon from "./icon";
import Text from "./text";

interface HistoryCardProps extends ComponentProps<"aside"> {
	history: History[];
}

export default function HistoryCard({ className, history }: HistoryCardProps) {
	const [index, setIndex] = useState(0);

	function handleIncreaseIndex() {
		setIndex((prev) => prev + 1);
	}

	function handleDecreaseIndex() {
		setIndex((prev) => (index > 0 ? prev - 1 : 0));
	}

	return (
		<div className="flex gap-3 h-full">
			<div className="flex w-2 flex-col items-center justify-between">
				<Icon svg={ArrowIcon} onClick={handleDecreaseIndex} />
				<div className="relative flex items-center justify-center">
					<Circle color="cinza" size="xlg" className="absolute" />
					<Circle
						color="blue"
						size="md"
						className="absolute top-1/2 left-1/2 -translate-1/2"
					/>
				</div>
				<Icon
					svg={ArrowIcon}
					className="rotate-180"
					onClick={handleIncreaseIndex}
				/>
			</div>
			<div
				className={cx(
					"bg-cinza-400 pt-5 pl-5 pr-10 pb-10 border border-azul rounded-[10px] h-fit",
					className,
				)}
			>
				<div className="flex flex-col gap-1.5 mb-2.5">
					<Text variant="albert-lg-bold" color="none" className="text-azul">
						{history[index].name}
					</Text>
					<Text variant="albert-md" color="white">
						{history[index].roll}
					</Text>
				</div>
				<Text variant="albert-md" color="white">
					{history[index].description}
				</Text>
				<Text
					variant="albert-sm"
					color="muted"
					className="absolute top-5 right-5"
				>
					{history[index].date}
				</Text>
			</div>
		</div>
	);
}
