import type { NextPage } from "next"
import { Head } from "@/ui/components/shared/head"
import { SessionProvider } from "@/ui/components/shared/session-provider"
import { SearchMoviesList } from "@/ui/components/search-movies/search-movies-list"

const AddMoviePage: NextPage = () => {
	return (
		<>
			<Head />
			<SessionProvider>
				<SearchMoviesList />
			</SessionProvider>
		</>
	)
}

export default AddMoviePage
