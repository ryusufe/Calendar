import Calendar from "@components/Calendar"
import { CalendarManager } from "@libs/CalendarManager"
import { CalendarOptions } from "@type/CalendarOptions"
import { StaticsType } from "@type/StaticsType"
import { showSettings } from "libs/settings"
import { Accessor, createEffect, createMemo, createSignal, For, onCleanup, onMount, Show } from "solid-js"
import styles from "@styles/calendar.module.css";

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
	const onSettings = () => {
		showSettings(cardName, data, setData, onStartTodayChanged);
	}

	const onMidnight = (d: string | undefined) => {
		setData(prev => ({ ...prev, selectedDate: d ?? prev.selected_date }));
	}
	const onStartTodayChanged = () => {
		if (data().start_today) {
			CalendarManager.getSelf().onMidnight(onMidnight);
		}
		else {
			CalendarManager.getSelf().offMidnight(onMidnight);
		}
	}

	const removeDay = (id: string | undefined) => {
		const prts = id?.split('|');
		if (prts) {
			// TODO needs to toggle the reactivity of the effected day
			CalendarManager.getSelf().onAppRemoveEntry(prts[1], prts[2]);
		}
	}


	onMount(() => {
		CalendarManager.getSelf().context!.app.on(statics().keys.settings, onSettings);
		onStartTodayChanged();
		CalendarManager.getSelf().context!.toolEvent.on(`${cardName}-remove-entry`, removeDay);
	});
	onCleanup(() => {
		CalendarManager.getSelf().context!.app.off(statics().keys.settings, onSettings);
		CalendarManager.getSelf().context!.toolEvent.off(`${cardName}-remove-entry`, removeDay);
		CalendarManager.getSelf().offMidnight(onMidnight);
	});

	return <div class={styles["parent"]}>
		<Calendar {...{ cardName, data, setData }} />
	</div>
}



