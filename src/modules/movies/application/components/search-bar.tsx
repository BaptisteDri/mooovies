import { useEffect } from "react"
import { Icon } from "@/components/icon"

interface Props {
	query: string
	handleOnQueryChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	setFilter: (filter?: "SEEN" | "NOT_SEEN") => void
	filter?: "SEEN" | "NOT_SEEN"
}

export const SearchBar = ({
	query,
	handleOnQueryChange,
	setFilter,
	filter,
}: Props) => {
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
				className="py-4 bg-gray-900 flex items-center top-0 z-40 mb-6"
			>
				<label
					htmlFor="search-input"
					className="flex items-center justify-center mr-3 sm:mr-6"
				>
					<Icon
						name="search"
						className="w-6 h-6 text-gray-500 dark:text-gray-400"
					/>
				</label>
				<input
					className="mr-0 sm:mr-6 h-11 flex-auto rounded-md px-4 bg-gray-800 border border-gray-700 text-white"
					type="text"
					placeholder="Rechercher un titre, un réalisateur..."
					id="search-input"
					autoComplete="off"
					value={query}
					onChange={handleOnQueryChange}
				/>
				<ul className="gap-2 hidden sm:flex">
					<li>
						<input
							type="checkbox"
							id="seen_movies"
							className="hidden peer"
							onChange={() =>
								filter === "SEEN"
									? setFilter(undefined)
									: setFilter("SEEN")
							}
							checked={filter === "SEEN"}
						/>
						<label
							htmlFor="seen_movies"
							className="select-none flex items-center justify-center h-11 w-11 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
						>
							<Icon name="visibility" className="text-lg" />
						</label>
					</li>
					<li>
						<input
							type="checkbox"
							id="not_seen_movies"
							className="hidden peer"
							onChange={() =>
								filter === "NOT_SEEN"
									? setFilter(undefined)
									: setFilter("NOT_SEEN")
							}
							checked={filter === "NOT_SEEN"}
						/>
						<label
							htmlFor="not_seen_movies"
							className="select-none flex items-center justify-center h-11 w-11 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
						>
							<Icon name="visibility_off" className="text-lg" />
						</label>
					</li>
				</ul>
			</div>
		</div>
	)
}
