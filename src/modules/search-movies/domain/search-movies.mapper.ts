import { SearchedMovie, SearchedPerson } from "@/modules/shared/types/movie"
import {
	SearchPersonsResults,
	SearchResults,
	SearchedMovie as InfraSearchedMovie,
} from "../infrastructure/search-movies"

const mapSearchedMovieToDomainModel = (
	searchedMovie: InfraSearchedMovie
): SearchedMovie => ({
	genreIds: searchedMovie.genre_ids,
	id: searchedMovie.id,
	originalLanguage: searchedMovie.original_language,
	originalTitle: searchedMovie.original_title,
	overview: searchedMovie.overview,
	posterPath: searchedMovie.poster_path,
	releaseDate: searchedMovie.release_date,
	title: searchedMovie.title,
})

export const mapSearchMoviesToDomainModel = (
	searchResults: SearchResults
): SearchedMovie[] =>
	searchResults.results.map((searchedMovie) =>
		mapSearchedMovieToDomainModel(searchedMovie)
	)

export const mapSearchPersonsToDomainModel = (
	searchPersonsResults: SearchPersonsResults
): SearchedPerson[] =>
	searchPersonsResults.results.map((searchedPerson) => {
		const mappedMovies = searchedPerson.known_for.map((searchedMovie) =>
			mapSearchedMovieToDomainModel(searchedMovie)
		)

		return {
			knownFor: mappedMovies,
			knownForDepartment: searchedPerson.known_for_department,
			name: searchedPerson.name,
			originalName: searchedPerson.original_name,
			profilePath: searchedPerson.profile_path,
		}
	})
