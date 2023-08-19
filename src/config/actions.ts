import { Dependencies } from "@/config/dependencies"
import { getUserMovies } from "@/modules/movies/application/actions/get-user-movies"

export const actions = {
	withDependencies: (dependencies: Dependencies) => ({
		movies: {
			getUserMovies,
		},
	}),
}
