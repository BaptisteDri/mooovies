import { useEffect, useState } from "react"
import { MoviesListView } from "./movies-list.view"
import { Movie } from "@/types/movie"
import { appOutputs } from "@/config/app-outputs"
import { getUserMovies } from "@/modules/movies/domain/movies.actions"
import { useRealTimeMovies } from "@/hooks/useRealTimeMovies"
import {
	selectIsLoggedInSession,
	selectLocalSessionData,
} from "@/modules/auth/auth.selectors"
import { useRouter } from "next/router"
import { useAppSelector } from "@/config/store"

export const MoviesListContainer = () => {
	const [movies, setMovies] = useState<Movie[]>([])
	const router = useRouter()
	const isLoggedInSession: boolean = useAppSelector(selectIsLoggedInSession)
	const userId = isLoggedInSession
		? selectLocalSessionData()?.user.id
		: router.query.userId?.toString()

	useEffect(() => {
		userId && _getMovies()
	}, [userId])

	useRealTimeMovies(movies, setMovies)

	const { moviesOutput } = appOutputs

	const _getMovies = async () => {
		if (!userId) return
		try {
			const moviesData = await getUserMovies({ moviesOutput, userId })
			setMovies(moviesData)
		} catch (error: any) {
			console.error(error)
		}
	}

	return <MoviesListView movies={movies} setMovies={setMovies} />
}
