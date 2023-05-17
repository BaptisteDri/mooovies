import { Movie } from "@/types/movie"
import { Movie as MovieInfra } from "@/modules/movies/infrastructure/movies"
import { CustomError } from "@/types/error"

export interface MoviesOutput {
	getUserMovies({
		userId,
	}: {
		userId: string
	}): Promise<{ movies: Movie[] | null; error: CustomError | null }>
	addMovie({
		movie,
	}: {
		movie: MovieInfra
	}): Promise<{ movie: Movie | null; error: CustomError | null }>
	deleteMovie({
		movieId,
	}: {
		movieId: number
	}): Promise<{ movie: Movie | null; error: CustomError | null }>
	toggleMovieIsSeen({
		movieId,
		isSeen,
	}: {
		movieId: number
		isSeen: boolean
	}): Promise<{ movie: Movie | null; error: CustomError | null }>
}
