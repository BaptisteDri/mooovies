import { MoviesOutput } from "../domain/movies.output"
import { supabase } from "@/config/supabase"
import { Movie } from "@/types/movie"
import { Movie as InfraMovie } from "@/modules/movies/infrastructure/movies"
import { mapMoviesToDomainModel } from "../domain/movies.mapper"

export class MoviesSupabase implements MoviesOutput {
	async getUserMovies({ userId }: { userId: string }): Promise<Movie[]> {
		const { data } = await supabase
			.from("films")
			.select()
			.eq("user_id", userId)
		return Promise.resolve(data ? mapMoviesToDomainModel(data) : [])
	}

	async addMovie({ movie }: { movie: InfraMovie }): Promise<void> {
		await supabase.from("films").insert(movie)
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
