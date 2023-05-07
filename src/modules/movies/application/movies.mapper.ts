import { Movie } from "../domain/movies"
import { Movie as ApplicationModelMovie } from "@/types/movie"

export const mapMoviesToApplicationModel = (
	movies: Movie[]
): ApplicationModelMovie[] => {
	return movies.map((movie: Movie) => ({
		...movie,
		genre: movie.genre.split(","),
	}))
}

export const mapMovieToApplicationModel = (
	movie: Movie
): ApplicationModelMovie => ({
	...movie,
	genre: movie.genre.split(","),
})
