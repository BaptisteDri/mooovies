import { SearchedMovie, SearchedPerson } from "@/types/movie"

export interface SearchMoviesOutput {
	searchMovies({ query }: { query: string }): Promise<SearchedMovie[]>
	searchPersons({ query }: { query: string }): Promise<SearchedPerson[]>
	getMovieCredits({ movieId }: { movieId: number }): Promise<string[]>
}
