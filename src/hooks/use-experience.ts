import { useQuery } from "@tanstack/react-query";
import type { getHistoryResponde } from "../types/get-history";

export default function useExperience() {
	return useQuery({
		queryKey: ["experience"],
		queryFn: async () => {
			const response = await fetch(
				`https://portfolios-api-production.up.railway.app/experience`,
			);
			const result: getHistoryResponde[] = await response.json();
			return result;
		},
	});
}
