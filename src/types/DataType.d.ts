import { DayType } from "./DayType";

export type DataType = {
	name: string;
	selected_date: string;
	start_today: boolean;
	threshold: number;
	days: DayType[]
};
