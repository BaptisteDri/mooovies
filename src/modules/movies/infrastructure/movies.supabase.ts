import { supabase } from "@/config/supabase"
import { mapMoviesToDomainModel } from "@/modules/movies/domain/movies.mapper"
import { MoviesRepository } from "@/modules/movies/application/movies.repository"

export const MoviesSupabase = (): MoviesRepository => ({
	getUserMovies: async ({ userId }) => {
		const { data } = await supabase
			.from("films")
			.select()
			.eq("user_id", userId)

		return Promise.resolve(data ? mapMoviesToDomainModel(data) : null)
	},
	addMovie: async ({ movie }) => {
		await supabase.from("films").insert({ ...movie, id: undefined })
	},
	deleteMovie: async ({ movie }) => {
		await supabase.from("films").delete().eq("id", movie.id)
	},
	toggleMovieIsSeen: async ({ movie }) => {
		await supabase
			.from("films")
			.update({ is_seen: movie.is_seen })
			.eq("id", movie.id)
	},
})
