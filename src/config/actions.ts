import { Dependencies } from "@/config/dependencies"
import { getUserMovies } from "@/modules/movies/application/actions/get-user-movies"
import { toggleMovieIsSeen } from "@/modules/movies/application/actions/toggle-movie-is-seen"
import { addMovie } from "@/modules/movies/application/actions/add-movie"
import { deleteMovie } from "@/modules/movies/application/actions/delete-movie"

export const actions = {
	withDependencies: (dependencies: Dependencies) => ({
		movies: {
			getUserMovies,
			toggleMovieIsSeen,
			addMovie,
			deleteMovie,
		},
	}),
}
