import { MoviesOutput } from "../domain/movies.output"
import { supabase } from "@/config/supabase"
import { Movie } from "../domain/movies"
import { api } from "@/config/axios-instance"
import { mapInfraMovieToAppModel } from "../domain/movies.mapper"

export class MoviesSupabase implements MoviesOutput {
	async getUserMovies({ userId }: { userId: string }): Promise<Movie[]> {
		const { data } = await supabase
			.from("movies")
			.select()
			.eq("user_id", userId)
		return Promise.resolve(data ?? [])
	}

	async searchMovies({ query }: { query: string }): Promise<Movie> {
		const params = {
			apiKey: "f1accb5e",
			t: query,
		}

		return api
			.get("/", { params })
			.then(({ data }) => mapInfraMovieToAppModel(data))
	}

	async addMovie({ movie }: { movie: Movie }): Promise<void> {
		await supabase.from("movies").insert(movie)
	}
}
