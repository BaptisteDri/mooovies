import { SearchedMovie as DomainSearchedMovie } from "@/types/movie"
import { SearchedPerson as DomainSearchedPerson } from "@/types/movie"
import { SearchMoviesOutput } from "@/modules/search-movies/domain/search-movies.output"
import {
	SearchResults,
	SearchPersonsResults,
} from "@/modules/search-movies/infrastructure/search-movies"
import {
	mapSearchMoviesToDomainModel,
	mapSearchPersonsToDomainModel,
} from "@/modules/search-movies/domain/search-movies.mapper"
import {
	searchResultsFakes,
	directorFakes,
	searchPersonsResultsFakes,
} from "@/modules/search-movies/infrastructure/search-movies.fakes"

export class SearchMoviesInMemory implements SearchMoviesOutput {
	private searchResults: SearchResults | undefined = searchResultsFakes
	private searchPersonsResults: SearchPersonsResults | undefined =
		searchPersonsResultsFakes
	private director: string[] | undefined = directorFakes

	setSearchResults(searchResults: SearchResults | undefined): void {
		this.searchResults = searchResults ?? undefined
	}

	setSearchPersonsResults(
		searchPersonResults: SearchPersonsResults | undefined
	): void {
		this.searchPersonsResults = searchPersonResults ?? undefined
	}

	searchPersons({
		query,
	}: {
		query: string
	}): Promise<DomainSearchedPerson[]> {
		if (!this.searchPersonsResults) {
			throw new Error("An error occured while searching persons")
		}

		return Promise.resolve(
			mapSearchPersonsToDomainModel(this.searchPersonsResults)
		)
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
