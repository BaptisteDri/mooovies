export type SearchedMovie = {
	genre_ids: number[]
	id: number
	original_language: string
	original_title: string
	overview: string
	poster_path: string
	release_date: string
	title: string
}

export type SearchResults = {
	results: SearchedMovie[]
}
