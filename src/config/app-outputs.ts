import { AuthOutput } from "@/modules/auth/auth.output"
import { AuthSupabase } from "@/modules/auth/auth.supabase"
import { MoviesOutput } from "@/modules/movies/domain/movies.output"
import { MoviesSupabase } from "@/modules/movies/infrastructure/movies.supabase"
import { SearchMoviesOutput } from "@/modules/search-movies/domain/search-movies.output"
import { SearchMoviesApi } from "@/modules/search-movies/infrastructure/search-movies.api"

export type AppOutputs = {
	authOutput: AuthOutput
	moviesOutput: MoviesOutput
	searchMoviesOutput: SearchMoviesOutput
}

export const appOutputs: AppOutputs = {
	authOutput: new AuthSupabase(),
	moviesOutput: new MoviesSupabase(),
	searchMoviesOutput: new SearchMoviesApi(),
}
