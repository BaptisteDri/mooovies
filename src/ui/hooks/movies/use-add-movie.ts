import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useActions } from "@/ui/hooks/use-actions"
import { AddMovieDto } from "@/modules/movies/application/movies.repository"
import { dependencies } from "@/config/dependencies"
import { CustomError } from "@/modules/shared/types/error"

export const ADD_MOVIE_QUERY_KEY = "add-movie"

export const useAddMovie = (onSuccess?: () => void) => {
	const actions = useActions()

	return useMutation({
		mutationKey: [ADD_MOVIE_QUERY_KEY],
		mutationFn: (addMovieDto: AddMovieDto) =>
			actions.movies.addMovie(dependencies)(addMovieDto),
		onError: (error: CustomError) => console.error(error),
		onSuccess,
	})
}
