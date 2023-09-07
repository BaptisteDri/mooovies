import { CustomError } from "@/modules/shared/types/error"
import { SearchMoviesRepository } from "@/modules/search-movies/application/search-movies.repository"

const GET_POPULAR_MOVIES_ERROR: CustomError = {
	key: "get_popular_movies_error",
	message: "Error getting popular movies",
} as const

export const getPopularMovies =
	({
		searchMoviesRepository,
	}: {
		searchMoviesRepository: SearchMoviesRepository
	}) =>
	async () => {
		try {
			return await searchMoviesRepository.getPopularMovies()
		} catch (error) {
			throw GET_POPULAR_MOVIES_ERROR
		}
	}
