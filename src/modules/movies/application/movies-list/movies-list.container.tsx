import { useEffect, useState } from "react"
import { MoviesListView } from "./movies-list.view"
import { Movie } from "@/types/movie"
import { appOutputs } from "@/config/app-outputs"
import { getUserMovies } from "../../domain/movies.actions"
import { mapMoviesToApplicationModel } from "../movies.mapper"

export const MoviesListContainer = () => {
	const [movies, setMovies] = useState<Movie[]>([])

	useEffect(() => {
		_getMovies()
	}, [])

	const { moviesOutput } = appOutputs
	const userId = ""

	const _getMovies = async () => {
		try {
			const moviesData = await getUserMovies({ moviesOutput, userId })
			setMovies(mapMoviesToApplicationModel(moviesData))
		} catch (error: any) {
			console.error(error)
		}
	}

	return <MoviesListView movies={movies} />
}