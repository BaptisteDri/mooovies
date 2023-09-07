import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useActions } from "@/ui/hooks/use-actions"
import { ToggleMovieIsSeenDto } from "@/modules/movies/application/movies.repository"
import { dependencies } from "@/config/dependencies"
import { CustomError } from "@/modules/shared/types/error"
import { GET_USER_MOVIES_QUERY_KEY } from "./use-get-user-movies"

export const TOGGLE_MOVIE_IS_SEEN_QUERY_KEY = "toggle-movie-is-seen"

export const useToggleMovieIsSeen = (onSuccess?: () => void) => {
	const actions = useActions()
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: [TOGGLE_MOVIE_IS_SEEN_QUERY_KEY],
		mutationFn: (toggleMovieIsSeenDto: ToggleMovieIsSeenDto) =>
			actions.movies.toggleMovieIsSeen(dependencies)(
				toggleMovieIsSeenDto
			),
		onError: (error: CustomError) => console.error(error),
		onSuccess,
	})
}
