import { useEffect } from "react"
import { Icon } from "@/components/icon"

type Props = {
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
	return (
		<div className="sticky top-0 right-0 z-10">
			<div className="py-4 bg-gray-900 flex items-center top-0 z-40 mb-6">
				<div className="relative flex-auto mr-2">
					<label
						htmlFor="search-input"
						className="flex items-center justify-center absolute left-2 top-0 bottom-0"
					>
						<Icon
							name="search"
							className="w-6 h-6 text-gray-500 dark:text-gray-400"
						/>
					</label>
					<input
						className="pl-10 w-full h-11 rounded-md px-4 bg-gray-800 border border-gray-700 text-white placeholder-shown:text-ellipsis"
						type="search"
						placeholder="Rechercher un titre, un réalisateur..."
						id="search-input"
						autoComplete="off"
						value={query}
						onChange={handleOnQueryChange}
					/>
				</div>
				<ul className="gap-2 flex">
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
