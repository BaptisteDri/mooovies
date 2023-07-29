import { SearchedMovie, SearchedPerson } from "@/types/movie"
import { SearchMoviesOutput } from "./search-movies.output"

export const searchMovies = async ({
	searchMoviesOutput,
	query,
}: {
	searchMoviesOutput: SearchMoviesOutput
	query: string
}): Promise<SearchedMovie[]> => {
	try {
		return await searchMoviesOutput.searchMovies({ query })
	} catch (error: any) {
		throw new Error(error)
	}
}

export const searchPersons = async ({
	searchMoviesOutput,
	query,
}: {
	searchMoviesOutput: SearchMoviesOutput
	query: string
}): Promise<SearchedPerson[]> => {
	try {
		return await searchMoviesOutput.searchPersons({ query })
	} catch (error: any) {
		throw new Error(error)
	}
}

export const getMovieCredits = async ({
	searchMoviesOutput,
	movieId,
}: {
	searchMoviesOutput: SearchMoviesOutput
	movieId: number
}): Promise<string[]> => {
	try {
		return await searchMoviesOutput.getMovieCredits({ movieId })
	} catch (error: any) {
		throw new Error(error)
	}
}
