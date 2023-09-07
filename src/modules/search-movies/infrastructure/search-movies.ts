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

type ProductionCompany = {
	id: number
	logo_path: string | null
	name: string
	origin_country: string
}

type Genre = {
	id: number
	name: string
}

export type DetailedSearchedMovie = {
	runtime: number
	production_companies: ProductionCompany[]
	genres: Genre[]
} & Omit<SearchedMovie, "genre_ids">

export type SearchResults = {
	results: SearchedMovie[]
	page: number
}

export type SearchedPerson = {
	known_for: SearchedMovie[]
	known_for_department: string
	name: string
	original_name: string
	profile_path: string
}

export type SearchPersonsResults = {
	results: SearchedPerson[]
}

type Crew = {
	id: number
	name: string
	original_name: string
	profile_path: string
	character: string
	job: "Director" | "Producer" | "Editor" | unknown
}

export type SearchedMovieCredits = {
	id: number
	cast: Omit<Crew, "job">[]
	crew: Crew[]
}
