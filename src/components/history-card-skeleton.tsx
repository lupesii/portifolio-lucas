import Skeleton from "./skeleton";
import Text from "./text";

export default function HistoryCardSkeleton() {
	return (
		<div className="flex gap-3 h-40 w-full rounded-2xl overflow-hidden p-px group relative">
			<div className=" absolute rounded-[15px] inset-px z-10 bg-cinza-400/90"></div>
			<div className="pt-5 pl-5 pr-10 pb-10 w-full z-10">
				<div className="flex flex-col gap-1.5 mb-2.5">
					<Skeleton className="w-1/5 h-5 " />
					<Skeleton className="w-2/5 h-4 " />
				</div>
				<Skeleton className="w-4/5 h-4 " />
				<Skeleton className="w-15 h-3 absolute top-5 right-5" />
			</div>
			<Text className="absolute top-0 right-0 h-full aspect-square bg-linear-to-br from-transparent via-transparent to-azul pointer-events-none transition group-hover:opacity-100 opacity-50 duration-300 ease-in-out" />
			<Text className="absolute top-0 left-0 h-full aspect-square bg-linear-to-tl from-transparent via-transparent to-azul pointer-events-none transition group-hover:opacity-100 opacity-50 duration-300 ease-in-out" />
		</div>
	);
}
