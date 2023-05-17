import { Movie } from "@/types/movie"
import { Movie as InfraMovie } from "@/modules/movies/infrastructure/movies"
import { MoviesOutput } from "./movies.output"
import { moviesSlice } from "./movies.slice"
import { MoviesCallTypes } from "./movies.call-types"
import { CustomError } from "@/types/error"

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

// export const getUserMovies = async ({
// 	moviesOutput,
// 	userId,
// }: {
// 	moviesOutput: MoviesOutput
// 	userId: string
// }): Promise<Movie[]> => {
// 	try {
// 		return await moviesOutput.getUserMovies({ userId })
// 	} catch (error: any) {
// 		throw new Error(error)
// 	}
// }

// export const addMovie = async ({
// 	moviesOutput,
// 	movie,
// }: {
// 	moviesOutput: MoviesOutput
// 	movie: InfraMovie
// }): Promise<void> => {
// 	try {
// 		return await moviesOutput.addMovie({ movie })
// 	} catch (error: any) {
// 		throw new Error(error)
// 	}
// }

// export const deleteMovie = async ({
// 	moviesOutput,
// 	movieId,
// }: {
// 	moviesOutput: MoviesOutput
// 	movieId: number
// }): Promise<void> => {
// 	try {
// 		return await moviesOutput.deleteMovie({ movieId })
// 	} catch (error: any) {
// 		throw new Error(error)
// 	}
// }

// export const toggleMovieIsSeen = async ({
// 	moviesOutput,
// 	movieId,
// 	isSeen,
// }: {
// 	moviesOutput: MoviesOutput
// 	movieId: number
// 	isSeen: boolean
// }): Promise<void> => {
// 	try {
// 		return await moviesOutput.toggleMovieIsSeen({ movieId, isSeen })
// 	} catch (error: any) {
// 		throw new Error(error)
// 	}
// }
