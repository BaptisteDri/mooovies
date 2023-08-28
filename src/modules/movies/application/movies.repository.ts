import { Movie } from "@/modules/shared/types/movie"
import { Movie as MovieInfra } from "@/modules/movies/infrastructure/movies"

export type GetUserMoviesDto = {
	userId: string
	order: "title" | "year" | "director"
	pageIndex?: number
	filters?: {
		genreId?: string
		isSeen?: boolean
		title?: string
	}
}

type getUserMoviesRo = Promise<{
	movies: Movie[]
	nextPageIndex: number
}>

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
	getUserMovies(getUserMoviesDto: GetUserMoviesDto): getUserMoviesRo
	addMovie(addMovieDto: AddMovieDto): Promise<void>
	deleteMovie(deleteMovieDto: DeleteMovieDto): Promise<void>
	toggleMovieIsSeen(toggleMovieIsSeenDto: ToggleMovieIsSeenDto): Promise<void>
	getUserMovie(movieId: string): Promise<Movie | undefined>
}
