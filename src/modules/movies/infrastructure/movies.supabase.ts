import { MoviesOutput } from "../domain/movies.output"
import { supabase } from "@/config/supabase"
import { Movie } from "../domain/movie"

export class MoviesSupabase implements MoviesOutput {
	async getUserMovies({ userId }: { userId: string }): Promise<Movie[]> {
		const { data } = await supabase.from("movies").select()
		return Promise.resolve(data ?? [])
	}
}
