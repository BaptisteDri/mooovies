import { FilterButton } from "../shared/filter-button"
import { useMoviesFilters } from "@/ui/hooks/contexts/use-movies-filters"

type Props = {
	closeFiltersSection: () => void
}

export const Order = ({ closeFiltersSection }: Props) => {
	const {
		moviesFilters: { order, filters },
		setMoviesFilters,
	} = useMoviesFilters()

	const toggleOrder = (order: "title" | "year" | "added_date") => {
		setMoviesFilters({
			order,
			filters,
		})
		closeFiltersSection()
	}

	return (
		<div>
			<div className="text-slate-200 font-semibold mb-2">Trier par</div>
			<div className="flex gap-2 flex-wrap">
				<FilterButton
					isActive={order === "added_date"}
					onClick={() => toggleOrder("added_date")}
					title={"🗓️ Date d'ajout"}
				/>
				<FilterButton
					isActive={order === "title"}
					onClick={() => toggleOrder("title")}
					title={"🔠 Titres"}
				/>
				<FilterButton
					isActive={order === "year"}
					onClick={() => toggleOrder("year")}
					title={"📽️ Date de sortie"}
				/>
			</div>
		</div>
	)
}
