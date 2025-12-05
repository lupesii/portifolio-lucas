import { useQuery } from "@tanstack/react-query";
import type { Project } from "../types/project";

export function useProjects() {
	return useQuery({
		queryKey: ["projects"],
		queryFn: async () => {
			const response = await fetch(
				"https://portfolios-api-production.up.railway.app/projects",
			);
			const result: Project[] = await response.json();
			return result;
		},
	});
}
