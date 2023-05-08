import { searchResultsFakes } from "../infrastructure/search-movies.fakes"
import { SearchMoviesInMemory } from "../infrastructure/search-movies.in-memory"

describe("[search-movies] unit tests", () => {
	const searchMoviesOutput = new SearchMoviesInMemory()

	beforeEach(() => {
		searchMoviesOutput.setSearchResults(undefined)
	})

	describe("when the user wants to search for a movie", () => {
		const query: string = ""

		it("should get the result without error", async () => {
			searchMoviesOutput.setSearchResults(searchResultsFakes)
		})
	})
})
