import { CustomError } from "@/types/error"
import { Movie } from "@/types/movie"
import { RequestStatus } from "@/types/request-status"

export interface MoviesState {
	movies: Movie[] | null
	getUserMoviesError: CustomError | null
	getUserMoviesStatus: RequestStatus
	addMovieError: CustomError | null
	addMovieStatus: RequestStatus
	deleteMovieError: CustomError | null
	deleteMovieStatus: RequestStatus
	toggleMovieIsSeenError: CustomError | null
	toggleMovieIsSeenStatus: RequestStatus
}

export const initialState: MoviesState = {
	movies: null,
	getUserMoviesError: null,
	getUserMoviesStatus: RequestStatus.IDLE,
	addMovieError: null,
	addMovieStatus: RequestStatus.IDLE,
	deleteMovieError: null,
	deleteMovieStatus: RequestStatus.IDLE,
	toggleMovieIsSeenError: null,
	toggleMovieIsSeenStatus: RequestStatus.IDLE,
}
