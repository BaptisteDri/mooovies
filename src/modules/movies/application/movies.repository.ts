import { Movie } from "@/modules/shared/types/movie"
import { Movie as MovieInfra } from "@/modules/movies/infrastructure/movies"

export type GetUserMoviesDto = {
	userId: string
	order: "title" | "year" | "added_date"
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
	movie: Omit<MovieInfra, "uuid">
}

export type DeleteMovieDto = {
	movie: MovieInfra
}
export type ToggleMovieIsSeenDto = {
	movie: MovieInfra
}

export type GetUserMovieDto = {
	userId: string
	tmdbId: string
}

export type MoviesRepository = {
	getUserMovies(getUserMoviesDto: GetUserMoviesDto): getUserMoviesRo
	addMovie(addMovieDto: AddMovieDto): Promise<void>
	deleteMovie(deleteMovieDto: DeleteMovieDto): Promise<void>
	toggleMovieIsSeen(toggleMovieIsSeenDto: ToggleMovieIsSeenDto): Promise<void>
	getUserMovie(getUserMovieDto: GetUserMovieDto): Promise<Movie | null>
}
