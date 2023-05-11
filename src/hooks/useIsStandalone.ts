export const useIsStandalone = (): boolean =>
	window.matchMedia("(display-mode: standalone)").matches
