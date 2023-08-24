import { selectLocalSessionData } from "@/modules/auth/auth.selectors"
import { MovieRecord } from "@/ui/components/movies/movie-record"
import { Head } from "@/ui/components/shared/head"
import { Layout } from "@/ui/components/shared/layout/layout"
import { useGetUserMovies } from "@/ui/hooks/movies/use-get-user-movies"
import { NextPage } from "next"
import { useRouter } from "next/router"
import { useMemo } from "react"

const MoviePage: NextPage = () => {
	const { query } = useRouter()

	const userId = selectLocalSessionData()?.user.id
	const { data: movies } = useGetUserMovies({
		getUserMoviesDto: { userId: userId ?? "", filter: "title" },
		enabled: true,
	})

	const movie = useMemo(
		() => movies?.find((movie) => movie.uuid === (query.id as string)),
		[movies]
	)

	return (
		<>
			<Head />
			{movie && <MovieRecord movie={movie} />}
		</>
	)
}

export default MoviePage
