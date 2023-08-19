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
		getUserMoviesDto: { userId: userId ?? "" },
		enabled: true,
	})

	const movie = useMemo(
		() =>
			movies?.find((movie) => movie.id === parseInt(query.id as string)),
		[movies]
	)

	return (
		<>
			<Head />
			<Layout title={movie?.title}>
				{movie && <MovieRecord movie={movie} />}
			</Layout>
		</>
	)
}

export default MoviePage
