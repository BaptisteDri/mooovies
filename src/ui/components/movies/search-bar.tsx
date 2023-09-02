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
	const [isInputFocused, setIsInputFocused] = useState(false)

	const mCn = useMergedClassName()

	const handleInputFocus = () => {
		setIsInputFocused(true)
	}

	const handleInputBlur = () => {
		setIsInputFocused(false)
	}

	const handleTouchMove = () => {
		if (!isInputFocused) return
		;(document.activeElement as HTMLElement).blur()
	}

	window?.addEventListener("touchmove", handleTouchMove)

	return (
		<div className="px-4 sm:px-6 py-2 md:py-4 bg-slate-950 overflow-hidden">
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
						value={query}
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
					"absolute left-0 top-[60px] sm:top-[77px] overflow-hidden bg-slate-950 border-b border-slate-800 z-40",
					isFiltersSectionVisible
						? "max-h-[50rem] transition-all duration-300 touch-none"
						: "max-h-[1px] transition-all duration-300"
				)}
			>
				<div
					className={mCn(
						"p-4 max-sm:pt-2 grid gap-4",
						isFiltersSectionVisible
							? "opacity-100 transition-all duration-300"
							: "opacity-0 transition-all duration-300"
					)}
				>
					<Order
						order={order}
						setOrder={setOrder}
						closeFiltersSection={() =>
							setFiltersSectionVisibility(false)
						}
					/>
					<Filters
						closeFiltersSection={() =>
							setFiltersSectionVisibility(false)
						}
						isSeen={isSeen}
						setIsSeen={setIsSeen}
						genreId={genreId}
						setGenreId={setGenreId}
					/>
				</div>
			</div>
		</div>
	)
}
