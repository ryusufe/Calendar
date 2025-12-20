import {
	IPlugin,
	AppApi,
	ToolApi,
	CardType,
	IStore,
	PluginResult,
} from "./src/types/hollow";
import { createRoot } from "solid-js";
import { render } from "solid-js/web";
import App from "./src/App";
import { DataType } from "./src/types/DataType";
import { DayType } from "./src/types/DayType";
import { CalendarManager } from "./src/libs/CalendarManager";
import { formatDateToInput } from "./src/libs/date";

const calendar: DayType[] = [
	{
		date: formatDateToInput(new Date()),
		tasks: [],
	},
];

export default class Main implements IPlugin {
	private roots: Map<string, () => void> = new Map();

	constructor(app: AppApi, toolEvent: ToolApi) {
		const store = toolEvent.getData("config");
		CalendarManager.getSelf().adjustContext({
			store,
			toolEvent,
			app,
		});
	}

	public async onCreate(card: CardType): Promise<PluginResult> {
		try {
			const initialData: DataType = {
				name: card.data.name,
				start_today: true,
				threshold: 4,
				selected_date: formatDateToInput(new Date()),
				days: calendar,
			};
			CalendarManager.getSelf().context.store?.set(card.id, initialData);
			return { status: true };
		} catch (error) {
			return {
				status: false,
				message: "Failed to create card data",
				error: error instanceof Error ? error : undefined,
			};
		}
	}

	public async onDelete(card: CardType): Promise<PluginResult> {
		try {
			CalendarManager.getSelf().context.store?.remove(card.id);
			return { status: true };
		} catch (error) {
			return {
				status: false,
				message: "Failed to delete card data",
				error: error instanceof Error ? error : undefined,
			};
		}
	}

	public async onLoad(card: CardType): Promise<PluginResult> {
		try {
			const store = CalendarManager.getSelf().context.store;
			const data = store.get(card.id);
			if (!data) {
				return {
					status: false,
					message: "No persisted data found for card",
				};
			}
			const targetContainer = document.getElementById(card.id);
			if (!targetContainer) {
				return {
					status: false,
					message: `DOM container not found for card id: ${card.id}`,
				};
			}
			const dispose = createRoot((dispose) => {
				render(() => App({ cardId: card.id }), targetContainer);
				return dispose;
			});
			this.roots.set(card.id, dispose);
			return { status: true };
		} catch (error) {
			return {
				status: false,
				message: "Failed to load card UI",
				error: error instanceof Error ? error : undefined,
			};
		}
	}

	public async onUnload(cardId: string): Promise<PluginResult> {
		try {
			const dispose = this.roots.get(cardId);
			if (dispose) {
				dispose();
				this.roots.delete(cardId);
			}
			return { status: true };
		} catch (error) {
			return {
				status: false,
				message: "Failed to unload card resources",
				error: error instanceof Error ? error : undefined,
			};
		}
	}
}
