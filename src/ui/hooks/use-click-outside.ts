import { useEffect, useRef } from "react"

type Event = MouseEvent | TouchEvent

export function useClickOutside<T extends HTMLElement = HTMLElement>(
	handler: () => void
) {
	const ref = useRef<T>(null)

	const handleClickOutside = (event: Event) => {
		if (ref.current && !ref.current.contains(event.target as Node)) {
			handler()
		}
	}

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside)

		return () => {
			document.removeEventListener("mousedown", handleClickOutside)
		}
	}, [handler])

	return ref
}
