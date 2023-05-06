import { SearchMoviesContainer } from "@/modules/movies/application/search-movies/search-movies.container"
import { Sidebar } from "../layout/sidebar/sidebar"

export const AddMovie = () => (
	<>
		<Sidebar />

		<div className="p-6 sm:ml-64">
			<SearchMoviesContainer />
		</div>
	</>
)
