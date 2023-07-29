import { SearchedMovie, SearchedPerson } from "@/types/movie"
import {
	directorFakes,
	searchResultsFakes,
	searchPersonsResultsFakes,
} from "@/modules/search-movies/infrastructure/search-movies.fakes"
import { SearchMoviesInMemory } from "@/modules/search-movies/infrastructure/search-movies.in-memory"
import {
	searchMovies,
	getMovieCredits,
	searchPersons,
} from "./search-movies.actions"
import {
	mapSearchMoviesToDomainModel,
	mapSearchPersonsToDomainModel,
} from "./search-movies.mapper"

describe("[search-movies] unit tests", () => {
	const searchMoviesOutput = new SearchMoviesInMemory()

	beforeEach(() => {
		searchMoviesOutput.setSearchResults(searchResultsFakes)
		searchMoviesOutput.setSearchPersonsResults(searchPersonsResultsFakes)
	})

	describe("when the user wants to search for a movie", () => {
		const query = ""

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
		const movieId = 0

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

	describe("when the user wants to search for a movie related to a person", () => {
		const query = ""

		it("should get the result without error", async () => {
			searchMoviesOutput.setSearchPersonsResults(
				searchPersonsResultsFakes
			)

			const searchedPerson: SearchedPerson = await searchPersons({
				searchMoviesOutput,
				query,
			})

			const expectedSearchedMovies: SearchedPerson =
				mapSearchPersonsToDomainModel(searchPersonsResultsFakes)

			expect(searchedPerson).toEqual(expectedSearchedMovies)
		})

		it("shouldn't get it and throw an error", async () => {
			searchMoviesOutput.setSearchPersonsResults(undefined)

			await expect(
				searchPersons({ searchMoviesOutput, query })
			).rejects.toThrowError()
		})
	})
})
