import { Movie } from "./movies"
import { MoviesOutput } from "./movies.output"

export const getUserMovies = async ({
	moviesOutput,
	userId,
}: {
	moviesOutput: MoviesOutput
	userId: string
}): Promise<Movie[]> => {
	try {
		return await moviesOutput.getUserMovies({ userId })
	} catch (error: any) {
		throw new Error(error)
	}
}

export const searchMovies = async ({
	moviesOutput,
	query,
}: {
	moviesOutput: MoviesOutput
	query: string
}): Promise<Movie> => {
	try {
		return await moviesOutput.searchMovies({ query })
	} catch (error: any) {
		throw new Error(error)
	}
}

export const addMovie = async ({
	moviesOutput,
	movie,
}: {
	moviesOutput: MoviesOutput
	movie: Movie
}): Promise<void> => {
	try {
		return await moviesOutput.addMovie({ movie })
	} catch (error: any) {
		throw new Error(error)
	}
}

export const deleteMovie = async ({
	moviesOutput,
	movieId,
}: {
	moviesOutput: MoviesOutput
	movieId: number
}): Promise<void> => {
	try {
		return await moviesOutput.deleteMovie({ movieId })
	} catch (error: any) {
		throw new Error(error)
	}
}

export const updateMovie = async ({
	moviesOutput,
	movie,
}: {
	moviesOutput: MoviesOutput
	movie: Movie
}): Promise<void> => {
	try {
		return await moviesOutput.updateMovie({ movie })
	} catch (error: any) {
		throw new Error(error)
	}
}
