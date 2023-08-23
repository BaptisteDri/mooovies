import { SearchedMovie, SearchedPerson } from "@/modules/shared/types/movie"
import { SearchMoviesOutput } from "../domain/search-movies.output"
import { api } from "@/config/axios-instance"
import {
	mapSearchMoviesToDomainModel,
	mapSearchPersonsToDomainModel,
} from "../domain/search-movies.mapper"

export class SearchMoviesApi implements SearchMoviesOutput {
	searchMovies({ query }: { query: string }): Promise<SearchedMovie[]> {
		const params = { language: "fr-FR", include_adult: false, query }
		const headers = {
			Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
		}

		return api
			.get("/search/movie", { params, headers })
			.then(({ data }) => mapSearchMoviesToDomainModel(data))
	}

	searchPersons({ query }: { query: string }): Promise<SearchedPerson[]> {
		const params = {
			language: "fr-FR",
			include_adult: false,
			query,
		}
		const headers = {
			Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
		}

		return api
			.get("/search/person", { params, headers })
			.then(({ data }) => mapSearchPersonsToDomainModel(data))
	}

	getMovieCredits({ movieId }: { movieId: number }): Promise<string[]> {
		const params = { language: "fr-FR" }
		const headers = {
			Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
		}

		return api
			.get(`/movie/${movieId}/credits`, { params, headers })
			.then(
				({ data }) =>
					data.crew
						.filter((member: any) => member.job === "Director")
						.map((member: any) => member.name) ?? []
			)
	}
}
