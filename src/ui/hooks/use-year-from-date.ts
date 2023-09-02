export const useYearFromDate = (date: string): string | undefined =>
	date?.split("-")?.find((part) => part.length === 4)
