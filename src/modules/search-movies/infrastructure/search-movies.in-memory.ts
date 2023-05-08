import { SearchedMovie as DomainSearchedMovie } from "@/types/movie"
import { SearchMoviesOutput } from "../domain/search-movies.output"
import { SearchResults } from "./search-movies"
import { mapSearchMoviesToDomainModel } from "../domain/search-movies.mapper"

export class SearchMoviesInMemory implements SearchMoviesOutput {
	private searchResults: SearchResults | undefined = undefined

	setSearchResults(searchResults: SearchResults | undefined): void {
		this.searchResults = searchResults ?? undefined
	}

	searchMovies({ query }: { query: string }): Promise<DomainSearchedMovie[]> {
		if (!this.searchResults) {
			throw new Error("An error occured while searching movies")
		}

		return Promise.resolve(mapSearchMoviesToDomainModel(this.searchResults))
	}
}
