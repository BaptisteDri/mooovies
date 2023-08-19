import { Movie } from "@/modules/shared/types/movie"
import { Movie as MovieInfra } from "@/modules/movies/infrastructure/movies"

export type GetUserMoviesDto = {
	userId: string
}

export type AddMovieDto = {
	movie: MovieInfra
}

export type DeleteMovieDto = {
	movie: MovieInfra
}
export type ToggleMovieIsSeenDto = {
	movie: MovieInfra
}

export type MoviesRepository = {
	getUserMovies(getUserMoviesDto: GetUserMoviesDto): Promise<Movie[] | null>
	addMovie(addMovieDto: AddMovieDto): Promise<void>
	deleteMovie(deleteMovieDto: DeleteMovieDto): Promise<void>
	toggleMovieIsSeen(toggleMovieIsSeenDto: ToggleMovieIsSeenDto): Promise<void>
}
