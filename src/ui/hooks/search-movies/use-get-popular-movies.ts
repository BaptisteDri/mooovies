import { useInfiniteQuery } from "@tanstack/react-query"
import { useActions } from "@/ui/hooks/use-actions"
import { dependencies } from "@/config/dependencies"
import { CustomError } from "@/modules/shared/types/error"

export const GET_POPULAR_MOVIES_QUERY_KEY = "get_popular_movies"

export const useGetPopularMovies = ({
	enabled = false,
	pageIndex,
}: {
	enabled?: boolean
	pageIndex?: number
}) => {
	const actions = useActions()

	return useInfiniteQuery({
		queryKey: [GET_POPULAR_MOVIES_QUERY_KEY, pageIndex],
		queryFn: async ({ pageParam }) =>
			actions.searchMovies.getPopularMovies(dependencies)(pageParam),
		getNextPageParam: (lastPage) => lastPage.nextPageIndex,
		enabled,
		staleTime: Infinity,
		onError: (error: CustomError) => console.error(error),
	})
}
