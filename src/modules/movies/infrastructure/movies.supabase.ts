import { supabase } from "@/config/supabase"
import {
	mapMovieToDomainModel,
	mapMoviesToDomainModel,
} from "@/modules/movies/domain/movies.mapper"
import { MoviesRepository } from "@/modules/movies/application/movies.repository"

export const LIMIT = 33

export const MoviesSupabase = (): MoviesRepository => ({
	getUserMovies: async ({
		userId,
		order = "added_date",
		pageIndex = 0,
		filters,
	}) => {
		const from = pageIndex * LIMIT
		const to = pageIndex * LIMIT + LIMIT - 1

		const query = supabase
			.from("films")
			.select()
			.eq("user_id", userId)
			.range(from, to)

		if (order === "year" || order === "added_date") {
			query.order(order, { ascending: false })
		} else {
			query.order(order)
		}

		if (filters?.title) {
			query.ilike("title", `%${filters?.title}%`) // @TODO: replace by searchText within title, original_title, director
		}

		if (filters?.genreId) {
			query.ilike("genre_ids", `%${filters.genreId}%`)
		}

		if (filters?.isSeen === true) {
			query.not("watched_date", "is", null)
		} else if (filters?.isSeen === false) {
			query.is("watched_date", null)
		}

		const { data } = await query

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
			.update({ watched_date: movie.watched_date })
			.eq("uuid", movie.uuid)
	},

	getUserMovie: async ({ tmdbId, userId }) => {
		const { data } = await supabase
			.from("films")
			.select()
			.eq("tmdb_id", tmdbId)
			.eq("user_id", userId)

		if (data?.length === 0 || !data) return null

		return mapMovieToDomainModel(data[0]) ?? null
	},
})
