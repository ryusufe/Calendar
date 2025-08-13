import Calendar from "@components/Calendar"
import { CalendarManager } from "@libs/CalendarManager"
import { CalendarOptions } from "@type/CalendarOptions"
import { StaticsType } from "@type/StaticsType"
import { showSettings } from "libs/settings"
import { Accessor, createEffect, createMemo, createSignal, onCleanup, onMount } from "solid-js"
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
	const [data, setData] = createSignal<CalendarOptions>(CalendarManager.getSelf().getCalendar(cardName).data)

	const onSettings = () => {
		showSettings(cardName, data, setData);
	}

	const onMidnight = (d: string | undefined) => {
		setData(prev => ({ ...prev, selectedDate: d ?? prev.selectedDate }));
	}
	createEffect(() => {
		if (data().start_today) {
			CalendarManager.getSelf().onMidnight(onMidnight);
		}
		else {
			CalendarManager.getSelf().offMidnight(onMidnight);
		}
	});

	onMount(() => {
		CalendarManager.getSelf().context!.app.on(statics().keys.settings, onSettings);
	});
	onCleanup(() => {
		CalendarManager.getSelf().context!.app.off(statics().keys.settings, onSettings);
		CalendarManager.getSelf().offMidnight(onMidnight);
	});

	return <div class={styles["parent"]}>
		<Calendar {...{ cardName, data, setData }} />
		<FloatingPanel data={data} />
	</div>
}



type FloatingPanelProps = {
	data: Accessor<CalendarOptions>
}
function FloatingPanel({ data }: FloatingPanelProps) {



	return <div class={styles["floating-panel"]}>
		<h1 class="font-bold text-xl">{data().name}</h1>
	</div>
}
