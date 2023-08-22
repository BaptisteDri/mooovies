import { useEffect } from "react"
import { Icon } from "@/ui/components/shared/icon"

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
			<div className="py-4 bg-slate-900 flex items-center border-b border-slate-800 top-0 z-40 mb-6">
				<div className="relative flex-auto mr-2">
					<label
						htmlFor="search-input"
						className="flex items-center justify-center absolute left-2 top-0 bottom-0"
					>
						<Icon name="search" className="w-6 h-6 text-gray-400" />
					</label>
					<input
						className="pl-10 w-full h-11 rounded-2xl px-4 bg-slate-800 border border-slate-700 text-white placeholder-shown:text-ellipsis hover:bg-slate-700 transition-all duration-150"
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
							className="select-none flex items-center justify-center h-11 w-11  border rounded-2xl cursor-pointer hover:text-slate-300 border-slate-700 peer-checked:border-blue-600 peer-checked:text-slate-300 text-slate-400 bg-slate-800 hover:bg-slate-700"
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
							className="select-none flex items-center justify-center h-11 w-11  border rounded-2xl cursor-pointer hover:text-slate-300 border-slate-700 peer-checked:border-blue-600 peer-checked:text-slate-300 text-slate-400 bg-slate-800 hover:bg-slate-700"
						>
							<Icon name="visibility_off" className="text-lg" />
						</label>
					</li>
				</ul>
			</div>
		</div>
	)
}
