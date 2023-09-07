import { api } from "@/config/axios-instance"
import { mapSearchMoviesToDomainModel } from "../domain/search-movies.mapper"
import { SearchMoviesRepository } from "../application/search-movies.repository"

export const SearchMoviesApi = (): SearchMoviesRepository => ({
	searchMovie: async (query) =>
		api
			.get("/search/movie", {
				params: { language: "fr-FR", include_adult: false, query },
				headers: {
					Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
				},
			})
			.then(({ data }) => mapSearchMoviesToDomainModel(data)),

	getPopularMovies: async (pageIndex = 1) =>
		api
			.get("/movie/popular", {
				params: {
					language: "fr-FR",
					include_adult: false,
					page: pageIndex,
				},
				headers: {
					Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
				},
			})
			.then(({ data }) => ({
				movies: mapSearchMoviesToDomainModel(data),
				nextPageIndex: pageIndex + 1,
			})),

	getMovieDetails: async (tmdbId) =>
		api
			.get(`/movie/${tmdbId}`, {
				params: {
					language: "fr-FR",
					include_adult: false,
				},
				headers: {
					Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
				},
			})
			.then(({ data }) => data),

	getMovieCredits: async (tmdbId) =>
		api
			.get(`/movie/${tmdbId}/credits`, {
				params: {
					language: "fr-FR",
				},
				headers: {
					Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
				},
			})
			.then(({ data }) => data),
})
