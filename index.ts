import { IPlugin, ICard, DataBase, HollowEvent } from "hollow-api";
import { createRoot } from "solid-js";
import { render } from "solid-js/web";
import App from "./src/App";
import { DataType } from "./src/types/DataType";
import { DayType } from "./src/types/DayType";
import { CalendarManager } from "./src/libs/CalendarManager";
import { formatDateToInput } from "./src/libs/date";

const calendar: DayType[] = [
	{
		date: formatDateToInput(new Date()),
		tasks: [
			{
				id: "task-001",
				title: "Write documentation for Hollow API",
				completed: false
			},
			{
				id: "task-002",
				title: "Fix calendar date rendering bug",
				completed: true
			},
			{
				id: "task-003",
				title: "Design new plugin manager UI",
				completed: false
			},
			{
				id: "task-004",
				title: "Implement dark/light theme toggle",
				completed: true
			}
		]
	}
]

export default class Main implements IPlugin {
	private roots: Map<string, () => void> = new Map();
	private db: DataBase;

	constructor(db: DataBase) {
		this.db = db;
	}

	public async onCreate(cardName: string): Promise<boolean> {
		const initialData: DataType = {
			name: "Example",
			start_today: true,
			selectedDate: formatDateToInput(new Date()),
			days: calendar
		};
		const request = await this.db.putData(cardName, initialData);
		return request;
	}

	public async onDelete(cardName: string): Promise<boolean> {
		const request = await this.db.deleteData(cardName);
		return request;
	}

	public async onLoad(card: ICard, app: HollowEvent): Promise<boolean> {
		const data = await this.db.getData<DataType>(card.name);
		if (!data) return false;
		CalendarManager.getSelf().addCalendar({ card: card.name, data: data });
		CalendarManager.getSelf().adjustContext({ db: this.db, toolEvent: card.toolEvent, app })

		const targetContainer = document.getElementById(card.containerID);

		if (targetContainer) {
			const dispose = createRoot((dispose) => {
				render(
					() => App({ cardName: card.name }), targetContainer
				);
				return dispose;
			});
			this.roots.set(card.name, dispose);
			return true
		}

		return false;
	}

	public onUnload(cardName: string): void {
		const dispose = this.roots.get(cardName);
		if (dispose) {
			dispose();
			this.roots.delete(cardName);
		}
	}


}
