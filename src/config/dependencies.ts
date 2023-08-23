import { MoviesRepository } from "@/modules/movies/application/movies.repository"
import { MoviesSupabase } from "@/modules/movies/infrastructure/movies.supabase"

export type Dependencies = {
	moviesRepository: MoviesRepository
}
export const dependencies: Dependencies = {
	moviesRepository: MoviesSupabase(),
}
