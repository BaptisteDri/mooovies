import { Movie } from "@/types/movie"
import { useEffect, useState } from "react"
import { SearchMoviesView } from "./search-movies.view"
import { appOutputs } from "@/config/app-outputs"
import { searchMovies } from "../../domain/movies.actions"
import { mapMovieToApplicationModel } from "../movies.mapper"

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
			console.log(moviesData)
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
			searchResultsMovie={{
				director: "Spike Lee",
				genre: ["Drame", "Comedy"],
				poster: "https://m.media-amazon.com/images/M/MV5BODA2MjU1NTI1MV5BMl5BanBnXkFtZTgwOTU4ODIwMjE@._V1_SX300.jpg",
				runtime: "120 minutes",
				title: "Do the Right Thing",
				year: "1989",
			}}
		/>
	)
}
