import { supabase } from "@/config/supabase"
import {
	mapMovieToDomainModel,
	mapMoviesToDomainModel,
} from "@/modules/movies/domain/movies.mapper"
import { MoviesRepository } from "@/modules/movies/application/movies.repository"

export const MoviesSupabase = (): MoviesRepository => ({
	getUserMovies: async ({
		userId,
		order = "title",
		pageIndex = 0,
		filters,
	}) => {
		const limit = 35
		const from = pageIndex === 0 ? pageIndex * limit : pageIndex * limit + 1
		const to = pageIndex * limit + limit

		const { data } = await supabase
			.from("films")
			.select()
			.eq("user_id", userId)
			// .like("genre_ids", filters?.genreId ? filters.genreId : "%")
			.ilike("title", filters?.title ? `%${filters.title}%` : "%")
			.order(order)
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

	getUserMovie: async (movieId) => {
		const { data } = await supabase
			.from("films")
			.select()
			.eq("uuid", movieId)

		if (data?.length === 0 || !data) return

		return mapMovieToDomainModel(data[0])
	},
})
