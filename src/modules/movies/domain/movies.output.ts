import { Movie } from "@/modules/shared/types/movie"
import { Movie as MovieInfra } from "@/modules/movies/infrastructure/movies"
import { CustomError } from "@/modules/shared/types/error"

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
