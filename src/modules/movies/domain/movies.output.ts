import { Movie } from "@/types/movie"
import { Movie as MovieInfra } from "@/modules/movies/infrastructure/movies"

export interface MoviesOutput {
	getUserMovies({ userId }: { userId: string }): Promise<Movie[]>
	addMovie({ movie }: { movie: MovieInfra }): Promise<void>
	deleteMovie({ movieId }: { movieId: number }): Promise<void>
	toggleMovieIsSeen({
		movieId,
		isSeen,
	}: {
		movieId: number
		isSeen: boolean
	}): Promise<void>
}
