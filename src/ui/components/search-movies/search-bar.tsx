import { Icon } from "@/ui/components/shared/icon"
import { Input } from "@/ui/components/shared/form/input"
import { FilterButton } from "../shared/filter-button"
import { useMergedClassName } from "@/ui/hooks/use-merged-classname"

type Props = {
	query: string
	handleOnQueryChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const SearchBar = ({ query, handleOnQueryChange }: Props) => {
	const mCn = useMergedClassName()

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
					className={mCn("pl-10", query && "pr-10")}
				/>
				{query && (
					<button
						className={mCn(
							"absolute right-2 top-0 bottom-0 m-auto rounded-xl flex items-center justify-center h-8 w-8 cursor-pointer hover:text-slate-300 border-slate-700 text-slate-400 bg-slate-800 hover:bg-slate-700"
						)}
						onClick={() =>
							handleOnQueryChange({
								target: { value: "" },
							} as React.ChangeEvent<HTMLInputElement>)
						}
					>
						<Icon name="close" />
					</button>
				)}
			</div>
		</div>
	)
}
