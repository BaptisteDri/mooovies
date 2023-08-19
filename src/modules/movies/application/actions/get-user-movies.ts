import {
	MoviesRepository,
	GetUserMoviesDto,
} from "@/modules/movies/application/movies.repository"
import { CustomError } from "@/modules/shared/types/error"

const GET_USER_MOVIES_ERROR: CustomError = {
	key: "get_user_movies_error",
	message: "Error getting user movies",
} as const

export const getUserMovies =
	({ moviesRepository }: { moviesRepository: MoviesRepository }) =>
	async (getUserMoviesDto: GetUserMoviesDto) => {
		try {
			return await moviesRepository.getUserMovies(getUserMoviesDto)
		} catch (error) {
			throw GET_USER_MOVIES_ERROR
		}
	}
