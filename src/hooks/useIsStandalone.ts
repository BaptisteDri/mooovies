export const useIsStandalone = (): boolean =>
	typeof window !== "undefined" &&
	window.matchMedia("(display-mode: standalone)").matches
