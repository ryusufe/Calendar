import { TaskType } from "@type/TaskType"
import styles from "@styles/task.module.css";
import { ContextMenuItem } from "hollow-api";
import { openForm } from "@libs/form";
import { CalendarManager } from "@libs/CalendarManager";
import { createSignal, Setter } from "solid-js";



type TaskProps = {
	cardName: string,
	date: string,
	task: () => TaskType,
	setTasks: Setter<TaskType[]>
}

export default function Task({ cardName, date, task, setTasks }: TaskProps) {


	const onContextMenu = () => {
		const cm: ContextMenuItem = {
			id: "calendar-task",
			header: "Calendar Task",
			items: [
				{
					label: "Edit",
					icon: "PenLine",
					onclick: editTask
				},
				{
					icon: "Trash2",
					label: "Delete",
					onclick: removeTask
				}
			]
		}
		CalendarManager.getSelf().context?.app.emit("context-menu-extend", cm)
	}
	const toggleState = (e: Event & { currentTarget: HTMLInputElement }) => {
		const state = e.currentTarget.checked;
		const tsk = task();
		// setTasks(prev => ({ ...prev, completed: e.currentTarget.checked }));
		setTasks(prev => [...prev.map(i => i.id === tsk.id ? { ...tsk, completed: state } : i)])
		CalendarManager.getSelf().toggleTask(cardName, date, tsk.id, state);
	}

	const editTask = () => {
		openForm(task(), (data: any) => {
			const newTask = { ...task(), title: data.title };
			setTasks(prev => [...prev.map(i => i.id === task().id ? newTask : i)])
			CalendarManager.getSelf().editTask(cardName, date, newTask);
		});
	}

	const removeTask = async () => {
		await CalendarManager.getSelf().removeTask(cardName, date, task().id);
		setTasks(prev => ([...prev.filter(i => i.id !== task().id)]));
	}

	return <div class={styles["checkbox-wrapper-4"]} oncontextmenu={onContextMenu}>
		<input class={styles["inp-cbx"]} id={task().id} onchange={toggleState} checked={task().completed} type="checkbox" />
		<label class={styles["cbx"]} for={task().id}>
			<span>
				<svg width="12px" height="10px" innerHTML={'<use xlink:href="#check-4"></use>'}>
				</svg>
			</span>
			<span class={styles["task-title"]}>{task().title}</span>
		</label>
		<svg class={styles["inline-svg"]}>
			<symbol id="check-4" viewBox="0 0 12 10">
				<polyline points="1.5 6 4.5 9 10.5 1"></polyline>
			</symbol>
		</svg>
	</div>
}
