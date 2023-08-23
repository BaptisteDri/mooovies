import { SearchResults, SearchedMovie, SearchedPerson } from "./search-movies"

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

const searchedPerson: SearchedPerson = {
	known_for: [searchedMovie],
	known_for_department: "Directing",
	name: "Spike Lee",
	original_name: "Spike Lee",
	profile_path: "",
}

export const searchResultsFakes: SearchResults = {
	results: [searchedMovie],
}

export const searchPersonsResultsFakes = {
	results: [searchedPerson],
}

export const directorFakes: string[] = ["Spike Lee", "Scorsese"]
