import { Movie } from "@/types/movie"
import { Movie as InfraMovie } from "../infrastructure/movies"

export const mapMovieToDomainModel = (movie: InfraMovie): Movie => ({
	userId: movie.user_id,
	isSeen: movie.is_seen,
	director: movie.director,
	genreIds: movie.genre_ids.split(", "),
	poster: movie.poster,
	title: movie.title,
	year: movie.year,
	id: movie.id,
	originalLanguage: movie.original_language,
	originalTitle: movie.original_title,
})

export const mapMoviesToDomainModel = (movies: InfraMovie[]): Movie[] =>
	movies.map((movie) => mapMovieToDomainModel(movie))
