import Calendar from "@components/Calendar"
import { CalendarManager } from "@libs/CalendarManager"
import { DataType } from "@type/DataType"
import { StaticsType } from "@type/StaticsType"
import { DataBase, HollowEvent, ICard } from "hollow-api"
import { showSettings } from "libs/settings"
import { createMemo, onCleanup, onMount } from "solid-js"



type AppProps = {
	cardName: string
}

export default function App({ cardName }: AppProps) {
	const statics = createMemo<StaticsType>(() => ({
		keys: {
			settings: `myplugin-${cardName}-settings`
		}
	}))
	onMount(() => {
		CalendarManager.getSelf().context!.app.on(statics().keys.settings, showSettings)
	})
	onCleanup(() => {
		CalendarManager.getSelf().context!.app.off(statics().keys.settings, showSettings)
	})

	return <div class="w-full h-full">
		<Calendar cardName={cardName} />
	</div>
}
