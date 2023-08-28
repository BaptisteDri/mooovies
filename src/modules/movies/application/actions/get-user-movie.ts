import { MoviesRepository } from "@/modules/movies/application/movies.repository"
import { CustomError } from "@/modules/shared/types/error"

const GET_USER_MOVIE_ERROR: CustomError = {
	key: "get_user_movie_error",
	message: "Error getting movie",
} as const

export const getUserMovie =
	({ moviesRepository }: { moviesRepository: MoviesRepository }) =>
	async (movieId: string) => {
		try {
			return await moviesRepository.getUserMovie(movieId)
		} catch (error) {
			throw GET_USER_MOVIE_ERROR
		}
	}
