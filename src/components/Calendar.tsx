import styles from "@styles/calendar.module.css";
import {
	Accessor,
	createMemo,
	createSignal,
	For,
	Setter,
	Show,
} from "solid-js";
import { DaySlot } from "./DaySlot";
import { CalendarManager } from "@libs/CalendarManager";
import { formatDateToInput, getDayName } from "@libs/date";
import { CalendarOptions } from "@type/CalendarOptions";
import CalendarIcon from "@assets/icons/calendar.svg";
import TaskIcon from "@assets/icons/circle-check-big.svg";

type CalendarProps = {
	cardId: string;
	data: Accessor<CalendarOptions>;
	setData: Setter<CalendarOptions>;
};

export default function Calendar(props: CalendarProps) {
	const [openPanel, setOpenPanel] = createSignal<number | null>(null);

	const [isInfo, setInfo] = createSignal(false);

	const week = createMemo(() => {
		const start = new Date(props.data().selected_date);
		return Array.from({ length: 7 }, (_, i) => {
			const day = new Date(start);
			day.setDate(start.getDate() + i);
			return formatDateToInput(day);
		});
	});
	const changeSelectedDate = () => {
		setOpenPanel(null);
		setInfo(false);
		let selected_date = props.data().selected_date;
		const start = new Date(selected_date);
		const end = new Date(start);
		end.setDate(start.getDate() + 6);
		const toISO = (d: Date) => d.toISOString().split("T")[0];
		CalendarManager.getSelf().context.app?.emit("date-picker", {
			options: {
				type: "multiple",
				enableWeekNumbers: true,
				displayMonthsCount: 2,
				selectionDatesMode: "multiple-ranged",
				selectedDates: [toISO(start), toISO(end)],
				onClickWeekNumber(
					self: any,
					number: any,
					year: any,
					dateEls: any,
				) {
					const selectedDates = dateEls.map(
						(dateEl: any) => dateEl.dataset.vcDate,
					);
					self.set({ selectedDates }, { dates: true });

					selected_date = selectedDates[0];
				},
				onClickDate(self: any) {
					const selected = self.context.selectedDates as string[];

					if (selected.length === 2) {
						const start = new Date(selected[0]);
						const end = new Date(selected[1]);

						const MS_PER_DAY = 1000 * 60 * 60 * 24;
						const diffDays =
							Math.round(
								(end.getTime() - start.getTime()) / MS_PER_DAY,
							) + 1;
						if (diffDays !== 7) {
							self.update({ selectedDates: [] });
							return;
						}
						const days: string[] = [];
						const current = new Date(start);

						while (current <= end) {
							days.push(current.toISOString().split("T")[0]);
							current.setDate(current.getDate() + 1);
						}
						selected_date = days[0];
					}
				},
			},
			onSave: () => {
				props.setData((prev) => ({ ...prev, selected_date }));
				CalendarManager.getSelf().setSelectedDate(
					props.cardId,
					selected_date,
				);
			},
		});
	};

	return (
		<div class={"@container h-full relative flex flex-col"}>
			<div class="relative">
				<div class={styles["calendar-control-bar"]}>
					<button
						class="button-control text-xs"
						onclick={changeSelectedDate}
						style={{
							"--w": "fit-content",
							"--h": "fit-content",
							"--px": "1.5",
							"--py": "1.5",
							"--border-radius": "var(--radius-md)",
						}}
					>
						{props.data().selected_date}
					</button>
					<button
						class={"button-control " + styles["info-button"]}
						onclick={() => setInfo((prev) => !prev)}
						style={{
							"--border-radius": "var(--radius-sm)",
							"--size": "calc(var(--spacing) * 7)",
						}}
						innerHTML={CalendarIcon}
					/>
				</div>
				<Show when={isInfo()}>
					<FloatingPanel
						cardId={props.cardId}
						data={props.data}
						week={week}
					/>
				</Show>
			</div>
			<div class={styles["calendar-days-container"]}>
				<For each={week()}>
					{(i, index) => (
						<>
							<DaySlot
								index={index}
								date={i}
								cardId={props.cardId}
								openPanel={openPanel}
								setOpenPanel={setOpenPanel}
							/>
							<Show when={index() < 6 && openPanel() === null}>
								<hr
									class={styles["cl-sepa"]}
									data-of={index()}
								/>
							</Show>
						</>
					)}
				</For>
			</div>
		</div>
	);
}

type FloatingPanelProps = {
	cardId: string;
	data: Accessor<CalendarOptions>;
	week: Accessor<string[]>;
};
function FloatingPanel(props: FloatingPanelProps) {
	const days = createMemo(
		() => CalendarManager.getSelf().getCalendar(props.cardId).days,
	);

	return (
		<div class={styles["floating-panel"]}>
			<div class="flex gap-2 items-center">
				<div
					style={{
						width: "1.2em",
						height: "1.2em",
					}}
					innerHTML={CalendarIcon}
				/>
				<h1 class="font-bold text-xl">{props.data().name}</h1>
			</div>
			<div class="text-sm font-medium mt-4 mb-2 flex items-center gap-1">
				<div
					style={{
						width: "1.1em",
						height: "1.1em",
					}}
					innerHTML={TaskIcon}
				/>
				<h2 class="text-secondary-70">Daily Tasks</h2>
			</div>
			<div class="flex gap-1">
				<For each={props.week()}>
					{(day) => {
						const numberOfTasks =
							days().find((i) => i.date === day)?.tasks.length ??
							0;
						return (
							<div class="flex flex-col text-xs items-center">
								<h4>{getDayName(day, "short")}</h4>
								<p
									class="px-2 py-1 bg-secondary-10  rounded"
									style={{
										width: "2em",
										height: "2em",
										background:
											numberOfTasks <
											Math.floor(
												props.data().threshold / 2,
											)
												? "var(--secondary-color-15)"
												: numberOfTasks >=
													  props.data().threshold
													? "#eb4034"
													: "#F6E05E",
										color:
											numberOfTasks >=
												Math.floor(
													props.data().threshold / 2,
												) &&
											numberOfTasks <
												props.data().threshold
												? "black"
												: "text-secondary-95",
									}}
								>
									{numberOfTasks}
								</p>
							</div>
						);
					}}
				</For>
			</div>
		</div>
	);
}
