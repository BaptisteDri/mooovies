import { Movie } from "@/modules/shared/types/movie"
import { mapMovieToInfraModel } from "@/modules/movies/infrastructure/movies.mapper"
import { useToggleMovieIsSeen } from "@/ui/hooks/movies/use-toggle-movie-is-seen"
import { useEffect, useState } from "react"
import { useQueryClient } from "@tanstack/react-query"
import { GET_USER_MOVIES_QUERY_KEY } from "@/ui/hooks/movies/use-get-user-movies"
import { Button } from "@/ui/components/shared/button"
import { GET_USER_MOVIE_QUERY_KEY } from "@/ui/hooks/movies/use-get-user-movie"

type Props = {
	movie: Movie
}

export const ToggleMovieSeen = ({ movie }: Props) => {
	const queryClient = useQueryClient()

	const toggleMovieIsSeen = useToggleMovieIsSeen(async () => {
		await queryClient.invalidateQueries([GET_USER_MOVIES_QUERY_KEY])
		await queryClient.invalidateQueries([GET_USER_MOVIE_QUERY_KEY])
	})

	const onToggleMovieIsSeen = () => {
		if (toggleMovieIsSeen.isLoading) return

		toggleMovieIsSeen.mutate({
			movie: mapMovieToInfraModel({
				...movie,
				watchedDate: movie.watchedDate
					? null
					: new Date().toISOString(),
			}),
		})
	}

	return (
		<Button
			type="button"
			onClick={() => onToggleMovieIsSeen()}
			disabled={toggleMovieIsSeen.isLoading}
			variant={movie.watchedDate ? "secondary" : "primary"}
			isLoading={toggleMovieIsSeen.isLoading}
		>
			{movie.watchedDate ? "Retirer des films vus" : "Marquer comme vu"}
		</Button>
	)
}
