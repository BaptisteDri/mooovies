import { Icon } from "@/ui/components/shared/icon"
import { Input } from "@/ui/components/shared/form/input"
import { useState } from "react"
import { useMergedClassName } from "@/ui/hooks/use-merged-classname"

type Props = {
	query: string
	handleOnQueryChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const SearchBar = ({ query, handleOnQueryChange }: Props) => {
	const [isFiltersSectionVisible, setFiltersSectionVisibility] =
		useState(false)

	const mCn = useMergedClassName()

	return (
		<div className="sm:left-72 sm:pt-4 fixed flex left-0 px-4 sm:px-6 top-0 right-0 pt-2 pb-2 md:pb-4 bg-slate-950 border-b border-slate-800 z-40 overflow-hidden">
			<div className="relative flex flex-auto mr-2">
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

			<button
				className={mCn(
					"text-xl select-none flex items-center justify-center h-11 w-11  border rounded-2xl cursor-pointer hover:text-slate-300 border-slate-700 text-slate-400 bg-slate-800 hover:bg-slate-700 mr-2",
					isFiltersSectionVisible &&
						"text-slate-300 border-blue-600 bg-slate-700"
				)}
				onClick={() =>
					setFiltersSectionVisibility(!isFiltersSectionVisible)
				}
			>
				🎭
			</button>
			<button
				className={mCn(
					"text-xl select-none flex items-center justify-center h-11 w-11  border rounded-2xl cursor-pointer hover:text-slate-300 border-slate-700 text-slate-400 bg-slate-800 hover:bg-slate-700",
					isFiltersSectionVisible &&
						"text-slate-300 border-blue-600 bg-slate-700"
				)}
				onClick={() =>
					setFiltersSectionVisibility(!isFiltersSectionVisible)
				}
			>
				📽️
			</button>
		</div>
	)
}
