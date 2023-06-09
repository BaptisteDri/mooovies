import { SearchedMovie } from "@/types/movie"
import { Placeholder } from "./components/placeholder"
import { SearchInput } from "./components/search-input"
import { AddMovie } from "./components/add-movie"
import { SearchMovieItem } from "./components/search-movie-item"

interface Props {
	query: string
	handleOnQueryChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	searchResultsMovies: SearchedMovie[]
}

export const SearchMoviesView = ({
	query,
	handleOnQueryChange,
	searchResultsMovies,
}: Props) => {
	return (
		<>
			<SearchInput
				query={query}
				handleOnQueryChange={handleOnQueryChange}
			/>
			{searchResultsMovies.length > 0 ? (
				<ul>
					{searchResultsMovies.map((movie: SearchedMovie) =>
						movie.posterPath ? (
							<SearchMovieItem key={movie.id} movie={movie} />
						) : (
							<span key={movie.id}></span>
						)
					)}
				</ul>
			) : (
				<Placeholder />
			)}
		</>
	)
}
