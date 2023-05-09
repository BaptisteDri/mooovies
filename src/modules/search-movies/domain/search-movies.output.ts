import { SearchedMovie } from "@/types/movie"

export interface SearchMoviesOutput {
	searchMovies({ query }: { query: string }): Promise<SearchedMovie[]>
	getMovieCredits({ movieId }: { movieId: number }): Promise<string[]>
}
