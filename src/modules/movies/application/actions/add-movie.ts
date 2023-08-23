import {
	MoviesRepository,
	AddMovieDto,
} from "@/modules/movies/application/movies.repository"
import { CustomError } from "@/modules/shared/types/error"

const ADD_MOVIE_ERROR: CustomError = {
	key: "add_movie_error",
	message: "Error adding movie",
} as const

export const addMovie =
	({ moviesRepository }: { moviesRepository: MoviesRepository }) =>
	async (addMovieDto: AddMovieDto) => {
		try {
			return await moviesRepository.addMovie(addMovieDto)
		} catch (error) {
			throw ADD_MOVIE_ERROR
		}
	}
