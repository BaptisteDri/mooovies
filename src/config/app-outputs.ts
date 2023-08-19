import { AuthOutput } from "@/modules/auth/auth.output"
import { AuthSupabase } from "@/modules/auth/auth.supabase"
import { SearchMoviesOutput } from "@/modules/search-movies/domain/search-movies.output"
import { SearchMoviesApi } from "@/modules/search-movies/infrastructure/search-movies.api"

export type AppOutputs = {
	authOutput: AuthOutput
	searchMoviesOutput: SearchMoviesOutput
}

export const appOutputs: AppOutputs = {
	authOutput: new AuthSupabase(),
	searchMoviesOutput: new SearchMoviesApi(),
}
