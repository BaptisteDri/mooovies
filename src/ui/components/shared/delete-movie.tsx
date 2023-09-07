import { Movie } from "@/modules/shared/types/movie"
import { mapMovieToInfraModel } from "@/modules/movies/infrastructure/movies.mapper"
import { useDeleteMovie } from "@/ui/hooks/movies/use-delete-movie"
import { Button } from "@/ui/components/shared/button"
import { GET_USER_MOVIES_QUERY_KEY } from "@/ui/hooks/movies/use-get-user-movies"
import { useQueryClient } from "@tanstack/react-query"
import { GET_USER_MOVIE_QUERY_KEY } from "@/ui/hooks/movies/use-get-user-movie"

type Props = {
	movie: Movie
}

export const DeleteMovie = ({ movie }: Props) => {
	const queryClient = useQueryClient()

	const deleteMovie = useDeleteMovie(async () => {
		await queryClient.invalidateQueries([GET_USER_MOVIES_QUERY_KEY])
		await queryClient.invalidateQueries([GET_USER_MOVIE_QUERY_KEY])
	})

	const onDeleteMovie = () => {
		deleteMovie.mutate({ movie: mapMovieToInfraModel(movie) })
	}

	return (
		<Button
			onClick={onDeleteMovie}
			variant="danger"
			isLoading={deleteMovie.isLoading}
		>
			Supprimer de la liste
		</Button>
	)
}
