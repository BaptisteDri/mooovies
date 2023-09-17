import { SearchResults, SearchedMovie, SearchedPerson } from "./search-movies"

const searchedPerson: SearchedPerson = {
	known_for: [
		{
			genre_ids: [1, 2, 3],
			id: 1,
			original_language: "en",
			original_title: "Do the Right Thing",
			overview: "lorem ipsum",
			poster_path: "/",
			release_date: "1989",
			title: "Do the Right Thing",
			media_type: "movie",
		},
	],
	known_for_department: "Directing",
	name: "Spike Lee",
	original_name: "Spike Lee",
	profile_path: "",
	id: 1,
}

export const searchPersonsResultsFakes = {
	results: [searchedPerson],
}

export const directorFakes: string[] = ["Spike Lee", "Scorsese"]
