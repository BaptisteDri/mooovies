import { Dependencies } from "@/config/dependencies"
import { getUserMovies } from "@/modules/movies/application/actions/get-user-movies"
import { getUserMovie } from "@/modules/movies/application/actions/get-user-movie"
import { toggleMovieIsSeen } from "@/modules/movies/application/actions/toggle-movie-is-seen"
import { addMovie } from "@/modules/movies/application/actions/add-movie"
import { deleteMovie } from "@/modules/movies/application/actions/delete-movie"
import { getPopularMovies } from "@/modules/search-movies/application/actions/get-popular-movies"
import { searchMovie } from "@/modules/search-movies/application/actions/search-movie"
import { getMovieDetails } from "@/modules/search-movies/application/actions/get-movie-details"
import { getMovieCredits } from "@/modules/search-movies/application/actions/get-movie-credits"
import { searchPerson } from "@/modules/search-movies/application/actions/search-person"

export const actions = {
	withDependencies: (dependencies: Dependencies) => ({
		movies: {
			getUserMovies,
			toggleMovieIsSeen,
			addMovie,
			deleteMovie,
			getUserMovie,
		},
		searchMovies: {
			searchMovie,
			getPopularMovies,
			getMovieDetails,
			getMovieCredits,
			searchPerson,
		},
	}),
}
