import { SearchedMovie } from "@/modules/shared/types/movie"
import {
	DetailedSearchedMovie,
	SearchedMovieCredits,
} from "../infrastructure/search-movies"

type getPopularMoviesRo = Promise<{
	movies: SearchedMovie[]
	nextPageIndex: number
}>

export type SearchMoviesRepository = {
	searchMovie(query: string): Promise<SearchedMovie[]>
	getPopularMovies(pageIndex?: number): getPopularMoviesRo
	getMovieDetails(id: number): Promise<DetailedSearchedMovie>
	getMovieCredits(id: number): Promise<SearchedMovieCredits>
}
