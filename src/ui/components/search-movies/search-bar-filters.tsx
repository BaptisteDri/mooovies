import { FilterButton } from "../shared/filter-button"

type Props = {
	resultsType: "movies" | "persons"
	setResultsType: (resultsType: "movies" | "persons") => void
}

export const SearchBarFilters = ({ resultsType, setResultsType }: Props) => {
	return (
		<div className="flex gap-2 flex-wrap mt-2">
			<FilterButton
				isActive={resultsType === "movies"}
				onClick={() => setResultsType("movies")}
				title="🎬 Films"
			/>
			<FilterButton
				isActive={resultsType === "persons"}
				onClick={() => setResultsType("persons")}
				title="🕴️ Personnes"
			/>
		</div>
	)
}
