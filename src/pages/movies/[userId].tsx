import { Head } from "@/components/head"
import { Layout } from "@/components/layout"
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
