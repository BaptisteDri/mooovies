import { Movie } from "@/types/movie"
import { Movie as InfraMovie } from "../infrastructure/movies"

export const mapMovieToInfraModel = (movie: Movie): InfraMovie => ({
	user_id: movie.userId,
	is_seen: movie.isSeen,
	director: movie.director,
	genre_ids: movie.genreIds.join(", "),
	poster: movie.poster,
	title: movie.title,
	year: movie.year,
	id: movie.id,
	original_language: movie.originalLanguage,
	original_title: movie.originalTitle,
	overview: movie.overview,
})
