import { MoviesInMemory } from "../infrastructure/movies.in-memory"
import { moviesFakes } from "../infrastructure/movies.fakes"
import { Movie } from "@/types/movie"
import { getUserMovies } from "./movies.actions"
import { mapMoviesToDomainModel } from "./movies.mapper"

describe("[movies] unit tests", () => {
	const moviesOutput = new MoviesInMemory()

	beforeEach(() => {
		moviesOutput.setMovies([])
	})

	describe("when the user wants to get his movies list", () => {
		const userId: string = ""

		it("should get it without error", async () => {
			moviesOutput.setMovies(moviesFakes)

			const movies: Movie[] = await getUserMovies({
				moviesOutput,
				userId,
			})

			const expectedMovies: Movie[] = mapMoviesToDomainModel(moviesFakes)

			expect(movies).toEqual(expectedMovies)
		})

		it("shouldn't get it and throw an error", async () => {
			moviesOutput.setMovies(undefined)

			await expect(
				getUserMovies({ moviesOutput, userId })
			).rejects.toThrowError()
		})
	})
})
