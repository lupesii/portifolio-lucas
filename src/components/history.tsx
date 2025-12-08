import type { UseQueryResult } from "@tanstack/react-query";
import { useState } from "react";
import ArrowIcon from "../assets/icons/arrow.svg?react";
import type { getHistoryResponde } from "../types/get-history";
import Circle from "./circle";
import HistoryCard from "./history-card";

export interface HistoryProps {
	hook: UseQueryResult<getHistoryResponde[], Error>;
}

export default function History({ hook }: HistoryProps) {
	const { data } = hook;
	const [index, setIndex] = useState(0);

	if (!data) return null;

	function handleIncreaseIndex() {
		setIndex((prev) => (prev < data!.length - 1 ? prev + 1 : prev));
	}

	function handleDecreaseIndex() {
		setIndex((prev) => (index > 0 ? prev - 1 : 0));
	}

	return (
		<div className="flex gap-4 h-max w-full relative">
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
					<ArrowIcon className="w-5" onClick={handleDecreaseIndex} />
					<ArrowIcon className="rotate-180 w-5" onClick={handleIncreaseIndex} />
				</div>
			</div>
			<HistoryCard history={data} index={index} />
		</div>
	);
}
