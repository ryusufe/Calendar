import styles from "@styles/calendar.module.css";
import { Accessor, createMemo, createSignal, For, onCleanup, onMount, Setter, Show } from "solid-js";
import { DaySlot } from "./DaySlot";
import { CalendarManager } from "@libs/CalendarManager";
import { formatDateToInput, fullDataPopup, getDayName } from "@libs/date";
import { CalendarOptions } from "@type/CalendarOptions";
import CalendarIcon from "@assets/icons/calendar.svg";
import TaskIcon from "@assets/icons/circle-check-big.svg";

type CalendarProps = {
	cardName: string
	data: Accessor<CalendarOptions>
	setData: Setter<CalendarOptions>
}


export default function Calendar({ cardName, data, setData }: CalendarProps) {

	const [openPanel, setOpenPanel] = createSignal<number | null>(null);

	const [isInfo, setInfo] = createSignal(false);

	const week = createMemo(() => {
		const start = new Date(data().selected_date);
		return Array.from({ length: 7 }, (_, i) => {
			const day = new Date(start);
			day.setDate(start.getDate() + i);
			return formatDateToInput(day);
		});
	});
	const changeSelectedDate = (e: Event & { currentTarget: HTMLInputElement }) => {
		setOpenPanel(null);
		setInfo(false);
		const sda = e.currentTarget.value;
		setData(prev => ({ ...prev, selected_date: sda }));
		CalendarManager.getSelf().setSelectedDate(cardName, sda);
	}


	return <div class={"@container h-full relative flex flex-col"}>
		<div class="relative">
			<div class={styles["calendar-control-bar"]} >
				<input class={styles["date-picker"]} value={data().selected_date} onchange={changeSelectedDate} type="date" />
				<button class={styles["info-button"]} onclick={() => setInfo(prev => !prev)} innerHTML={CalendarIcon} />
			</div>
			<Show when={isInfo()}>
				<FloatingPanel {...{ cardName, data, week }} />
			</Show>
		</div>
		<div class={styles["calendar-days-container"]}>
			<For each={week()}>
				{(i, index) =>
					<>
						<DaySlot id={index} date={i} {...{ cardName, openPanel, setOpenPanel }} />
						<Show when={index() < 6 && openPanel() === null}>
							<hr class={styles["cl-sepa"]} data-of={index()} />
						</Show>
					</>
				}
			</For>
		</div>
	</div>
}


type FloatingPanelProps = {
	cardName: string,
	data: Accessor<CalendarOptions>
	week: Accessor<string[]>
}
function FloatingPanel({ cardName, data, week }: FloatingPanelProps) {

	const days = createMemo(() => CalendarManager.getSelf().getCalendar(cardName).data.days);

	return <div class={styles["floating-panel"]}>
		<div class="flex gap-2 items-center">
			<div
				style={{
					width: "1.2em",
					height: "1.2em"
				}}
				innerHTML={CalendarIcon}
			/>
			<h1 class="font-bold text-xl">{data().name}</h1>
		</div>
		<div class="text-sm font-medium mt-4 mb-2 flex items-center gap-1">
			<div
				style={{
					width: "1.1em",
					height: "1.1em"
				}}
				innerHTML={TaskIcon} />
			<h2 class="text-secondary-70">Daily Tasks</h2>
		</div>
		<div class="flex gap-1">
			<For each={week()}>
				{
					(day) => {
						const numberOfTasks = days().find(i => i.date === day)?.tasks.length ?? 0;
						return (<div class="flex flex-col text-xs items-center">
							<h4>{getDayName(day, "short")}</h4>
							<p
								class="px-2 py-1 bg-secondary-10  rounded"
								style={{
									width: "2em",
									height: "2em",
									background: numberOfTasks < Math.floor(data().threshold / 2) ? "var(--secondary-color-10)" :
										numberOfTasks >= data().threshold ? "#eb4034" : "#F6E05E",
									color: numberOfTasks >= Math.floor(data().threshold / 2) && numberOfTasks < data().threshold ? "black" : "text-secondary-95"
								}}
							>
								{numberOfTasks}
							</p>
						</div>)
					}
				}
			</For>
		</div>
	</div>
}
