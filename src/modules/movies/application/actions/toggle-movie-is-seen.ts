import {
	MoviesRepository,
	ToggleMovieIsSeenDto,
} from "@/modules/movies/application/movies.repository"
import { CustomError } from "@/modules/shared/types/error"

const TOGGLE_MOVIE_IS_SEEN_ERROR: CustomError = {
	key: "toggle_movie_is_seen_error",
	message: "Error toggling movie is seen",
} as const

export const toggleMovieIsSeen =
	({ moviesRepository }: { moviesRepository: MoviesRepository }) =>
	async (toggleMovieIsSeenDto: ToggleMovieIsSeenDto) => {
		try {
			return await moviesRepository.toggleMovieIsSeen(
				toggleMovieIsSeenDto
			)
		} catch (error) {
			throw TOGGLE_MOVIE_IS_SEEN_ERROR
		}
	}
