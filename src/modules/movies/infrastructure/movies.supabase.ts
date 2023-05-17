import { MoviesOutput } from "../domain/movies.output"
import { supabase } from "@/config/supabase"
import { Movie } from "@/types/movie"
import { Movie as InfraMovie } from "@/modules/movies/infrastructure/movies"
import { mapMoviesToDomainModel } from "../domain/movies.mapper"
import { CustomError } from "@/types/error"

export class MoviesSupabase implements MoviesOutput {
	async getUserMovies({
		userId,
	}: {
		userId: string
	}): Promise<{ movies: Movie[] | null; error: CustomError | null }> {
		const { data, error } = await supabase
			.from("films")
			.select()
			.eq("user_id", userId)
		return Promise.resolve({
			movies: data ? mapMoviesToDomainModel(data) : null,
			error,
		})
	}

	async addMovie({ movie }: { movie: InfraMovie }): Promise<void> {
		await supabase.from("films").insert({ ...movie, id: undefined })
	}

	async deleteMovie({ movieId }: { movieId: number }): Promise<void> {
		await supabase.from("films").delete().eq("id", movieId)
	}

	async toggleMovieIsSeen({
		movieId,
		isSeen,
	}: {
		movieId: number
		isSeen: boolean
	}): Promise<void> {
		await supabase
			.from("films")
			.update({ is_seen: isSeen })
			.eq("id", movieId)
	}
}
