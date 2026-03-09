import { useQuery } from "@tanstack/react-query";
import type { getHistoryResponde } from "../types/get-history";

export default function useEducation() {
	return useQuery({
		queryKey: ["education"],
		queryFn: async () => {
			const response = await fetch(
				`https://api-projects-n962.onrender.com/education`,
			);
			const result: getHistoryResponde[] = await response.json();
			return result;
		},
	});
}
