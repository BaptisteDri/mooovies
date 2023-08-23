import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useActions } from "@/ui/hooks/use-actions"
import { DeleteMovieDto } from "@/modules/movies/application/movies.repository"
import { dependencies } from "@/config/dependencies"
import { CustomError } from "@/modules/shared/types/error"
import { GET_USER_MOVIES_QUERY_KEY } from "./use-get-user-movies"

export const DELETE_MOVIE_QUERY_KEY = "delete-movie"

export const useDeleteMovie = () => {
	const actions = useActions()
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: [DELETE_MOVIE_QUERY_KEY],
		mutationFn: (deleteMovieDto: DeleteMovieDto) =>
			actions.movies.deleteMovie(dependencies)(deleteMovieDto),
		onError: (error: CustomError) => console.error(error),
		onSuccess: async () =>
			await queryClient.invalidateQueries([GET_USER_MOVIES_QUERY_KEY]),
	})
}
