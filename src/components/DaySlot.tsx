import styles from "@styles/calendar.module.css";
import {
	Accessor,
	createEffect,
	createMemo,
	createSignal,
	For,
	onCleanup,
	onMount,
	Setter,
	Show,
} from "solid-js";
import PanelTopClose from "@assets/icons/panel-top-close.svg";
import { CalendarManager } from "@libs/CalendarManager";
import Task from "./Task";
import { getDayName, prettyDate } from "@libs/date";
import { TaskType } from "@type/TaskType";

type DaySlotProps = {
	cardId: string;
	index: Accessor<number>;
	date: string;
	openPanel: Accessor<number | null>;
	setOpenPanel: Setter<number | null>;
};
export function DaySlot(props: DaySlotProps) {
	let parentDiv!: HTMLDivElement;

	const [isOpen, setOpen] = createSignal(false);
	const [tasks, setTasks] = createSignal<TaskType[]>([
		...CalendarManager.getSelf().getTasks(props.cardId, props.date),
	]);

	const dayData = createMemo(() => {
		const n_tasks = tasks().length;
		const tasks_x = tasks().reduce((c, i) => c + (i.completed ? 1 : 0), 0);
		return {
			quickDate: prettyDate(props.date),
			n_tasks: n_tasks,
			n_tasks_x: tasks_x,
		};
	});

	const open = () => {
		props.setOpenPanel(props.index);
		parentDiv.removeEventListener("click", open);
	};

	const close = () => {
		props.setOpenPanel(null);
		setOpen(false);
		parentDiv.addEventListener("click", open);
	};

	const on_animation_end = () => {
		setOpen(true);
	};

	createEffect(() => {
		if (props.openPanel() === null) {
			setOpen(false);
		}
	});

	onMount(() => {
		parentDiv.addEventListener("click", open);
	});

	onCleanup(() => {
		parentDiv.removeEventListener("click", open);
	});

	return (
		<div
			class={`group ${styles["day-slot"]} relative`}
			classList={{
				open: props.openPanel() === props.index(),
				close:
					props.openPanel() !== null &&
					props.openPanel() !== props.index(),
				opened: isOpen(),
			}}
			ref={parentDiv}
			onAnimationEnd={on_animation_end}
		>
			<div class={styles["day-slot-content"]}>
				<Show
					when={isOpen()}
					fallback={
						<div class="flex flex-col justify-between items-center relative w-full">
							<h2 class={`${styles["day-title"]} px-2`}>
								{getDayName(props.date)}
							</h2>
							<span
								class="group-hover:opacity-100 opacity-0 w-fit text-xs text-secondary-40 absolute duration-300 transition-opacity"
								style={{ top: "3em" }}
							>
								{`${dayData().quickDate} | ${dayData().n_tasks_x}:${dayData().n_tasks}`}
							</span>
						</div>
					}
				>
					<div class="flex justify-between items-center">
						<h2 class={`${styles["day-title"]}`}>
							{getDayName(props.date)}
						</h2>
						<button
							class={"button-control " + styles["info-button"]}
							onclick={close}
							innerHTML={PanelTopClose}
						></button>
					</div>
					<DayPanel
						cardId={props.cardId}
						tasks={tasks}
						setTasks={setTasks}
						quickDate={dayData().quickDate}
						date={props.date}
					/>
				</Show>
			</div>
		</div>
	);
}

type DayPanelProps = {
	cardId: string;
	tasks: Accessor<TaskType[]>;
	setTasks: Setter<TaskType[]>;
	quickDate: string;
	date: string;
};
function DayPanel(props: DayPanelProps) {
	const submitTask = (
		e: KeyboardEvent & { currentTarget: HTMLInputElement },
	) => {
		if (e.key === "Enter") {
			const input = e.currentTarget;
			if (!input.value.trim()) return;
			const newTask = {
				id: crypto.randomUUID(),
				title: input.value.trim(),
				completed: false,
			};
			CalendarManager.getSelf().addTask(
				props.cardId,
				props.date,
				newTask,
			);
			props.setTasks((prev) => [...prev, newTask]);
			input.value = "";
		}
	};
	return (
		<>
			<span class="text-secondary-50 text-sm">{props.quickDate}</span>
			<div class="w-full flex flex-col gap-1 flex-1 pt-5 overflow-hprops.indexden overflow-y-auto">
				<For each={props.tasks()}>
					{(task) => (
						<Task
							cardId={props.cardId}
							task={() => task}
							date={props.date}
							setTasks={props.setTasks}
						/>
					)}
				</For>
			</div>
			<input
				onKeyDown={submitTask}
				class="text-secondary-40"
				style={{ "font-weight": "300" }}
				placeholder="Add a new task..."
			/>
		</>
	);
}
