export type Movie = {
	id: number
	title: string
	director: string
	year: string
	genreIds: string[]
	poster: string
	isSeen: boolean
	userId: string
	originalTitle: string
	originalLanguage: string
	overview: string
}

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
