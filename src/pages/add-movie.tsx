import type { NextPage } from "next"
import { Head } from "@/components/head"
import { SessionProvider } from "@/components/session-provider"
import { Layout } from "@/components/layout"
import { SearchMoviesContainer } from "@/modules/search-movies/application/search-movies.container"

const AddMoviePage: NextPage = () => {
	return (
		<>
			<Head />

			<SessionProvider>
				<Layout content={<SearchMoviesContainer />} />
			</SessionProvider>
		</>
	)
}

export default AddMoviePage
