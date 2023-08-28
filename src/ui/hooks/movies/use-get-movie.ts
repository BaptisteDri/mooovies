import { useQuery } from "@tanstack/react-query"
import { useActions } from "@/ui/hooks/use-actions"
import { dependencies } from "@/config/dependencies"
import { CustomError } from "@/modules/shared/types/error"

export const GET_USER_MOVIE_QUERY_KEY = "get-user-movie"

export const useGetMovie = ({
	movieId,
	enabled = false,
}: {
	movieId: string
	enabled?: boolean
}) => {
	const actions = useActions()

	return useQuery(
		[GET_USER_MOVIE_QUERY_KEY, movieId],
		() => actions.movies.getUserMovie(dependencies)(movieId),
		{
			enabled,
			onError: (error: CustomError) => console.error(error),
			staleTime: 0,
			cacheTime: 0,
		}
	)
}
