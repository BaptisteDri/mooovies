import { useEffect } from "react"
import { MoviesListView } from "./movies-list.view"
import { Movie } from "@/modules/shared/types/movie"
import {
	selectIsLoggedInSession,
	selectLocalSessionData,
} from "@/modules/auth/auth.selectors"
import { useRouter } from "next/router"
import { useAppSelector } from "@/config/store"
import { useGetUserMovies } from "@/ui/hooks/movies/use-get-user-movies"

export const MoviesListContainer = () => {
	const router = useRouter()
	const isLoggedInSession: boolean = useAppSelector(selectIsLoggedInSession)

	const userId = isLoggedInSession
		? selectLocalSessionData()?.user.id
		: router.query.userId?.toString()

	const { data: movies } = useGetUserMovies({
		getUserMoviesDto: { userId: userId ?? "" },
		enabled: true,
	})

	return <MoviesListView movies={movies} />
}
