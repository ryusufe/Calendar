export function formatDateToInput(date: Date) {
	return date.toISOString().split('T')[0];
}

export function getDayName(date: string, size?: "long" | "short" | "narrow" | undefined) {
	const dda = new Date(date);
	return dda.toLocaleDateString("en-US", { weekday: size ?? "long" });
}

export function prettyDate(date: string) {
	return new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });;
}
