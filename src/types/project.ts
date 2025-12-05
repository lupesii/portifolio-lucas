import type { ProjectState } from "./project-state";

export interface Project {
	id: string;
	title: string;
	description: string;
	webSiteURL: string;
	githubURL: string;
	status: ProjectState;
	languages: string[];
}
