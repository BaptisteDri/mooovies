import type { NextPage } from "next"
import { Head } from "@/components/head"
import { SessionProvider } from "@/components/session-provider"
import { Layout } from "@/components/layout"
import { MoviesListContainer } from "@/modules/movies/application/movies-list/movies-list.container"

const IndexPage: NextPage = () => {
	return (
		<>
			<Head />

			<SessionProvider>
				<Layout content={<MoviesListContainer />} title={"Mes films"} />
			</SessionProvider>
		</>
	)
}

export default IndexPage
