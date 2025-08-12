import styles from "@styles/calendar.module.css";
import { createMemo, createSignal, For, Show } from "solid-js";
import { DaySlot } from "./DaySlot";
import { CalendarManager } from "@libs/CalendarManager";
import { formatDateToInput } from "@libs/date";


type CalendarProps = {
	cardName: string
}


export default function Calendar({ cardName }: CalendarProps) {

	const [openPanel, setOpenPanel] = createSignal<number | null>(null);
	const [selectedDate, setSelectedDate] = createSignal(CalendarManager.getSelf().getCalendar(cardName).data.selectedDate);
	const week = createMemo(() => {
		const start = new Date(selectedDate());
		return Array.from({ length: 7 }, (_, i) => {
			const day = new Date(start);
			day.setDate(start.getDate() + i);
			return formatDateToInput(day);
		});
	});
	const changeSelectedDate = (e: Event & { currentTarget: HTMLInputElement }) => {
		setOpenPanel(null);
		const sda = e.currentTarget.value;
		setSelectedDate(sda);
		CalendarManager.getSelf().setSelectedDate(cardName, sda);
	}


	return <div class={"@container h-full relative flex flex-col"}>
		<div class={styles["calendar-control-bar"]}>
			<input class={styles["date-picker"]} value={selectedDate()} onchange={changeSelectedDate} type="date" />
		</div>
		<div class={styles["calendar-days-container"]}>
			<For each={week()}>
				{(i, index) =>
					<>
						<DaySlot id={index()} date={i} {...{ cardName, openPanel, setOpenPanel }} />
						<Show when={index() < 6 && openPanel() === null}>
							<hr class={styles["cl-sepa"]} data-of={index()} />
						</Show>
					</>
				}
			</For>
		</div>
	</div>
}


