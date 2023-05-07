import { AuthOutput } from "@/modules/auth/auth.output"
import { AuthSupabase } from "@/modules/auth/auth.supabase"
import { MoviesOutput } from "@/modules/movies/domain/movies.output"
import { MoviesInMemory } from "@/modules/movies/infrastructure/movies.in-memory"
import { MoviesSupabase } from "@/modules/movies/infrastructure/movies.supabase"

export type AppOutputs = {
	authOutput: AuthOutput
	moviesOutput: MoviesOutput
}

export const appOutputs: AppOutputs = {
	authOutput: new AuthSupabase(),
	moviesOutput: new MoviesInMemory(),
}
