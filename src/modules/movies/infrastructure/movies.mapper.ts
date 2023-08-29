import { Movie } from "@/modules/shared/types/movie"
import { Movie as InfraMovie } from "../infrastructure/movies"

export const mapMovieToInfraModel = (movie: Movie): InfraMovie => ({
	user_id: movie.userId,
	watched_date: movie.watchedDate,
	director: movie.director,
	genre_ids: movie.genreIds.join(", "),
	poster: movie.poster,
	title: movie.title,
	year: movie.year,
	uuid: movie.uuid,
	original_language: movie.originalLanguage,
	original_title: movie.originalTitle,
	overview: movie.overview,
})
