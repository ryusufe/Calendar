import { DayType } from "./DayType";

export type DataType = {
	name: string;
	selectedDate: string;
	start_today: boolean;
	threshold: number;
	days: DayType[]
};
