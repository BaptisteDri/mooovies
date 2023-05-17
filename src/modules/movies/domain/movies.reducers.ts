import { AuthState } from "@/modules/auth/auth.state"
import { PayloadAction } from "@reduxjs/toolkit"
import { AuthCallTypes } from "@/modules/auth/auth.call-types"
import { RequestStatus } from "@/types/request-status"
import { MoviesState } from "./movies.state"
import { Movie } from "@/types/movie"
import { CustomError } from "@/types/error"

export const moviesReducers = {
	startCall: (
		state: AuthState,
		{ payload }: PayloadAction<{ callType: AuthCallTypes }>
	) => {
		state[payload.callType] = RequestStatus.LOADING
	},
	getUserMovies: (
		state: MoviesState,
		{
			payload,
		}: PayloadAction<{ movies: Movie[] | null; error: CustomError | null }>
	) => {
		state.movies = payload.movies
		state.getUserMoviesError = payload.error

		state.getUserMoviesStatus = payload.error
			? RequestStatus.FAILED
			: RequestStatus.COMPLETED
	},
	addMovie: (
		state: MoviesState,
		{ payload }: PayloadAction<{ error: CustomError | null }>
	) => {
		state.addMovieError = payload.error

		state.addMovieStatus = payload.error
			? RequestStatus.FAILED
			: RequestStatus.COMPLETED
	},
	deleteMovie: (
		state: MoviesState,
		{ payload }: PayloadAction<{ error: CustomError | null }>
	) => {
		state.deleteMovieError = payload.error

		state.deleteMovieStatus = payload.error
			? RequestStatus.FAILED
			: RequestStatus.COMPLETED
	},
	toggleMovieIsSeen: (
		state: MoviesState,
		{ payload }: PayloadAction<{ error: CustomError | null }>
	) => {
		state.toggleMovieIsSeenError = payload.error

		state.toggleMovieIsSeenStatus = payload.error
			? RequestStatus.FAILED
			: RequestStatus.COMPLETED
	},
}
