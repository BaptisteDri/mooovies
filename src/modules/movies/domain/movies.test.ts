import { MoviesInMemory } from "../infrastructure/movies.in-memory"
import {
	moviesFakes,
	searchResultsMovieFakes,
} from "../infrastructure/movies.fakes"
import { Movie } from "./movies"
import { getUserMovies, searchMovies } from "./movies.actions"

describe("[movies] unit tests", () => {
	const moviesOutput = new MoviesInMemory()

	beforeEach(() => {
		moviesOutput.setMovies([])
		moviesOutput.setSearchResultsMovie(undefined)
	})

	describe("when the user wants to get his movies list", () => {
		const userId: string = ""

		it("should get it without error", async () => {
			moviesOutput.setMovies(moviesFakes)

			const movies: Movie[] = await getUserMovies({
				moviesOutput,
				userId,
			})

			const expectedMovies: Movie[] = moviesFakes

			expect(movies).toEqual(expectedMovies)
		})

		it("souldn't get it and throw an error", async () => {
			moviesOutput.setMovies(undefined)

			await expect(
				getUserMovies({ moviesOutput, userId })
			).rejects.toThrowError()
		})
	})

	describe("when the user wants to search for a movie", () => {
		const query: string = ""

		it("should get the result without error", async () => {
			moviesOutput.setSearchResultsMovie(searchResultsMovieFakes)

			const searchResultsMovie: SearchResultsMovie = await searchMovies({
				moviesOutput,
				query,
			})

			const expectedSearchResultsMovie: SearchResultsMovie =
				searchResultsMovieFakes

			expect(searchResultsMovie).toEqual(expectedSearchResultsMovie)
		})

		it("souldn't get it and throw an error", async () => {
			moviesOutput.setSearchResultsMovie(undefined)

			await expect(
				searchMovies({ moviesOutput, query })
			).rejects.toThrowError()
		})
	})
})
