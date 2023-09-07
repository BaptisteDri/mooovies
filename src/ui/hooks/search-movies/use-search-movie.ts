import { useQuery } from "@tanstack/react-query"
import { useActions } from "@/ui/hooks/use-actions"
import { dependencies } from "@/config/dependencies"
import { CustomError } from "@/modules/shared/types/error"

export const SEARCH_MOVIE_QUERY_KEY = "search_movie"

export const useSearchMovie = ({
	query,
	enabled = false,
}: {
	query: string
	enabled?: boolean
}) => {
	const actions = useActions()

	return useQuery(
		[SEARCH_MOVIE_QUERY_KEY, query],
		() => actions.searchMovies.searchMovie(dependencies)(query),
		{
			enabled,
			onError: (error: CustomError) => console.error(error),
		}
	)
}
