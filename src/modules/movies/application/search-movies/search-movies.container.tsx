import { Movie } from "@/types/movie"
import { useEffect, useState } from "react"
import { SearchMoviesView } from "./search-movies.view"
import { appOutputs } from "@/config/app-outputs"
import { searchMovies } from "../../domain/movies.actions"
import { mapMovieToApplicationModel } from "../movies.mapper"
import { movieFakes } from "../../infrastructure/movies.fakes"

export const SearchMoviesContainer = () => {
	const [query, setQuery] = useState<string>("")
	const [searchResultsMovie, setsearchResultsMovie] = useState<
		Movie | undefined
	>(undefined)

	useEffect(() => {
		if (!query) return

		const timer = setTimeout(() => {
			// _searchMovies()
		}, 500)

		return () => clearTimeout(timer)
	}, [query])

	const { moviesOutput } = appOutputs

	const _searchMovies = async () => {
		try {
			const moviesData = await searchMovies({ moviesOutput, query })
			setsearchResultsMovie(mapMovieToApplicationModel(moviesData))
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
			// searchResultsMovie={searchResultsMovie}
			searchResultsMovie={mapMovieToApplicationModel(movieFakes)}
		/>
	)
}
