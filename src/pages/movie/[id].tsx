import { useAppSelector } from "@/config/store"
import { selectLoggedInUser } from "@/modules/auth/auth.selectors"
import { MovieRecord } from "@/ui/components/shared/movie-record"
import { Head } from "@/ui/components/shared/head"
import { Loader } from "@/ui/components/shared/loader"
import { useGetUserMovie } from "@/ui/hooks/movies/use-get-user-movie"
import { useGetMovieDetails } from "@/ui/hooks/search-movies/use-get-movie-details"
import { NextPage } from "next"
import { useRouter } from "next/router"
import { useMemo } from "react"
import { useGetMovieCredits } from "@/ui/hooks/search-movies/use-get-movie-credits"

const MoviePage: NextPage = () => {
	const { query } = useRouter()
	const user = useAppSelector(selectLoggedInUser)

	const { data: movie, isFetching } = useGetUserMovie({
		getUserMovieDto: {
			tmdbId: query.id as string,
			userId: user?.id ?? "",
		},
		enabled: true,
	})

	const { data: tmdbMovie, isFetching: isFetchingTmdbMovie } =
		useGetMovieDetails({
			tmdbId: parseInt(query.id as string),
			enabled: true,
		})

	const { data: credits, isFetching: isFetchingCredits } = useGetMovieCredits(
		{
			tmdbId: parseInt(query.id as string),
			enabled: true,
		}
	)

	const directors = useMemo(
		() =>
			credits?.crew.filter((crewMember) => crewMember.job === "Director"),
		[credits]
	)

	const isGlobalLoading = useMemo(
		() => isFetchingTmdbMovie || isFetchingCredits,
		[isFetching, isFetchingTmdbMovie, isFetchingCredits]
	)

	return (
		<>
			<Head />
			{isGlobalLoading ? (
				<Loader />
			) : (
				tmdbMovie && (
					<MovieRecord
						isInMainList={!!movie}
						movie={{
							director:
								directors
									?.map((director) => director.name)
									.join(", ") ?? "",
							genreIds: tmdbMovie.genres.map((genre) =>
								genre.id.toString()
							),
							originalLanguage: tmdbMovie.original_language,
							originalTitle: tmdbMovie.original_title,
							overview: tmdbMovie.overview,
							poster: tmdbMovie.poster_path,
							title: tmdbMovie.title,
							tmdbId: tmdbMovie.id,
							userId: user?.id ?? "",
							uuid: movie ? movie.uuid : undefined,
							watchedDate: movie ? movie.watchedDate : null,
							year: new Date(tmdbMovie.release_date)
								.getFullYear()
								.toString(),
						}}
					/>
				)
			)}
		</>
	)
}

export default MoviePage
