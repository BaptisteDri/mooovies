import { Movie } from "@/types/movie"
import { Placeholder } from "./components/placeholder"
import { SearchInput } from "./components/search-input"
import { AddMovie } from "./components/add-movie"

interface Props {
	query: string
	handleOnQueryChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	searchResultsMovie?: Movie
}

export const SearchMoviesView = ({
	query,
	handleOnQueryChange,
	searchResultsMovie,
}: Props) => {
	return (
		<>
			<SearchInput
				query={query}
				handleOnQueryChange={handleOnQueryChange}
			/>
			{searchResultsMovie ? (
				<AddMovie movie={searchResultsMovie} />
			) : (
				<Placeholder />
			)}
		</>
	)
}
