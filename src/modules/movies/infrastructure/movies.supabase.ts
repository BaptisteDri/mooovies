import { MoviesOutput } from "../domain/movies.output"
import { supabase } from "@/config/supabase"
import { Movie } from "@/modules/shared/types/movie"
import { Movie as InfraMovie } from "@/modules/movies/infrastructure/movies"
import {
	mapMovieToDomainModel,
	mapMoviesToDomainModel,
} from "../domain/movies.mapper"
import { CustomError } from "@/modules/shared/types/error"

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

	async addMovie({
		movie,
	}: {
		movie: InfraMovie
	}): Promise<{ movie: Movie; error: CustomError | null }> {
		const { error } = await supabase
			.from("films")
			.insert({ ...movie, id: undefined })

		return Promise.resolve({ movie: mapMovieToDomainModel(movie), error })
	}

	async deleteMovie({
		movie,
	}: {
		movie: InfraMovie
	}): Promise<{ movie: Movie; error: CustomError | null }> {
		const { error } = await supabase
			.from("films")
			.delete()
			.eq("id", movie.id)

		return Promise.resolve({ movie: mapMovieToDomainModel(movie), error })
	}

	async toggleMovieIsSeen({
		movie,
	}: {
		movie: InfraMovie
	}): Promise<{ movie: Movie; error: CustomError | null }> {
		const { error } = await supabase
			.from("films")
			.update({ is_seen: movie.is_seen })
			.eq("id", movie.id)

		return Promise.resolve({ movie: mapMovieToDomainModel(movie), error })
	}
}
