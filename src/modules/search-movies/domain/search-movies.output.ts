import { SearchedMovie } from "@/types/movie"

export interface SearchMoviesOutput {
	searchMovies({ query }: { query: string }): Promise<SearchedMovie[]>
}
