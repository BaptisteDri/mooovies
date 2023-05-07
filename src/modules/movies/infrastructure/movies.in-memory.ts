import { Movie } from "../domain/movies"
import { MoviesOutput } from "../domain/movies.output"

export class MoviesInMemory implements MoviesOutput {
	private movies: Movie[] | undefined = []
	private movie: Movie | undefined = undefined

	setMovies(movies: Movie[] | undefined): void {
		this.movies = movies ?? undefined
	}

	setMovie(movie: Movie | undefined): void {
		this.movie = movie ?? undefined
	}

	getUserMovies({ userId }: { userId: string }): Promise<Movie[]> {
		if (!this.movies) {
			throw new Error("Please, add a movie to your list")
		}

		return Promise.resolve(this.movies)
	}

	searchMovies({ query }: { query: string }): Promise<Movie> {
		if (!this.movie) {
			throw new Error("An error occured while searching movies")
		}

		return Promise.resolve(this.movie)
	}

	// Vérifier que le film n'a pas déjà été ajouté avant de l'ajouter à la liste
}
