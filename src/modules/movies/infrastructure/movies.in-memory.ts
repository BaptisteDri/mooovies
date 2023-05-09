import { Movie } from "@/types/movie"
import { Movie as InfraMovie } from "@/modules/movies/infrastructure/movies"
import { MoviesOutput } from "../domain/movies.output"
import { moviesFakes } from "./movies.fakes"
import { mapMoviesToDomainModel } from "../domain/movies.mapper"

export class MoviesInMemory implements MoviesOutput {
	private movies: InfraMovie[] | undefined = moviesFakes

	setMovies(movies: InfraMovie[] | undefined): void {
		this.movies = movies ?? undefined
	}

	getUserMovies({ userId }: { userId: string }): Promise<Movie[]> {
		if (!this.movies) {
			throw new Error("Please, add a movie to your list")
		}

		return Promise.resolve(mapMoviesToDomainModel(this.movies))
	}

	addMovie({ movie }: { movie: InfraMovie }): Promise<void> {
		return Promise.resolve()
	}

	deleteMovie({ movieId }: { movieId: number }): Promise<void> {
		return Promise.resolve()
	}

	toggleMovieIsSeen({
		movieId,
		isSeen,
	}: {
		movieId: number
		isSeen: boolean
	}): Promise<void> {
		return Promise.resolve()
	}
}
