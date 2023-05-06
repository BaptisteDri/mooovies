import { MoviesOutput } from "../domain/movies.output"
import { supabase } from "@/config/supabase"
import { Movie } from "../domain/movies"
import { api } from "@/config/axios-instance"

export class MoviesSupabase implements MoviesOutput {
	async getUserMovies({ userId }: { userId: string }): Promise<Movie[]> {
		const { data } = await supabase.from("movies").select()
		return Promise.resolve(data ?? [])
	}

	async searchMovies({
		query,
	}: {
		query: string
	}): Promise<SearchResultsMovie> {
		const params = {
			apiKey: "f1accb5e",
			t: query,
		}

		return api.get("/", { params }).then(({ data }) => data)
	}
}
