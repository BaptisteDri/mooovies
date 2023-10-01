import { Icon } from "@/ui/components/shared/icon"
import { Input } from "@/ui/components/shared/form/input"
import { Filters } from "./filters"
import { Order } from "./order"
import { useState } from "react"
import { useMergedClassName } from "@/ui/hooks/use-merged-classname"
import { useMoviesFilters } from "@/ui/hooks/contexts/use-movies-filters"

export const SearchBar = () => {
	const [isFiltersSectionVisible, setFiltersSectionVisibility] =
		useState(false)
	const [isInputFocused, setIsInputFocused] = useState(false)
	const { moviesFilters, setMoviesFilters } = useMoviesFilters()

	const mCn = useMergedClassName()

	const handleInputFocus = () => {
		setIsInputFocused(true)
	}

	const handleInputBlur = () => {
		setIsInputFocused(false)
	}

	const handleTouchMove = () => {
		if (!isInputFocused) return
		return (document.activeElement as HTMLElement).blur()
	}

	window?.addEventListener("touchmove", handleTouchMove)

	const handleOnQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setMoviesFilters({
			order: moviesFilters.order,
			filters: {
				genreId: moviesFilters.filters?.genreId,
				isSeen: moviesFilters.filters?.isSeen,
				title: e.target.value,
			},
		})
	}

	return (
		<div className="sm:left-72 sm:pt-4 fixed px-4 sm:px-6 left-0 top-0 right-0 pt-2 pb-2 md:pb-4 bg-slate-950 border-b border-slate-800 z-40 overflow-hidden">
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
						type="search"
						placeholder="Rechercher dans ma liste..."
						id="search-input"
						autoComplete="off"
						value={moviesFilters.filters?.title}
						onChange={handleOnQueryChange}
						className="pl-10"
						onBlur={handleInputBlur}
						onFocus={handleInputFocus}
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
				<Order
					closeFiltersSection={() =>
						setFiltersSectionVisibility(false)
					}
				/>
				<Filters
					closeFiltersSection={() =>
						setFiltersSectionVisibility(false)
					}
				/>
			</div>
		</div>
	)
}
