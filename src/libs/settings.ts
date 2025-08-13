import { ToolOptions } from "hollow-api";
import { CalendarManager } from "./CalendarManager";
import { Accessor, Setter } from "solid-js";
import { CalendarOptions } from "@type/CalendarOptions";


export function showSettings(cardName: string, data: Accessor<CalendarOptions>, setData: Setter<CalendarOptions>, onSTChanged: () => void) {
	const settings: ToolOptions = {
		tool: "Calendar",
		card: cardName,
		options: [
			{
				type: "text",
				label: "Name",
				description: "Name of this calendar.",
				value: data().name,
				onChange: (s: string) => setData(prev => ({ ...prev, name: s }))
			},
			{
				type: "boolean",
				label: "Start Today",
				description: "Update the view to start from today automatically.",
				value: data().start_today,
				onChange: (v: boolean) => {
					setData(prev => ({ ...prev, start_today: v }))
					onSTChanged();
				}
			},
			{
				type: "number",
				label: "Threshold",
				description: "Number of tasks after which the day is considered busy.",
				value: data().threshold,
				onChange: (n: number) => setData(prev => ({ ...prev, threshold: n }))
			}
		],
		save: () => {
			CalendarManager.getSelf().setCalendarData(cardName, data());
		}
	}
	CalendarManager.getSelf().context?.app.emit("tool-settings", settings);
}
