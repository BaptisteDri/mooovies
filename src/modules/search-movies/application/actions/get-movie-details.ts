import { CustomError } from "@/modules/shared/types/error"
import { SearchMoviesRepository } from "@/modules/search-movies/application/search-movies.repository"

const GET_MOVIE_DETAILS_ERROR: CustomError = {
	key: "get_movie_details_error",
	message: "Error getting movie details",
} as const

export const getMovieDetails =
	({
		searchMoviesRepository,
	}: {
		searchMoviesRepository: SearchMoviesRepository
	}) =>
	async (tmdbId: number) => {
		try {
			return await searchMoviesRepository.getMovieDetails(tmdbId)
		} catch (error) {
			throw GET_MOVIE_DETAILS_ERROR
		}
	}
