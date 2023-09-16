import { Icon } from "@/ui/components/shared/icon"
import { Input } from "@/ui/components/shared/form/input"

type Props = {
	query: string
	handleOnQueryChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	isSearchingMode: boolean
	resultsType: "movies" | "persons"
	setResultsType: (resultsType: "movies" | "persons") => void
}

export const SearchBar = ({
	query,
	handleOnQueryChange,
	isSearchingMode = false,
	resultsType,
	setResultsType,
}: Props) => {
	return (
		<div className="sm:left-72 sm:pt-4 fixed left-0 px-4 sm:px-6 top-0 right-0 pt-2 pb-2 md:pb-4 bg-slate-950 border-b border-slate-800 z-40 overflow-hidden">
			<div className="relative flex flex-auto">
				<label
					htmlFor="search-input"
					className="flex items-center justify-center absolute left-2 top-0 bottom-0"
				>
					<Icon name="search" className="w-6 h-6 text-slate-400" />
				</label>
				<Input
					type="search"
					placeholder="Rechercher un titre, un réalisateur..."
					id="search-input"
					autoComplete="off"
					value={query}
					onChange={handleOnQueryChange}
					className="pl-10"
				/>
			</div>
			{isSearchingMode && (
				<div className="text-white">
					<button onClick={() => setResultsType("movies")}>
						movies
					</button>
					<button onClick={() => setResultsType("persons")}>
						persons
					</button>
				</div>
			)}
		</div>
	)
}
