import { useState } from "react"
import {
	Movie,
	SearchedMovie,
	SearchedPerson,
} from "@/modules/shared/types/movie"
import { Placeholder } from "./components/placeholder"
import { SearchInput } from "./components/search-input"
import { SearchMovieItem } from "./components/search-movie-item"
import { Drawer } from "@/ui/components/shared/drawer"
import { DrawerContent } from "./components/drawer-content"
import { useYearFromDate } from "@/ui/hooks/use-year-from-date"
import { SearchMoviesSkeleton } from "./components/search-movies-skeleton"

type Props = {
	query: string
	handleOnQueryChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	searchResultsMovies: SearchedMovie[]
	searchResultsPerson?: SearchedPerson
	movies: Movie[]
	isLoading: boolean
}

export const SearchMoviesView = ({
	query,
	handleOnQueryChange,
	searchResultsMovies,
	searchResultsPerson,
	movies,
	isLoading,
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
		<div className="p-4 sm:p-6">
			<SearchInput
				query={query}
				handleOnQueryChange={handleOnQueryChange}
			/>
			{searchResultsPerson && (
				<div className="text-white"> {searchResultsPerson.name}</div>
			)}
			{searchResultsMovies.length > 0 ? (
				<ul>
					{searchResultsMovies.map((movie: SearchedMovie) =>
						movie.posterPath ? (
							<SearchMovieItem
								key={movie.tmdbId}
								movie={movie}
								setSelectedMovie={setSelectedMovie}
								alreadyAdded={checkIfAlreadyAdded(movie)}
							/>
						) : (
							<span key={movie.tmdbId}></span>
						)
					)}
				</ul>
			) : isLoading ? (
				<SearchMoviesSkeleton />
			) : (
				<Placeholder />
			)}
			<Drawer
				isOpen={selectedMovie !== undefined}
				onCloseDrawer={() => setSelectedMovie(undefined)}
			>
				{selectedMovie && <DrawerContent movie={selectedMovie} />}
			</Drawer>
		</div>
	)
}
