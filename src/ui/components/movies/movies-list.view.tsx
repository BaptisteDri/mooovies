import { useDeferredValue, useEffect, useState } from "react"
import { Movie } from "@/modules/shared/types/movie"
import { Alphabetical } from "@/ui/components/movies/alphabetical"
import { Drawer } from "@/ui/components/shared/drawer"
import { DrawerContent } from "@/ui/components/movies/drawer-content"
import { SearchBar } from "@/ui/components/movies/search-bar"
import { OrderedByGenres } from "@/ui/components/movies/ordered-by-genres"
import { OrderedByDate } from "@/ui/components/movies/ordered-by-date"

type Props = {
	movies?: Movie[] | null
}

export const MoviesListView = ({ movies }: Props) => {
	const [query, setQuery] = useState<string | undefined>(undefined)
	const deferredQuery = useDeferredValue(query)
	const [filter, setFilter] = useState<"SEEN" | "NOT_SEEN" | undefined>(
		undefined
	)

	const handleOnQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value)
	}

	const getSearchedMovies = (movies: Movie[], query: string): Movie[] => {
		const lowerCaseQuery = query.toLowerCase().trim()

		return movies.filter((movie) => {
			const lowerCaseTitle = movie.title.toLowerCase()
			const lowerCaseOriginalTitle = movie.originalTitle.toLowerCase()
			const lowerCaseDirector = movie.director.toLowerCase()

			return (
				lowerCaseTitle.includes(lowerCaseQuery) ||
				lowerCaseOriginalTitle.includes(lowerCaseQuery) ||
				lowerCaseDirector.includes(lowerCaseQuery)
			)
		})
	}

	const getFilteredMovies = (movies: Movie[]) => {
		if (!filter) return movies
		const isSeen = filter === "SEEN"

		return movies.filter((movie) => movie.isSeen === isSeen)
	}

	return (
		<>
			<SearchBar
				query={query ?? ""}
				handleOnQueryChange={handleOnQueryChange}
				setFilter={setFilter}
				filter={filter}
			/>
			{/* <OrderedByDate
				movies={
					deferredQuery
						? getSearchedMovies(
								getFilteredMovies(movies),
								deferredQuery
						  )
						: getFilteredMovies(movies)
				}
				setSelectedMovie={setSelectedMovie}
			/> */}
			{/* <OrderedByGenres
				movies={
					deferredQuery
						? getSearchedMovies(
								getFilteredMovies(movies),
								deferredQuery
						  )
						: getFilteredMovies(movies)
				}
				setSelectedMovie={setSelectedMovie}
			/> */}
			{movies && (
				<Alphabetical
					movies={
						deferredQuery
							? getSearchedMovies(
									getFilteredMovies(movies),
									deferredQuery
							  )
							: getFilteredMovies(movies)
					}
				/>
			)}
		</>
	)
}
