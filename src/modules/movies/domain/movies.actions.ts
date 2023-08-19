import { Movie } from "@/modules/shared/types/movie"
import { Movie as InfraMovie } from "@/modules/movies/infrastructure/movies"
import { MoviesOutput } from "./movies.output"
import { moviesSlice } from "./movies.slice"
import { MoviesCallTypes } from "./movies.call-types"
import { CustomError } from "@/modules/shared/types/error"

const { actions } = moviesSlice

export const getUserMovies =
	({ userId }: { userId: string }) =>
	async (
		dispatch: any,
		_: any,
		{ moviesOutput }: { moviesOutput: MoviesOutput }
	) => {
		dispatch(
			actions.startCall({ callType: MoviesCallTypes.GET_USER_MOVIES })
		)

		const getUserMoviesRo: {
			movies: Movie[] | null
			error: CustomError | null
		} = await moviesOutput.getUserMovies({ userId })

		dispatch(actions.getUserMovies(getUserMoviesRo))
	}

export const addMovie =
	({ movie }: { movie: InfraMovie }) =>
	async (
		dispatch: any,
		_: any,
		{ moviesOutput }: { moviesOutput: MoviesOutput }
	) => {
		dispatch(actions.startCall({ callType: MoviesCallTypes.ADD_MOVIE }))

		const addMovieRo: {
			movie: Movie
			error: CustomError | null
		} = await moviesOutput.addMovie({ movie })

		dispatch(actions.addMovie(addMovieRo))
	}

export const deleteMovie =
	({ movie }: { movie: InfraMovie }) =>
	async (
		dispatch: any,
		_: any,
		{ moviesOutput }: { moviesOutput: MoviesOutput }
	) => {
		dispatch(actions.startCall({ callType: MoviesCallTypes.DELETE_MOVIE }))

		const deleteMovieRo: {
			movie: Movie
			error: CustomError | null
		} = await moviesOutput.deleteMovie({ movie })

		dispatch(actions.deleteMovie(deleteMovieRo))
	}

export const toggleMovieIsSeen =
	({ movie }: { movie: InfraMovie }) =>
	async (
		dispatch: any,
		_: any,
		{ moviesOutput }: { moviesOutput: MoviesOutput }
	) => {
		dispatch(
			actions.startCall({
				callType: MoviesCallTypes.TOGGLE_MOVIE_IS_SEEN,
			})
		)

		const toggleMovieIsSeenRo: {
			movie: Movie
			error: CustomError | null
		} = await moviesOutput.toggleMovieIsSeen({ movie })

		dispatch(actions.toggleMovieIsSeen(toggleMovieIsSeenRo))
	}
