import { MovieRecord } from "@/ui/components/movies/movie-record"
import { Head } from "@/ui/components/shared/head"
import { Loader } from "@/ui/components/shared/loader"
import { Spinner } from "@/ui/components/shared/spinner"
import { useGetMovie } from "@/ui/hooks/movies/use-get-movie"
import { NextPage } from "next"
import { useRouter } from "next/router"
import { useEffect } from "react"

const MoviePage: NextPage = () => {
	const { query } = useRouter()

	const {
		data: movie,
		isFetched,
		refetch: getMovie,
		isLoading,
		isError,
	} = useGetMovie({
		movieId: query.id as string,
	})

	useEffect(() => {
		if (!query.id || isFetched) return

		getMovie()
	}, [query.id, isFetched])

	return (
		<>
			<Head />
			{isLoading ? (
				<Loader />
			) : (
				<div className="h-full max-sm:h-[calc(100%-77px)] overflow-y-auto overflow-x-hidden scroll-smooth">
					{movie && !isError && <MovieRecord movie={movie} />}
				</div>
			)}
		</>
	)
}

export default MoviePage
