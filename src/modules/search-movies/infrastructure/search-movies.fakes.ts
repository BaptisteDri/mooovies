import { SearchResults, SearchedMovie } from "./search-movies"

const searchedMovie: SearchedMovie = {
	genre_ids: [1, 2, 3],
	id: 1,
	original_language: "en",
	original_title: "Do the Right Thing",
	overview: "lorem ipsum",
	poster_path: "/",
	release_date: "1989",
	title: "Do the Right Thing",
}

export const searchResultsFakes: SearchResults = {
	results: [searchedMovie],
}
