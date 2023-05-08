import { SearchedMovie } from "@/types/movie"
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
