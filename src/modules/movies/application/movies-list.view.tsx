import { useDeferredValue, useEffect, useState } from "react"
import { Movie } from "@/types/movie"
import { Alphabetical } from "./components/alphabetical"
import { Drawer } from "@/ui/components/shared/drawer"
import { DrawerContent } from "./components/drawer-content"
import { SearchBar } from "./components/search-bar"
import { OrderedByGenres } from "./components/ordered-by-genres"
import { OrderedByDate } from "./components/ordered-by-date"

type Props = {
	movies: Movie[]
}

export const MoviesListView = ({ movies }: Props) => {
	const [selectedMovie, setSelectedMovie] = useState<Movie | undefined>(
		undefined
	)
	const [query, setQuery] = useState<string | undefined>(undefined)
	const deferredQuery = useDeferredValue(query)
	const [filter, setFilter] = useState<"SEEN" | "NOT_SEEN" | undefined>(
		undefined
	)

	useEffect(() => {
		selectedMovie &&
			setSelectedMovie(
				movies.find((movie) => movie.id === selectedMovie.id)
			)
	}, [movies])

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
		const isSeen: boolean = filter === "SEEN"

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
			<Alphabetical
				movies={
					deferredQuery
						? getSearchedMovies(
								getFilteredMovies(movies),
								deferredQuery
						  )
						: getFilteredMovies(movies)
				}
				setSelectedMovie={setSelectedMovie}
			/>

			<Drawer
				isOpen={selectedMovie !== undefined}
				onCloseDrawer={() => setSelectedMovie(undefined)}
			>
				{selectedMovie && <DrawerContent movie={selectedMovie} />}
			</Drawer>
		</>
	)
}
