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
	}): Promise<{ movie: Movie; error: CustomError | null }>
	deleteMovie({
		movie,
	}: {
		movie: MovieInfra
	}): Promise<{ movie: Movie; error: CustomError | null }>
	toggleMovieIsSeen({
		movie,
	}: {
		movie: MovieInfra
	}): Promise<{ movie: Movie; error: CustomError | null }>
}
