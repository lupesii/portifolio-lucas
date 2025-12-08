import { useQuery } from "@tanstack/react-query";
import type { getHistoryResponde } from "../types/get-history";

export default function useEducation() {
	return useQuery({
		queryKey: ["education"],
		queryFn: async () => {
			const response = await fetch(
				`https://portfolios-api-production.up.railway.app/education`,
			);
			const result: getHistoryResponde[] = await response.json();
			return result;
		},
	});
}
