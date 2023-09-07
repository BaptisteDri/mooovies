import { useQuery } from "@tanstack/react-query"
import { useActions } from "@/ui/hooks/use-actions"
import { dependencies } from "@/config/dependencies"
import { CustomError } from "@/modules/shared/types/error"

export const GET_MOVIE_DETAILS_QUERY_KEY = "get_movie_details"

export const useGetMovieDetails = ({
	tmdbId,
	enabled = false,
}: {
	tmdbId: number
	enabled?: boolean
}) => {
	const actions = useActions()

	return useQuery(
		[GET_MOVIE_DETAILS_QUERY_KEY, tmdbId],
		() => actions.searchMovies.getMovieDetails(dependencies)(tmdbId),
		{
			enabled,
			onError: (error: CustomError) => console.error(error),
		}
	)
}
