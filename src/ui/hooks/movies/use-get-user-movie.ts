import { useQuery } from "@tanstack/react-query"
import { useActions } from "@/ui/hooks/use-actions"
import { dependencies } from "@/config/dependencies"
import { CustomError } from "@/modules/shared/types/error"
import { GetUserMovieDto } from "@/modules/movies/application/movies.repository"

export const GET_USER_MOVIE_QUERY_KEY = "get-user-movie"

export const useGetUserMovie = ({
	getUserMovieDto,
	enabled = false,
}: {
	getUserMovieDto: GetUserMovieDto
	enabled?: boolean
}) => {
	const actions = useActions()

	return useQuery(
		[GET_USER_MOVIE_QUERY_KEY, getUserMovieDto],
		() => actions.movies.getUserMovie(dependencies)(getUserMovieDto),
		{
			enabled,
			onError: (error: CustomError) => console.error(error),
		}
	)
}
