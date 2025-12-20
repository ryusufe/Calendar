import { TaskType } from "@type/TaskType";
import styles from "@styles/task.module.css";
import { ContextMenuItem } from "types/hollow";
import { openForm } from "@libs/form";
import { CalendarManager } from "@libs/CalendarManager";
import { createSignal, Setter } from "solid-js";

type TaskProps = {
	cardId: string;
	date: string;
	task: () => TaskType;
	setTasks: Setter<TaskType[]>;
};

export default function Task(props: TaskProps) {
	const onContextMenu = () => {
		const cm: ContextMenuItem = {
			id: "calendar-task",
			header: "Calendar Task",
			items: [
				{
					icon: "edit-pen-outline",
					label: "Edit",
					onclick: editTask,
				},
				{
					icon: "trash",
					label: "Delete",
					onclick: removeTask,
				},
			],
		};
		CalendarManager.getSelf().context.app?.emit("context-menu-extend", cm);
	};
	const toggleState = (e: Event & { currentTarget: HTMLInputElement }) => {
		const state = e.currentTarget.checked;
		const tsk = props.task();
		// props.setTasks(prev => ({ ...prev, completed: e.currentTarget.checked }));
		props.setTasks((prev) => [
			...prev.map((i) =>
				i.id === tsk.id ? { ...tsk, completed: state } : i,
			),
		]);
		CalendarManager.getSelf().toggleTask(
			props.cardId,
			props.date,
			tsk.id,
			state,
		);
	};

	const editTask = () => {
		openForm(props.task(), (data: any) => {
			const newTask = { ...props.task(), title: data.title };
			props.setTasks((prev) => [
				...prev.map((i) => (i.id === props.task().id ? newTask : i)),
			]);
			CalendarManager.getSelf().editTask(
				props.cardId,
				props.date,
				newTask,
			);
		});
	};

	const removeTask = async () => {
		await CalendarManager.getSelf().removeTask(
			props.cardId,
			props.date,
			props.task().id,
		);
		props.setTasks((prev) => [
			...prev.filter((i) => i.id !== props.task().id),
		]);
	};

	return (
		<div class={styles["checkbox-wrapper-4"]} oncontextmenu={onContextMenu}>
			<input
				class={styles["inp-cbx"]}
				id={props.task().id}
				onchange={toggleState}
				checked={props.task().completed}
				type="checkbox"
			/>
			<label class={styles["cbx"]} for={props.task().id}>
				<span>
					<svg
						width="12px"
						height="10px"
						innerHTML={'<use xlink:href="#check-4"></use>'}
					></svg>
				</span>
				<span class={styles["task-title"]}>{props.task().title}</span>
			</label>
			<svg class={styles["inline-svg"]}>
				<symbol id="check-4" viewBox="0 0 12 10">
					<polyline points="1.5 6 4.5 9 10.5 1"></polyline>
				</symbol>
			</svg>
		</div>
	);
}
