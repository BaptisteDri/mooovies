import { selectLocalSessionData } from "@/modules/auth/auth.selectors"
import { MovieRecord } from "@/ui/components/movies/movie-record"
import { Head } from "@/ui/components/shared/head"
import { useGetUserMovies } from "@/ui/hooks/movies/use-get-user-movies"
import { NextPage } from "next"
import { useRouter } from "next/router"
import { useMemo } from "react"

const MoviePage: NextPage = () => {
	const { query } = useRouter()

	const userId = selectLocalSessionData()?.user.id
	const { data } = useGetUserMovies({
		getUserMoviesDto: { userId: userId ?? "", filter: "title" },
		enabled: true,
	})

	const movie = useMemo(
		() =>
			data?.pages.map((group) =>
				group.movies?.find(
					(movie) => movie.uuid === (query.id as string)
				)
			)[0],
		[data]
	)

	return (
		<>
			<Head />
			{movie && <MovieRecord movie={movie} />}
		</>
	)
}

export default MoviePage
