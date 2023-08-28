import { GetUserMoviesDto } from "@/modules/movies/application/movies.repository"
import { useInfiniteQuery } from "@tanstack/react-query"
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

	return useInfiniteQuery({
		queryKey: [GET_USER_MOVIES_QUERY_KEY, getUserMoviesDto],
		queryFn: async ({ pageParam }) =>
			actions.movies.getUserMovies(dependencies)({
				...getUserMoviesDto,
				pageIndex: pageParam,
			}),
		getNextPageParam: (lastPage) =>
			lastPage.movies.length >= 35 ? lastPage.nextPageIndex : undefined,
		enabled,
		staleTime: Infinity,
		onError: (error: CustomError) => console.error(error),
	})
}
