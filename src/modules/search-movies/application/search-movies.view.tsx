import { useState } from "react"
import { Movie, SearchedMovie } from "@/types/movie"
import { Placeholder } from "./components/placeholder"
import { SearchInput } from "./components/search-input"
import { SearchMovieItem } from "./components/search-movie-item"
import { Drawer } from "@/components/drawer"
import { DrawerContent } from "./components/drawer-content"
import { useYearFromDate } from "@/hooks/useYearFromDate"

interface Props {
	query: string
	handleOnQueryChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	searchResultsMovies: SearchedMovie[]
	movies: Movie[]
}

export const SearchMoviesView = ({
	query,
	handleOnQueryChange,
	searchResultsMovies,
	movies,
}: Props) => {
	const [selectedMovie, setSelectedMovie] = useState<
		SearchedMovie | undefined
	>(undefined)

	const checkIfAlreadyAdded = (searchedMovie: SearchedMovie): boolean => {
		return movies.find(
			(addedMovie) =>
				addedMovie.originalTitle === searchedMovie.originalTitle &&
				addedMovie.year === useYearFromDate(searchedMovie.releaseDate)
		)
			? true
			: false
	}

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
							<SearchMovieItem
								key={movie.id}
								movie={movie}
								setSelectedMovie={setSelectedMovie}
								alreadyAdded={checkIfAlreadyAdded(movie)}
							/>
						) : (
							<span key={movie.id}></span>
						)
					)}
				</ul>
			) : (
				<Placeholder />
			)}
			<Drawer
				isOpen={selectedMovie !== undefined}
				onCloseDrawer={() => setSelectedMovie(undefined)}
			>
				{selectedMovie && <DrawerContent movie={selectedMovie} />}
			</Drawer>
		</>
	)
}
