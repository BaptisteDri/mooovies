import { SearchedMovie } from "@/modules/shared/types/movie"
import {
	DetailedSearchedMovie,
	SearchedMovieCredits,
} from "../infrastructure/search-movies"

export type SearchMoviesRepository = {
	searchMovie(query: string): Promise<SearchedMovie[]>
	getPopularMovies(): Promise<SearchedMovie[]>
	getMovieDetails(id: number): Promise<DetailedSearchedMovie>
	getMovieCredits(id: number): Promise<SearchedMovieCredits>
}
