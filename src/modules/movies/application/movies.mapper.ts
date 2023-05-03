import { Movie } from "../domain/movie"
import { Movie as ApplicationModelMovie } from "@/types/movie"

export const mapMoviesToApplicationModel = (
	movies: Movie[]
): ApplicationModelMovie[] => {
	return movies.map((movie: Movie) => ({
		...movie,
		genre: movie.genre.split(","),
	}))
}
