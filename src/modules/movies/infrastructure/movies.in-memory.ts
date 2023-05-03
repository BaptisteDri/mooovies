import { Movie } from "../domain/movie"
import { MoviesOutput } from "../domain/movies.output"

export class MoviesInMemory implements MoviesOutput {
	private movies: Movie[] | undefined = []

	setMovies(movies: Movie[] | undefined): void {
		this.movies = movies ?? undefined
	}

	getUserMovies({ userId }: { userId: string }): Promise<Movie[]> {
		if (!this.movies) {
			throw new Error("Please, add a movie to your list")
		}

		return Promise.resolve(this.movies)
	}

	// Vérifier que le film n'a pas déjà été ajouté avant de l'ajouter à la liste
}
