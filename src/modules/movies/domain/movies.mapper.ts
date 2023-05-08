import { SearchResultsMovie as InfraMovie } from "../infrastructure/movies"
import { Movie } from "./movies"

export const mapInfraMovieToAppModel = (
	searchResultsMovie: InfraMovie
): Movie => ({
	id: 1,
	is_seen: false,
	director: searchResultsMovie.Director,
	genre: searchResultsMovie.Genre,
	poster: searchResultsMovie.Poster,
	runtime: searchResultsMovie.Runtime,
	title: searchResultsMovie.Title,
	year: searchResultsMovie.Released,
})
