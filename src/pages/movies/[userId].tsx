import { Head } from "@/ui/components/head"
import { Layout } from "@/ui/components/layout"
import { MoviesListContainer } from "@/modules/movies/application/movies-list.container"
import type { NextPage } from "next"

export const ForeignUserMoviesPage: NextPage = () => (
	<>
		<Head />
		<Layout title={"Films partagés"}>
			<MoviesListContainer />
		</Layout>
	</>
)

export default ForeignUserMoviesPage
