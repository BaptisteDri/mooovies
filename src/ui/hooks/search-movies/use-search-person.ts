import { useQuery } from "@tanstack/react-query"
import { useActions } from "@/ui/hooks/use-actions"
import { dependencies } from "@/config/dependencies"
import { CustomError } from "@/modules/shared/types/error"

export const SEARCH_PERSON_QUERY_KEY = "search_person"

export const useSearchPerson = ({
	query,
	enabled = false,
}: {
	query: string
	enabled?: boolean
}) => {
	const actions = useActions()

	return useQuery(
		[SEARCH_PERSON_QUERY_KEY, query],
		() => actions.searchMovies.searchPerson(dependencies)(query),
		{
			enabled,
			onError: (error: CustomError) => console.error(error),
		}
	)
}
