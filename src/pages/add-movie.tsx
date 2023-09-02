import type { NextPage } from "next"
import { Head } from "@/ui/components/shared/head"
import { SessionProvider } from "@/ui/components/shared/session-provider"
import { SearchMoviesContainer } from "@/modules/search-movies/application/search-movies.container"
import { Title } from "@/ui/components/shared/title"
import { SearchMoviesList } from "@/ui/components/search-movies/search-movies-list"

const AddMoviePage: NextPage = () => {
	return (
		<>
			<Head />

			<SessionProvider>
				<div className="p-4 sm:p-6 h-full max-sm:h-[calc(100%-77px)] overflow-y-auto overflow-x-hidden scroll-smooth">
					{/* <div className="mb-4 sm:mb-6 mt-14 sm:mt-16"> */}
					<Title>Rechercher</Title>
					<SearchMoviesContainer />
					{/* <SearchMoviesList /> */}
				</div>
			</SessionProvider>
		</>
	)
}

export default AddMoviePage
