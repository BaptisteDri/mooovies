import { useEffect } from "react"
import { Icon } from "@/components/icon"

interface Props {
	query: string
	handleOnQueryChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const SearchBar = ({ query, handleOnQueryChange }: Props) => {
	const navbarId = "navbar"
	const placeholderId = "placeholder"
	const stickyClassName =
		"fixed sm:w-[calc(100%-16rem)] left-0 sm:left-64 right-0 px-6 border-b border-gray-700"
	const placeHolderClassName = "h-24"

	useEffect(() => {
		const handleScroll = () => {
			const sticky =
				document.getElementById(placeholderId)?.offsetTop || 0

			if (window.pageYOffset >= sticky) {
				document
					.getElementById(navbarId)
					?.classList.add(...stickyClassName.split(" "))
				document
					.getElementById(placeholderId)
					?.classList.add(...placeHolderClassName.split(" "))
			} else {
				document
					.getElementById(navbarId)
					?.classList.remove(...stickyClassName.split(" "))
				document
					.getElementById(placeholderId)
					?.classList.remove(...placeHolderClassName.split(" "))
			}
		}

		window.addEventListener("scroll", handleScroll)

		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	return (
		<div id={placeholderId}>
			<div
				id={navbarId}
				className="py-4 bg-gray-900 flex gap-6 items-center top-0 z-40 mb-6"
			>
				<label
					htmlFor="search-input"
					className="flex items-center justify-center"
				>
					<Icon
						name="search"
						className="w-6 h-6 text-gray-500 dark:text-gray-400"
					/>
				</label>
				<input
					className="h-11 flex-auto rounded-md px-4 bg-gray-800 border border-gray-700 text-white"
					type="text"
					placeholder="Rechercher un titre, un réalisateur..."
					id="search-input"
					autoComplete="off"
					value={query}
					onChange={handleOnQueryChange}
				/>
			</div>
		</div>
	)
}
