import ArrowIcon from "../assets/icons/arrow.svg?react";
import Circle from "./circle";

export default function HistoryIndex() {
	return (
		<div className="bg-cinza-400 w-2 rounded-full relative">
			<Circle
				color="cinza"
				size="xlg"
				className="absolute top-1/2 left-1/2 -translate-1/2"
			/>
			<Circle
				color="blue"
				size="md"
				className="absolute top-1/2 left-1/2 -translate-1/2"
			/>
			<div className="h-full flex flex-col justify-between items-center">
				<ArrowIcon className="w-5" />
				<ArrowIcon className="rotate-180 w-5" />
			</div>
		</div>
	);
}
