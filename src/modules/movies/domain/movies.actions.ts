import { Movie } from "./movie"
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
