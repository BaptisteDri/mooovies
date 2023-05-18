import { Movie, SearchedMovie } from "@/types/movie"
import { useEffect, useState } from "react"
import { SearchMoviesView } from "./search-movies.view"
import { appOutputs } from "@/config/app-outputs"
import { searchMovies } from "@/modules/search-movies/domain/search-movies.actions"
import { useAppSelector } from "@/config/store"
import { selectMovies } from "@/modules/movies/domain/movies.selectors"

export const SearchMoviesContainer = () => {
	const [query, setQuery] = useState<string>("")
	const [searchResultsMovies, setsearchResultsMovies] = useState<
		SearchedMovie[]
	>([])

	useEffect(() => {
		if (!query) return setsearchResultsMovies([])

		const timer = setTimeout(() => {
			_searchMovies()
		}, 300)

		return () => clearTimeout(timer)
	}, [query])

	const movies: Movie[] | null = useAppSelector(selectMovies)

	const { searchMoviesOutput } = appOutputs

	const _searchMovies = async () => {
		try {
			const moviesData = await searchMovies({ searchMoviesOutput, query })
			setsearchResultsMovies(moviesData)
		} catch (error: any) {
			console.error(error)
		}
	}

	const handleOnQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value)
	}

	return (
		<SearchMoviesView
			query={query}
			handleOnQueryChange={handleOnQueryChange}
			searchResultsMovies={searchResultsMovies}
			movies={movies ?? []}
		/>
	)
}
