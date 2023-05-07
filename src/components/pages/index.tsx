import { MoviesListContainer } from "@/modules/movies/application/movies-list/movies-list.container"
import { Sidebar } from "../layout/sidebar/sidebar"
import { Title } from "../title"

export const Index = () => (
	<>
		<Sidebar />

		<div className="p-6 sm:ml-64">
			<Title content="Mes films" />
			<MoviesListContainer />
		</div>
	</>
)
