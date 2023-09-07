import { useQuery } from "@tanstack/react-query"
import { useActions } from "@/ui/hooks/use-actions"
import { dependencies } from "@/config/dependencies"
import { CustomError } from "@/modules/shared/types/error"

export const GET_POPULAR_MOVIES_QUERY_KEY = "get_popular_movies"

export const useGetPopularMovies = ({
	enabled = false,
}: {
	enabled?: boolean
}) => {
	const actions = useActions()

	return useQuery(
		[GET_POPULAR_MOVIES_QUERY_KEY],
		() => actions.searchMovies.getPopularMovies(dependencies)(),
		{
			enabled,
			onError: (error: CustomError) => console.error(error),
			staleTime: 0,
			cacheTime: 0,
		}
	)
}
