import { SearchedMovie } from "@/types/movie"
import { SearchResults } from "../infrastructure/search-movies"

export const mapSearchMoviesToDomainModel = (
	searchResults: SearchResults
): SearchedMovie[] =>
	searchResults.results.map((searchedMovie) => ({
		genreIds: searchedMovie.genre_ids,
		id: searchedMovie.id,
		originalLanguage: searchedMovie.original_language,
		originalTitle: searchedMovie.original_title,
		overview: searchedMovie.overview,
		posterPath: searchedMovie.poster_path,
		releaseDate: searchedMovie.release_date,
		title: searchedMovie.title,
	}))
