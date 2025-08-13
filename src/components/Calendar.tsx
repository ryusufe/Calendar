import styles from "@styles/calendar.module.css";
import { Accessor, createMemo, createSignal, For, onCleanup, onMount, Setter, Show } from "solid-js";
import { DaySlot } from "./DaySlot";
import { CalendarManager } from "@libs/CalendarManager";
import { formatDateToInput } from "@libs/date";
import { CalendarOptions } from "@type/CalendarOptions";


type CalendarProps = {
	cardName: string
	data: Accessor<CalendarOptions>
	setData: Setter<CalendarOptions>
}


export default function Calendar({ cardName, data, setData }: CalendarProps) {

	const [openPanel, setOpenPanel] = createSignal<number | null>(null);
	const week = createMemo(() => {
		const start = new Date(data().selectedDate);
		return Array.from({ length: 7 }, (_, i) => {
			const day = new Date(start);
			day.setDate(start.getDate() + i);
			return formatDateToInput(day);
		});
	});
	const changeSelectedDate = (e: Event & { currentTarget: HTMLInputElement }) => {
		setOpenPanel(null);
		const sda = e.currentTarget.value;
		setData(prev => ({ ...prev, selectedDate: sda }));
		CalendarManager.getSelf().setSelectedDate(cardName, sda);
	}


	return <div class={"@container h-full relative flex flex-col"}>
		<div class={styles["calendar-control-bar"]}>
			<input class={styles["date-picker"]} value={data().selectedDate} onchange={changeSelectedDate} type="date" />
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


