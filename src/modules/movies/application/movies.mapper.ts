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

export const mapSearchResultsMovieToAppModel = (
	searchResultsMovie: SearchResultsMovie
): ApplicationModelMovie => ({
	director: searchResultsMovie.Director,
	genre: searchResultsMovie.Genre.split(","),
	poster: searchResultsMovie.Poster,
	runtime: searchResultsMovie.Runtime,
	title: searchResultsMovie.Title,
	year: searchResultsMovie.Released,
})
