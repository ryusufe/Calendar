import { CalendarOptions } from "@type/CalendarOptions";
import { CalendarType } from "@type/CalendarType";
import { TaskType } from "@type/TaskType";
import { DataBase, HollowEvent } from "hollow-api";
import { formatDateToInput } from "./date";


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
		this.calendars.push(cal);
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
		this.update(cardName);
	}

	public async removeTask(cardName: string, date: string, id: string) {
		const day = this.getCalendar(cardName)?.data?.days.find(i => i.date === date);
		if (day) {
			if (day?.tasks.length === 1) {
				this.getCalendar(cardName).data.days = this.getCalendar(cardName)?.data.days.filter(i => i.date !== date);
			}
			else {
				day.tasks = day.tasks.filter(i => i.id !== id);
			}
			await this.update(cardName);
		}
	}

	public editTask(cardName: string, date: string, task: TaskType) {
		this.getCalendar(cardName).data?.days.find(i => i.date === date)?.tasks.map(i => i.id === task.id ? task : i);
		this.update(cardName);
	}

	public getTasks(cardName: string, date: string): TaskType[] {
		return this.getCalendar(cardName).data.days.find(i => i.date === date)?.tasks ?? [];
	}

	public setSelectedDate(cardName: string, date: string) {
		this.getCalendar(cardName).data.selectedDate = date;
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

}
