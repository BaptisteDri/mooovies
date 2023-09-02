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
	tmdbId: number
}

export type SearchedMovie = {
	genreIds: number[]
	originalLanguage: string
	originalTitle: string
	overview: string
	posterPath: string
	releaseDate: string
	title: string
	tmdbId: number
}

export type SearchedPerson = {
	knownFor: SearchedMovie[]
	knownForDepartment: string
	name: string
	originalName: string
	profilePath: string
}

// Details from movie tmdb id
// {
// 	"adult": false,
// 	"backdrop_path": "/leT6tupwfYea4T0zYBafP73gXj9.jpg",
// 	"budget": 6500000,
// 	"genres": [
// 	  {
// 		"id": 18,
// 		"name": "Drama"
// 	  }
// 	],
// 	"id": 925,
// 	"imdb_id": "tt0097216",
// 	"original_language": "en",
// 	"original_title": "Do the Right Thing",
// 	"overview": "Salvatore \"Sal\" Fragione is the Italian owner of a pizzeria in Brooklyn. A neighborhood local, Buggin' Out, becomes upset when he sees that the pizzeria's Wall of Fame exhibits only Italian actors. Buggin' Out believes a pizzeria in a black neighborhood should showcase black actors, but Sal disagrees. The wall becomes a symbol of racism and hate to Buggin' Out and to other people in the neighborhood, and tensions rise.",
// 	"poster_path": "/63rmSDPahrH7C1gEFYzRuIBAN9W.jpg",
// 	"release_date": "1989-06-14",
// 	"runtime": 120,
// 	"title": "Do the Right Thing",
//   }
