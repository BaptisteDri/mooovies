import { CustomError } from "@/modules/shared/types/error"
import { SearchMoviesRepository } from "@/modules/search-movies/application/search-movies.repository"

const GET_MOVIE_CREDITS_ERROR: CustomError = {
	key: "get_movie_credits_error",
	message: "Error getting movie credits",
} as const

export const getMovieCredits =
	({
		searchMoviesRepository,
	}: {
		searchMoviesRepository: SearchMoviesRepository
	}) =>
	async (tmdbId: number) => {
		try {
			return await searchMoviesRepository.getMovieCredits(tmdbId)
		} catch (error) {
			throw GET_MOVIE_CREDITS_ERROR
		}
	}
