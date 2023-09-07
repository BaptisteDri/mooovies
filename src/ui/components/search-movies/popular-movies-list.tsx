import { useGetPopularMovies } from "@/ui/hooks/search-movies/use-get-popular-movies"
import { Loader } from "../shared/loader"
import { MovieItem } from "../movies/movie-item"
import { useRouter } from "next/router"
import { Fragment, useEffect } from "react"
import { useInView } from "react-intersection-observer"

export const PopularMoviesList = () => {
	const { push } = useRouter()
	const { ref, inView } = useInView()

	const {
		data,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
		isInitialLoading,
	} = useGetPopularMovies({
		enabled: true,
	})

	useEffect(() => {
		if (!inView || !hasNextPage) return

		fetchNextPage()
	}, [inView])

	return (
		<>
			{isInitialLoading && <Loader />}

			{data && (
				<ul className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-2 sm:gap-6 mt-2 md:mt-4">
					{data.pages.map((group, i) => (
						<Fragment key={i}>
							{group.movies?.map((movie) => (
								<MovieItem
									key={movie.tmdbId}
									poster={movie.posterPath}
									title={movie.title}
									watchedDate={null}
									onClick={() =>
										push(`/movie/${movie.tmdbId}`)
									}
								/>
							))}
						</Fragment>
					))}
				</ul>
			)}
			<div ref={ref} />

			{isFetchingNextPage && (
				<div className="grid place-items-center py-8 mt-4 w-full">
					<Loader />
				</div>
			)}
		</>
	)
}
