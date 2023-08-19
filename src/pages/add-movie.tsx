import type { NextPage } from "next"
import { Head } from "@/ui/components/head"
import { SessionProvider } from "@/ui/components/session-provider"
import { Layout } from "@/ui/components/layout"
import { SearchMoviesContainer } from "@/modules/search-movies/application/search-movies.container"

const AddMoviePage: NextPage = () => {
	return (
		<>
			<Head />

			<SessionProvider>
				<Layout>
					<SearchMoviesContainer />
				</Layout>
			</SessionProvider>
		</>
	)
}

export default AddMoviePage
