import { supabase } from "@/config/supabase"
import { mapMoviesToDomainModel } from "@/modules/movies/domain/movies.mapper"
import { MoviesRepository } from "@/modules/movies/application/movies.repository"

export const MoviesSupabase = (): MoviesRepository => ({
	getUserMovies: async ({ userId, filter = "title", pageIndex = 0 }) => {
		const limit = 50
		const from = pageIndex * limit
		const to = from + limit

		const { data } = await supabase
			.from("films")
			.select()
			.eq("user_id", userId)
			.order(filter)
			.range(from, to)

		return Promise.resolve({
			movies: mapMoviesToDomainModel(data ?? []),
			nextPageIndex: pageIndex + 1,
		})
	},
	addMovie: async ({ movie }) => {
		await supabase.from("films").insert({ ...movie, uuid: undefined })
	},
	deleteMovie: async ({ movie }) => {
		await supabase.from("films").delete().eq("uuid", movie.uuid)
	},
	toggleMovieIsSeen: async ({ movie }) => {
		await supabase
			.from("films")
			.update({ is_seen: movie.is_seen })
			.eq("uuid", movie.uuid)
	},
})
