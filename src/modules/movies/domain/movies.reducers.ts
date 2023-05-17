import { PayloadAction } from "@reduxjs/toolkit"
import { RequestStatus } from "@/types/request-status"
import { MoviesState } from "./movies.state"
import { Movie } from "@/types/movie"
import { CustomError } from "@/types/error"
import { MoviesCallTypes } from "./movies.call-types"
import { mapMovieToDomainModel } from "./movies.mapper"

export const moviesReducers = {
	startCall: (
		state: MoviesState,
		{ payload }: PayloadAction<{ callType: MoviesCallTypes }>
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
		{ payload }: PayloadAction<{ movie: Movie; error: CustomError | null }>
	) => {
		state.movies = state.movies ? [...state.movies, payload.movie] : null
		state.addMovieError = payload.error

		state.addMovieStatus = payload.error
			? RequestStatus.FAILED
			: RequestStatus.COMPLETED
	},
	deleteMovie: (
		state: MoviesState,
		{ payload }: PayloadAction<{ movie: Movie; error: CustomError | null }>
	) => {
		state.movies = state.movies
			? [...state.movies].filter(
					(movie) => movie.id !== payload.movie!.id
			  )
			: null
		state.deleteMovieError = payload.error

		state.deleteMovieStatus = payload.error
			? RequestStatus.FAILED
			: RequestStatus.COMPLETED
	},
	toggleMovieIsSeen: (
		state: MoviesState,
		{ payload }: PayloadAction<{ movie: Movie; error: CustomError | null }>
	) => {
		state.movies = state.movies
			? state.movies.map((movie) =>
					movie.id === payload.movie?.id ? payload.movie : movie
			  )
			: null
		state.toggleMovieIsSeenError = payload.error

		state.toggleMovieIsSeenStatus = payload.error
			? RequestStatus.FAILED
			: RequestStatus.COMPLETED
	},
}
