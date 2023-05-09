import { useClickOutside } from "@/hooks/useClickOutside"
import { useEffect } from "react"
import { Icon } from "./icon"

interface Props {
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

	// return (
	// 	<div
	// 		id="drawer-swipe"
	// 		className="fixed z-40 w-full overflow-y-auto bg-white border-t border-gray-200 rounded-t-lg dark:border-gray-700 dark:bg-gray-800 transition-transform bottom-0 left-0 right-0"
	// 		tabIndex={-1}
	// 		aria-labelledby="drawer-swipe-label"
	// 	>
	// 		<div
	// 			className="p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700"
	// 			data-drawer-toggle="drawer-swipe"
	// 		>
	// 			<span className="absolute w-8 h-1 -translate-x-1/2 bg-gray-300 rounded-lg top-3 left-1/2 dark:bg-gray-600"></span>
	// 		</div>

	// 		{children}
	// 	</div>
	// )

	return (
		<div
			ref={ref}
			className={`fixed top-0 right-0 z-40 h-screen p-6 overflow-y-auto transition-transform bg-white w-96 dark:bg-gray-800 border-l border-gray-700 ${
				!isOpen && "translate-x-full"
			}`}
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
