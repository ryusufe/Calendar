import { TaskType } from "@type/TaskType";
import { FormType } from "hollow-api";
import { Setter } from "solid-js";
import { CalendarManager } from "./CalendarManager";


export function openForm(task: TaskType, setTask: Setter<TaskType>) {


	const form: FormType = {
		id: "calendar-task:edit",
		title: "Edit Task",
		update: true,
		options: [
			{
				type: "longtext",
				label: "Title",
				value: task.title,
				key: "title"
			}
		],
		submit: (data: any) => {
			setTask(prev => ({ ...prev, title: data.title }))
		}
	}


	CalendarManager.getSelf().context?.app.emit("Form", form);

}
