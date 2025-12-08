import type { Category } from "./category";

export interface getHistoryResponde {
	id: string;
	name: string;
	subName: string;
	description: string;
	period: string;
	certificate: string;
	category: Category;
}
