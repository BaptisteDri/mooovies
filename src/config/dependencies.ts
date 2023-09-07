import { MoviesRepository } from "@/modules/movies/application/movies.repository"
import { MoviesSupabase } from "@/modules/movies/infrastructure/movies.supabase"
import { SearchMoviesRepository } from "@/modules/search-movies/application/search-movies.repository"
import { SearchMoviesApi } from "@/modules/search-movies/infrastructure/search-movies.api"

export type Dependencies = {
	moviesRepository: MoviesRepository
	searchMoviesRepository: SearchMoviesRepository
}
export const dependencies: Dependencies = {
	moviesRepository: MoviesSupabase(),
	searchMoviesRepository: SearchMoviesApi(),
}
