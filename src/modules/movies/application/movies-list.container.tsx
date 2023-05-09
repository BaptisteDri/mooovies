import { useEffect, useState } from "react"
import { MoviesListView } from "./movies-list.view"
import { Movie } from "@/types/movie"
import { appOutputs } from "@/config/app-outputs"
import { getUserMovies } from "@/modules/movies/domain/movies.actions"
import { useRealTimeMovies } from "@/hooks/useRealTimeMovies"
import { selectLocalSessionData } from "@/modules/auth/auth.selectors"

export const MoviesListContainer = () => {
	const [movies, setMovies] = useState<Movie[]>([])

	useEffect(() => {
		_getMovies()
	}, [])

	useRealTimeMovies(movies, setMovies)

	const { moviesOutput } = appOutputs
	const userId = selectLocalSessionData()?.user.id ?? ""

	const _getMovies = async () => {
		try {
			const moviesData = await getUserMovies({ moviesOutput, userId })
			setMovies(moviesData)
		} catch (error: any) {
			console.error(error)
		}
	}

	return <MoviesListView movies={movies} setMovies={setMovies} />
}
