import {
	MoviesRepository,
	DeleteMovieDto,
} from "@/modules/movies/application/movies.repository"
import { CustomError } from "@/modules/shared/types/error"

const DELETE_MOVIE_ERROR: CustomError = {
	key: "delete_movie_error",
	message: "Error deleting movie",
} as const

export const deleteMovie =
	({ moviesRepository }: { moviesRepository: MoviesRepository }) =>
	async (deleteMovieDto: DeleteMovieDto) => {
		try {
			return await moviesRepository.deleteMovie(deleteMovieDto)
		} catch (error) {
			throw DELETE_MOVIE_ERROR
		}
	}
