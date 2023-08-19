import { GetUserMoviesDto } from "@/modules/movies/application/movies.repository"
import { useQuery } from "@tanstack/react-query"
import { useActions } from "@/ui/hooks/use-actions"
import { dependencies } from "@/config/dependencies"
import { CustomError } from "@/modules/shared/types/error"

export const GET_USER_MOVIES_QUERY_KEY = "get-user-movies"

export const useGetUserMovies = ({
	getUserMoviesDto,
	enabled = false,
}: {
	getUserMoviesDto: GetUserMoviesDto
	enabled?: boolean
}) => {
	const actions = useActions()

	return useQuery(
		[GET_USER_MOVIES_QUERY_KEY, getUserMoviesDto],
		() => actions.movies.getUserMovies(dependencies)(getUserMoviesDto),
		{
			enabled,
			onError: (error: CustomError) => console.error(error),
		}
	)
}
