import { useEffect } from "react"
import { MoviesListView } from "./movies-list.view"
import { Movie } from "@/modules/shared/types/movie"
import { getUserMovies } from "@/modules/movies/domain/movies.actions"
import {
	selectIsLoggedInSession,
	selectLocalSessionData,
} from "@/modules/auth/auth.selectors"
import { useRouter } from "next/router"
import { useAppDispatch, useAppSelector } from "@/config/store"
import { selectMovies } from "../domain/movies.selectors"

export const MoviesListContainer = () => {
	const router = useRouter()
	const dispatch = useAppDispatch()

	const isLoggedInSession: boolean = useAppSelector(selectIsLoggedInSession)
	const movies: Movie[] | null = useAppSelector(selectMovies)

	const userId = isLoggedInSession
		? selectLocalSessionData()?.user.id
		: router.query.userId?.toString()

	useEffect(() => {
		if (!userId || movies) return

		_getMovies()
	}, [userId])

	const _getMovies = async () => {
		await dispatch(getUserMovies({ userId: userId ?? "" }))
	}

	return movies ? <MoviesListView movies={movies} /> : <></>
}
