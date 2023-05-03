import { useEffect, useState } from "react"
import { MoviesView } from "./movies.view"
import { Movie } from "@/types/movie"
import { appOutputs } from "@/config/app-outputs"
import { getUserMovies } from "../domain/movies.actions"

export const MoviesContainer = () => {
	const [movies, setMovies] = useState<Movie[]>([])

	useEffect(() => {
		_getMovies()
	}, [])

	const { moviesOutput } = appOutputs
	const userId = ""

	const _getMovies = async () => {
		try {
			const moviesData = await getUserMovies({ moviesOutput, userId })
			// setMovies(_movies)
			console.log(moviesData)
		} catch (error: any) {
			console.error(error)
		}
	}

	return <MoviesView movies={movies} />
}
