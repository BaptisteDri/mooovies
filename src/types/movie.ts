// missing attributes : overview, originalTitle, originalLanguage
// remove: runtime
export type Movie = {
	id: number
	title: string
	director: string
	year: string
	runtime: string
	genre: string[]
	poster: string
	is_seen: boolean
	user_id: string
}
// missing attributes : director
export type SearchedMovie = {
	genreIds: number[]
	id: number
	originalLanguage: string
	originalTitle: string
	overview: string
	posterPath: string
	releaseDate: string
	title: string
}
