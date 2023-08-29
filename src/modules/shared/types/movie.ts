export type Movie = {
	uuid: string
	title: string
	director: string
	year: string
	genreIds: string[]
	poster: string
	watchedDate: string | null
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

export type SearchedPerson = {
	knownFor: SearchedMovie[]
	knownForDepartment: string
	name: string
	originalName: string
	profilePath: string
}
