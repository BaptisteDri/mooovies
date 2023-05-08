import { SearchedMovie } from "@/types/movie"
import { searchResultsFakes } from "../infrastructure/search-movies.fakes"
import { SearchMoviesInMemory } from "../infrastructure/search-movies.in-memory"
import { searchMovies } from "./search-movies.actions"
import { mapSearchMoviesToDomainModel } from "./search-movies.mapper"

describe("[search-movies] unit tests", () => {
	const searchMoviesOutput = new SearchMoviesInMemory()

	beforeEach(() => {
		searchMoviesOutput.setSearchResults(searchResultsFakes)
	})

	describe("when the user wants to search for a movie", () => {
		const query: string = ""

		it("should get the result without error", async () => {
			searchMoviesOutput.setSearchResults(searchResultsFakes)

			const searchedMovies: SearchedMovie[] = await searchMovies({
				searchMoviesOutput,
				query,
			})

			const expectedSearchedMovies: SearchedMovie[] =
				mapSearchMoviesToDomainModel(searchResultsFakes)

			expect(searchedMovies).toEqual(expectedSearchedMovies)
		})
	})
})
