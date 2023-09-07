import { useMutation } from "@tanstack/react-query"
import { useActions } from "@/ui/hooks/use-actions"
import { DeleteMovieDto } from "@/modules/movies/application/movies.repository"
import { dependencies } from "@/config/dependencies"
import { CustomError } from "@/modules/shared/types/error"

export const DELETE_MOVIE_QUERY_KEY = "delete-movie"

export const useDeleteMovie = (onSuccess?: () => void) => {
	const actions = useActions()

	return useMutation({
		mutationKey: [DELETE_MOVIE_QUERY_KEY],
		mutationFn: (deleteMovieDto: DeleteMovieDto) =>
			actions.movies.deleteMovie(dependencies)(deleteMovieDto),
		onError: (error: CustomError) => console.error(error),
		onSuccess,
	})
}
