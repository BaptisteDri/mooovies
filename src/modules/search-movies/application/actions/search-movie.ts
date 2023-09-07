import { CustomError } from "@/modules/shared/types/error"
import { SearchMoviesRepository } from "@/modules/search-movies/application/search-movies.repository"

const SEARCH_MOVIE_ERROR: CustomError = {
	key: "search_movie_error",
	message: "Error searching movie",
} as const

export const searchMovie =
	({
		searchMoviesRepository,
	}: {
		searchMoviesRepository: SearchMoviesRepository
	}) =>
	async (query: string) => {
		try {
			return await searchMoviesRepository.searchMovie(query)
		} catch (error) {
			throw SEARCH_MOVIE_ERROR
		}
	}
