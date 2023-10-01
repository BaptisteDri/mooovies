import { useSearchMoviesFilters } from "@/ui/hooks/contexts/use-search-movies-filters"
import { FilterButton } from "../shared/filter-button"

export const SearchBarFilters = () => {
	const {
		searchMoviesFilters: { query, resultsType },
		setSearchMoviesFilters,
	} = useSearchMoviesFilters()

	return (
		<div className="flex gap-2 flex-wrap mt-2">
			<FilterButton
				isActive={resultsType === "movies"}
				onClick={() =>
					setSearchMoviesFilters({ query, resultsType: "movies" })
				}
				title="🎬 Films"
			/>
			<FilterButton
				isActive={resultsType === "persons"}
				onClick={() =>
					setSearchMoviesFilters({ query, resultsType: "persons" })
				}
				title="🕴️ Personnes"
			/>
		</div>
	)
}
