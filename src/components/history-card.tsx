import { type ComponentProps } from "react";
import ArrowIcon from "../assets/icons/arrow.svg?react";
import type { getHistoryResponde } from "../types/get-history";
import Icon from "./icon";
import Text from "./text";

interface HistoryCardProps extends ComponentProps<"aside"> {
	history: getHistoryResponde[];
	index: number;
}

export default function HistoryCard({ history, index }: HistoryCardProps) {
	return (
		<div className="flex gap-3 h-full w-full rounded-2xl overflow-hidden p-px group relative">
			<div className=" absolute rounded-[15px] inset-px z-10 bg-cinza-400/90"></div>
			<div className="pt-5 pl-5 pr-10 pb-10 w-full z-10">
				<div className="flex flex-col gap-1.5 mb-2.5">
					<a
						href={history[index].certificate}
						target="_blank"
						className="text-azul text-[22px] font-semibold font-sans inline-flex items-center gap-0.5"
					>
						{history[index].name}
						<Icon svg={ArrowIcon} className="rotate-45" />
					</a>
					<Text variant="albert-md" color="white">
						{history[index].subName}
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
					{history[index].period}
				</Text>
			</div>
			<Text className="absolute top-0 right-0 h-full aspect-square bg-linear-to-br from-transparent via-transparent to-azul pointer-events-none transition group-hover:opacity-100 opacity-50 duration-300 ease-in-out" />
			<Text className="absolute top-0 left-0 h-full aspect-square bg-linear-to-tl from-transparent via-transparent to-azul pointer-events-none transition group-hover:opacity-100 opacity-50 duration-300 ease-in-out" />
		</div>
	);
}
