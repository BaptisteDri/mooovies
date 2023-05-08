import { Movie as MovieDomain } from "@/modules/movies/domain/movies"

export interface MoviesOutput {
	getUserMovies({ userId }: { userId: string }): Promise<MovieDomain[]>
	searchMovies({ query }: { query: string }): Promise<MovieDomain>
	addMovie({ movie }: { movie: MovieDomain }): Promise<void>
	deleteMovie({ movieId }: { movieId: number }): Promise<void>
	updateMovie({ movie }: { movie: MovieDomain }): Promise<void>
}
