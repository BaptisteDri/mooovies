import type { NextPage } from "next"
import { Head } from "@/ui/components/shared/head"
import { SessionProvider } from "@/ui/components/shared/session-provider"
import { SearchMoviesContainer } from "@/modules/search-movies/application/search-movies.container"

const AddMoviePage: NextPage = () => {
	return (
		<>
			<Head />

			<SessionProvider>
				<SearchMoviesContainer />
			</SessionProvider>
		</>
	)
}

export default AddMoviePage
