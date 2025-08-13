import Calendar from "@components/Calendar"
import { CalendarManager } from "@libs/CalendarManager"
import { CalendarOptions } from "@type/CalendarOptions"
import { StaticsType } from "@type/StaticsType"
import { showSettings } from "libs/settings"
import { Accessor, createEffect, createMemo, createSignal, For, onCleanup, onMount, Show } from "solid-js"
import styles from "@styles/calendar.module.css";
import CalendarIcon from "@assets/icons/calendar.svg";
import TaskIcon from "@assets/icons/circle-check-big.svg";
import { formatDateToInput, getDayName } from "@libs/date"

type AppProps = {
	cardName: string
}

export default function App({ cardName }: AppProps) {
	const statics = createMemo<StaticsType>(() => ({
		keys: {
			settings: `calendar-${cardName}-settings`
		}
	}))

	const [data, setData] = createSignal<CalendarOptions>(CalendarManager.getSelf().getCalendar(cardName).data);
	const [isInfo, setInfo] = createSignal(true);

	const week = createMemo(() => {
		const start = new Date(data().selectedDate);
		return Array.from({ length: 7 }, (_, i) => {
			const day = new Date(start);
			day.setDate(start.getDate() + i);
			return formatDateToInput(day);
		});
	});
	const onSettings = () => {
		showSettings(cardName, data, setData, onStartTodayChanged);
	}

	const onMidnight = (d: string | undefined) => {
		setData(prev => ({ ...prev, selectedDate: d ?? prev.selectedDate }));
	}
	const onStartTodayChanged = () => {
		if (data().start_today) {
			CalendarManager.getSelf().onMidnight(onMidnight);
		}
		else {
			CalendarManager.getSelf().offMidnight(onMidnight);
		}
	}

	onMount(() => {
		CalendarManager.getSelf().context!.app.on(statics().keys.settings, onSettings);
		onStartTodayChanged();
	});
	onCleanup(() => {
		CalendarManager.getSelf().context!.app.off(statics().keys.settings, onSettings);
		CalendarManager.getSelf().offMidnight(onMidnight);
	});

	return <div class={styles["parent"]}>
		<Calendar {...{ cardName, data, setData, week }} />
		<Show when={isInfo()}>
			<FloatingPanel {...{ cardName, data, week }} />
		</Show>
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
										numberOfTasks >= data().threshold ? "#a8323a" : "#F6E05E"
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
