import { SearchedMovie as DomainSearchedMovie } from "@/types/movie"
import { SearchMoviesOutput } from "../domain/search-movies.output"
import { SearchResults } from "./search-movies"
import { mapSearchMoviesToDomainModel } from "../domain/search-movies.mapper"
import { searchResultsFakes, directorFakes } from "./search-movies.fakes"

export class SearchMoviesInMemory implements SearchMoviesOutput {
	private searchResults: SearchResults | undefined = searchResultsFakes
	private director: string[] | undefined = directorFakes

	setSearchResults(searchResults: SearchResults | undefined): void {
		this.searchResults = searchResults ?? undefined
	}

	searchMovies({ query }: { query: string }): Promise<DomainSearchedMovie[]> {
		if (!this.searchResults) {
			throw new Error("An error occured while searching movies")
		}

		return Promise.resolve(mapSearchMoviesToDomainModel(this.searchResults))
	}

	setDirector(director: string[] | undefined): void {
		this.director = director ?? undefined
	}

	getMovieCredits({ movieId }: { movieId: number }): Promise<string[]> {
		if (!this.director) {
			throw new Error("An error occured while fetching movie credits")
		}

		return Promise.resolve(this.director)
	}
}
