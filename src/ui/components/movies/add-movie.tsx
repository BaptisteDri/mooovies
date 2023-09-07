import { Button } from "@/ui/components/shared/button"
import { useAddMovie } from "@/ui/hooks/movies/use-add-movie"
import { useQueryClient } from "@tanstack/react-query"
import { GET_USER_MOVIES_QUERY_KEY } from "@/ui/hooks/movies/use-get-user-movies"
import { Movie } from "@/modules/shared/types/movie"
import { GET_USER_MOVIE_QUERY_KEY } from "@/ui/hooks/movies/use-get-user-movie"

type Props = {
	movie: Omit<Movie, "uuid">
}

export const AddMovie = ({ movie }: Props) => {
	const queryClient = useQueryClient()

	const addMovie = useAddMovie(async () => {
		await queryClient.invalidateQueries([GET_USER_MOVIES_QUERY_KEY])
		await queryClient.invalidateQueries([GET_USER_MOVIE_QUERY_KEY])
	})

	const onAddMovie = async () => {
		addMovie.mutate({
			movie: {
				director: movie.director,
				genre_ids: movie.genreIds.join(", "),
				original_language: movie.originalLanguage,
				original_title: movie.originalTitle,
				overview: movie.overview,
				poster: movie.poster,
				title: movie.title,
				tmdb_id: movie.tmdbId,
				user_id: movie.userId,
				watched_date: null,
				year: movie.year,
			},
		})
	}

	return (
		<Button
			onClick={onAddMovie}
			isLoading={addMovie.isLoading}
			className="flex justify-center"
		>
			Ajouter à ma liste
		</Button>
	)
}
