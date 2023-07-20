import { Movie, SearchedMovie } from "@/types/movie"
import { useDeferredValue, useEffect, useState } from "react"
import { SearchMoviesView } from "./search-movies.view"
import { appOutputs } from "@/config/app-outputs"
import { searchMovies } from "@/modules/search-movies/domain/search-movies.actions"
import { useAppSelector } from "@/config/store"
import { selectMovies } from "@/modules/movies/domain/movies.selectors"

export const SearchMoviesContainer = () => {
	const [query, setQuery] = useState<string>("")
	const deferredQuery = useDeferredValue(query)
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [searchResultsMovies, setSearchResultsMovies] = useState<
		SearchedMovie[]
	>([])

	useEffect(() => {
		if (!deferredQuery) return setSearchResultsMovies([])

		const timer = setTimeout(() => {
			_searchMovies()
		}, 300)

		return () => clearTimeout(timer)
	}, [deferredQuery])

	const movies: Movie[] | null = useAppSelector(selectMovies)

	const { searchMoviesOutput } = appOutputs

	const _searchMovies = async () => {
		setIsLoading(true)

		try {
			const moviesData = await searchMovies({ searchMoviesOutput, query })
			setSearchResultsMovies(moviesData)
			setIsLoading(false)
		} catch (error: any) {
			setIsLoading(false)
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
			isLoading={isLoading}
		/>
	)
}
