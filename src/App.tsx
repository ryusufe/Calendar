import Calendar from "@components/Calendar";
import { CalendarManager } from "@libs/CalendarManager";
import { CalendarOptions } from "@type/CalendarOptions";
import { StaticsType } from "@type/StaticsType";
import { showSettings } from "libs/settings";
import {
	Accessor,
	createEffect,
	createMemo,
	createSignal,
	For,
	onCleanup,
	onMount,
	Show,
} from "solid-js";
import styles from "@styles/calendar.module.css";

type AppProps = {
	cardId: string;
};

export default function App(props: AppProps) {
	const statics = {
		keys: {
			settings: `${props.cardId}-settings`,
		},
	};

	const [data, setData] = createSignal<CalendarOptions>(
		CalendarManager.getSelf().getCalendar(props.cardId),
	);
	const onSettings = () => {
		showSettings(props.cardId, data, setData, onStartTodayChanged);
	};

	const onMidnight = (d: string | undefined) => {
		setData((prev) => ({ ...prev, selectedDate: d ?? prev.selected_date }));
	};
	const onStartTodayChanged = () => {
		if (data().start_today) {
			CalendarManager.getSelf().onMidnight(onMidnight);
		} else {
			CalendarManager.getSelf().offMidnight(onMidnight);
		}
	};

	// const removeDay = (id: string | undefined) => {
	// 	const prts = id?.split('|');
	// 	if (prts) {
	// 		// TODO needs to toggle the reactivity of the effected day
	// 		CalendarManager.getSelf().onAppRemoveEntry(prts[1], prts[2]);
	// 	}
	// }

	onMount(() => {
		CalendarManager.getSelf().context.app?.on(
			statics.keys.settings,
			onSettings,
		);
		onStartTodayChanged();
	});
	onCleanup(() => {
		CalendarManager.getSelf().context.app?.off(
			statics.keys.settings,
			onSettings,
		);
		CalendarManager.getSelf().offMidnight(onMidnight);
	});

	return (
		<div class={styles["parent"]}>
			<Calendar data={data} setData={setData} cardId={props.cardId} />
		</div>
	);
}
