import { Head } from "@/ui/components/shared/head"
import { Layout } from "@/ui/components/shared/layout/layout"
import { MoviesListContainer } from "@/ui/components/movies/movies-list.container"
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
