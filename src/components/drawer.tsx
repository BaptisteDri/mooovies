import { useClickOutside } from "@/hooks/useClickOutside"
import { useEffect } from "react"
import { Icon } from "./icon"

type Props = {
	isOpen: boolean
	onCloseDrawer: () => void
	children: React.ReactNode
}

export const Drawer = ({ isOpen, onCloseDrawer, children }: Props) => {
	const ref = useClickOutside(
		onCloseDrawer
	) as React.RefObject<HTMLDivElement>

	useEffect(() => {
		function handleKeyPress(event: KeyboardEvent) {
			if (event.keyCode === 27) {
				onCloseDrawer()
			}
		}

		document.addEventListener("keydown", handleKeyPress)

		return () => {
			document.removeEventListener("keydown", handleKeyPress)
		}
	}, [])

	return (
		<div
			ref={ref}
			className={`z-50 fixed sm:top-0 right-0 bottom-0 sm:bottom-auto left-0 sm:left-auto 50 w-full sm:w-96 max-h-full sm:h-screen p-6 pb-10 overflow-y-auto transition-transform bg-white dark:bg-gray-800 border-t sm:border-t-0 sm:border-l border-gray-700 ${
				!isOpen &&
				"translate-y-full sm:translate-y-0 sm:translate-x-full"
			} ${"pb-6"}`}
			tabIndex={-1}
		>
			<div className="flex justify-end mb-4">
				<button
					onClick={() => onCloseDrawer()}
					type="button"
					className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
				>
					<Icon name="close" />
				</button>
			</div>
			{children}
		</div>
	)
}
