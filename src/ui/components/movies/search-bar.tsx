import { Icon } from "@/ui/components/shared/icon"
import { Input } from "@/ui/components/shared/form/input"
import { Filters } from "./filters"
import { Order } from "./order"
import { useState } from "react"
import { useMergedClassName } from "@/ui/hooks/use-merged-classname"

type Props = {
	query: string
	handleOnQueryChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	isSeen?: boolean
	setIsSeen: (isSeen?: boolean) => void
	genreId?: string
	setGenreId: (genreId?: string) => void
	order: "title" | "year" | "director"
	setOrder: (order: "title" | "year" | "director") => void
}

export const SearchBar = ({
	query,
	handleOnQueryChange,
	isSeen,
	setIsSeen,
	genreId,
	setGenreId,
	order,
	setOrder,
}: Props) => {
	const [isFiltersSectionVisible, setFiltersSectionVisibility] =
		useState(false)

	const mCn = useMergedClassName()

	return (
		<div className="fixed px-4 sm:px-6 top-0 right-0 pt-2 pb-2 md:pb-4 bg-slate-950 border-b border-slate-800 z-40 overflow-hidden">
			<div className="flex">
				<div className="relative flex flex-auto mr-2">
					<label
						htmlFor="search-input"
						className="flex items-center justify-center absolute left-2 top-0 bottom-0"
					>
						<Icon
							name="search"
							className="w-6 h-6 text-slate-400"
						/>
					</label>
					<Input
						type="text"
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
						"select-none flex items-center justify-center h-11 w-11  border rounded-2xl cursor-pointer hover:text-slate-300 border-slate-700 text-slate-400 bg-slate-800 hover:bg-slate-700",
						isFiltersSectionVisible &&
							"text-slate-300 border-blue-600 bg-slate-700"
					)}
					onClick={() =>
						setFiltersSectionVisibility(!isFiltersSectionVisible)
					}
				>
					<Icon name="tune" />
				</button>
			</div>

			<div
				className={mCn(
					"grid gap-4 will-change-transform",
					isFiltersSectionVisible
						? "mt-2 md:mt-4 max-h-[50rem] opacity-100 transition-all duration-300 mb-2 touch-none"
						: "max-h-0 opacity-0 transition-all duration-300"
				)}
			>
				<Order order={order} setOrder={setOrder} />
				<Filters
					isSeen={isSeen}
					setIsSeen={setIsSeen}
					genreId={genreId}
					setGenreId={setGenreId}
				/>
			</div>
		</div>
	)
}
