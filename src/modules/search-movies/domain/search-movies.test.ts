import { SearchedMovie } from "@/types/movie"
import {
	directorFakes,
	searchResultsFakes,
} from "../infrastructure/search-movies.fakes"
import { SearchMoviesInMemory } from "../infrastructure/search-movies.in-memory"
import { searchMovies, getMovieCredits } from "./search-movies.actions"
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

		it("shouldn't get it and throw an error", async () => {
			searchMoviesOutput.setSearchResults(undefined)

			await expect(
				searchMovies({ searchMoviesOutput, query })
			).rejects.toThrowError()
		})
	})

	describe("when the user wants to get searched movie director", () => {
		const movieId: number = 0

		it("should get it without error", async () => {
			searchMoviesOutput.setDirector(directorFakes)

			const director: string[] = await getMovieCredits({
				searchMoviesOutput,
				movieId,
			})

			const expectedDirector: string[] = directorFakes

			expect(director).toEqual(expectedDirector)
		})

		it("shouldn't get it and throw an error", async () => {
			searchMoviesOutput.setDirector(undefined)

			await expect(
				getMovieCredits({ searchMoviesOutput, movieId })
			).rejects.toThrowError()
		})
	})
})
