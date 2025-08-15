import { TaskType } from "@type/TaskType";
import { FormType } from "hollow-api";
import { Setter } from "solid-js";
import { CalendarManager } from "./CalendarManager";


export function openForm(task: TaskType, onSubmit: (data: any) => void) {


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
		submit: onSubmit
	}


	CalendarManager.getSelf().context?.app.emit("Form", form);

}
