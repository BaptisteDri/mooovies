import { CustomError } from "@/modules/shared/types/error"
import { SearchMoviesRepository } from "@/modules/search-movies/application/search-movies.repository"

const SEARCH_PERSON_ERROR: CustomError = {
	key: "search_person_error",
	message: "Error searching person",
} as const

export const searchPerson =
	({
		searchMoviesRepository,
	}: {
		searchMoviesRepository: SearchMoviesRepository
	}) =>
	async (query: string) => {
		try {
			return await searchMoviesRepository.searchPerson(query)
		} catch (error) {
			throw SEARCH_PERSON_ERROR
		}
	}
