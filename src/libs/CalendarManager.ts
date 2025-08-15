import { CalendarOptions } from "@type/CalendarOptions";
import { CalendarType } from "@type/CalendarType";
import { TaskType } from "@type/TaskType";
import { DataBase, EntryData, HollowEvent } from "hollow-api";
import { formatDateToInput, prettyDate } from "./date";
import { DayType } from "@type/DayType";


type ContextType = {
	db: DataBase, toolEvent: HollowEvent, app: HollowEvent
}

export class CalendarManager {

	public context: ContextType | null = null;
	private static self: CalendarManager;
	public calendars: CalendarType[] = [];
	private midnights: number = 0;
	private dailyInterval: ReturnType<typeof setInterval> | null = null;
	private midnightTimeout: ReturnType<typeof setTimeout> | null = null;
	// #1
	static getSelf(): CalendarManager {
		if (!this.self) {
			this.self = new CalendarManager();
		}
		return this.self;
	}

	public adjustContext({ db, toolEvent, app }: ContextType) {
		if (!this.context) {
			this.context = { db, toolEvent, app }
		}
	}

	// #2
	public addCalendar(cal: CalendarType) {
		this.calendars.push({ ...cal, data: { ...cal.data, selected_date: cal.data.start_today ? formatDateToInput(new Date()) : cal.data.selected_date } });
	}
	public getCalendar(cardName: string): CalendarType {
		return this.calendars.find(i => i.card == cardName)!;
	}

	// #3

	public addTask(cardName: string, date: string, task: TaskType) {
		const calendar = this.getCalendar(cardName);
		let day = calendar?.data?.days.find(i => i.date === date);
		if (!day) {
			day = { date, tasks: [task] };
			calendar?.data?.days.push(day);
		} else {
			day.tasks.push(task);
		}
		this.addEntry(cardName, day);
		this.update(cardName);
	}

	public async removeTask(cardName: string, date: string, id: string) {
		const day = this.getCalendar(cardName)?.data?.days.find(i => i.date === date);
		if (day) {
			if (day?.tasks.length === 1) {
				this.getCalendar(cardName).data.days = this.getCalendar(cardName)?.data.days.filter(i => i.date !== date);
				this.removeEntry(cardName, date)
			}
			else {
				day.tasks = day.tasks.filter(i => i.id !== id);
				this.addEntry(cardName, day);
			}
			await this.update(cardName);
		}
	}

	public editTask(cardName: string, date: string, task: TaskType) {
		const days = this.getCalendar(cardName).data?.days.find(i => i.date === date);
		if (days) {
			days.tasks = days.tasks.map(i => i.id === task.id ? task : i);
			this.update(cardName);
		}
	}

	public toggleTask(cardName: string, date: string, id: string, state: boolean) {
		const day = this.getCalendar(cardName).data?.days.find(i => i.date === date);
		if (day) {
			day.tasks = day.tasks.map((i: TaskType) => i.id === id ? { ...i, completed: state } : i);
			this.update(cardName);
			this.addEntry(cardName, day);
		}
	}

	public getTasks(cardName: string, date: string): TaskType[] {
		return this.getCalendar(cardName).data.days.find(i => i.date === date)?.tasks ?? [];
	}

	public setSelectedDate(cardName: string, date: string) {
		this.getCalendar(cardName).data.selected_date = date;
		this.update(cardName);
	}
	public setCalendarData(cardName: string, data: CalendarOptions) {
		const cal = this.getCalendar(cardName);
		cal.data = { ...cal.data, ...data };
		this.update(cardName);
	}
	private async update(cardName: string) {
		await this.context?.db.putData(cardName, this.getCalendar(cardName).data);
	}

	// glob

	public onMidnight(callback: (s: string | undefined) => void) {
		if (this.midnights === 0) {
			const now = new Date();

			const nextMidnight = new Date(
				now.getFullYear(),
				now.getMonth(),
				now.getDate() + 1,
				0, 0, 0, 0
			);

			const notify = () => {
				this.context?.toolEvent.emit("midnight", formatDateToInput(new Date()));
			}

			const msUntilMidnight = nextMidnight.getTime() - now.getTime();

			this.midnightTimeout = setTimeout(() => {
				notify();
				this.dailyInterval = setInterval(notify, 24 * 60 * 60 * 1000);
			}, msUntilMidnight);
		}
		this.midnights += 1;
		this.context?.toolEvent.on("midnight", callback)
	}
	public offMidnight(callback: (s: string | undefined) => void) {
		this.midnights -= 1;
		this.context?.toolEvent.off("midnight", callback);
		if (this.midnights === 0) {
			this.dailyInterval && clearInterval(this.dailyInterval);
			this.midnightTimeout && clearInterval(this.midnightTimeout);
		}
	}

	private addEntry(cardName: string, day: DayType) {
		const n_tasks = day.tasks.length;
		const n_tasks_x = day.tasks.filter(i => i.completed).length;
		const pDate = prettyDate(day.date);
		const entry: EntryData = {
			id: `calendar|${cardName}|${day.date}`,
			source: {
				tool: "calendar",
				card: cardName
			},
			title: `Day: ${pDate}`,
			content: `# Tasks for ${pDate}

---

## ✅ Finished Tasks
${day.tasks
					.filter(i => i.completed)
					.map(i => `- ${i.title}`)
					.join('\n') || '_No finished tasks_'}

## ❌ Unfinished Tasks
${day.tasks
					.filter(i => !i.completed)
					.map(i => `- ${i.title}`)
					.join('\n') || '_No unfinished tasks_'}
`
			,
			tags: [],
			meta: {
				"ToTal Tasks": n_tasks,
				"Tasks Finished": n_tasks_x,
				"Tasks Unfinished": n_tasks - n_tasks_x
			}
		}
		this.context?.app.emit("receive-entry", entry);
	}

	private removeEntry(cardName: string, date: string) {
		this.context?.app.emit("remove-entry", `calendar|${cardName}|${date}`);
	}

	public onAppRemoveEntry(cardName: string, date: string) {
		const dt = this.getCalendar(cardName).data
		dt.days = dt.days.filter(i => i.date !== date);
		this.update(cardName);
	}


}

