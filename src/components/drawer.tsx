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
