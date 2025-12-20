import { CalendarOptions } from "@type/CalendarOptions";
import { CalendarType } from "@type/CalendarType";
import { TaskType } from "@type/TaskType";
import { HollowEvent, IStore } from "types/hollow";
import { formatDateToInput } from "./date";
import { DataType } from "@type/DataType";

type ContextType = {
	toolEvent?: HollowEvent;
	app?: HollowEvent;
	store?: IStore;
};

export class CalendarManager {
	public context: ContextType = {};
	private static self: CalendarManager;
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

	public adjustContext(context: ContextType) {
		this.context = context;
	}

	public getCalendar(cardId: string): DataType {
		return this.context.store?.get(cardId);
	}

	// #3

	public addTask(cardId: string, date: string, task: TaskType) {
		const calendar = this.getCalendar(cardId);
		let day = calendar?.days.find((i) => i.date === date);
		if (!day) {
			day = { date, tasks: [task] };
			calendar?.days.push(day);
		} else {
			day.tasks.push(task);
		}
		this.update(cardId, calendar);
	}

	public async removeTask(cardId: string, date: string, id: string) {
		const calendar = this.getCalendar(cardId);
		const day = calendar?.days.find((i) => i.date === date);
		if (day) {
			if (day?.tasks.length === 1) {
				calendar.days = calendar.days.filter((i) => i.date !== date);
			} else {
				day.tasks = day.tasks.filter((i) => i.id !== id);
			}
			this.update(cardId, calendar);
		}
	}

	public editTask(cardId: string, date: string, task: TaskType) {
		const calendar = this.getCalendar(cardId);
		const days = calendar.days.find((i) => i.date === date);
		if (days) {
			days.tasks = days.tasks.map((i) => (i.id === task.id ? task : i));
			this.update(cardId, calendar);
		}
	}

	public toggleTask(
		cardId: string,
		date: string,
		id: string,
		state: boolean,
	) {
		const calendar = this.getCalendar(cardId);
		const day = calendar.days.find((i) => i.date === date);
		if (day) {
			day.tasks = day.tasks.map((i: TaskType) =>
				i.id === id ? { ...i, completed: state } : i,
			);
			this.update(cardId, calendar);
		}
	}

	public getTasks(cardId: string, date: string): TaskType[] {
		return (
			this.getCalendar(cardId).days.find((i) => i.date === date)?.tasks ??
			[]
		);
	}

	public setSelectedDate(cardId: string, date: string) {
		const calendar = this.getCalendar(cardId);
		calendar.selected_date = date;
		this.update(cardId, calendar);
	}
	public setCalendarData(cardId: string, data: CalendarOptions) {
		const cal = this.getCalendar(cardId);
		this.update(cardId, { ...cal, ...data });
	}
	private update(cardId: string, data: DataType) {
		this.context.store?.set(cardId, data);
	}

	// glob

	public onMidnight(callback: (s: string | undefined) => void) {
		if (this.midnights === 0) {
			const now = new Date();

			const nextMidnight = new Date(
				now.getFullYear(),
				now.getMonth(),
				now.getDate() + 1,
				0,
				0,
				0,
				0,
			);

			const notify = () => {
				this.context.toolEvent?.emit(
					"midnight",
					formatDateToInput(new Date()),
				);
			};

			const msUntilMidnight = nextMidnight.getTime() - now.getTime();

			this.midnightTimeout = setTimeout(() => {
				notify();
				this.dailyInterval = setInterval(notify, 24 * 60 * 60 * 1000);
			}, msUntilMidnight);
		}
		this.midnights += 1;
		this.context.toolEvent?.on("midnight", callback);
	}
	public offMidnight(callback: (s: string | undefined) => void) {
		this.midnights -= 1;
		this.context.toolEvent?.off("midnight", callback);
		if (this.midnights === 0) {
			this.dailyInterval && clearInterval(this.dailyInterval);
			this.midnightTimeout && clearInterval(this.midnightTimeout);
		}
	}
}
