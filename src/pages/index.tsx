import type { NextPage } from "next"
import { Head } from "@/components/head"
import { SessionProvider } from "@/components/session-provider"
import { Layout } from "@/components/layout"
import { MoviesListContainer } from "@/modules/movies/application/movies-list.container"
import { ShareButton } from "@/components/share-button"

const IndexPage: NextPage = () => {
	const url: string = `https://main--mooovies-tracker.netlify.app/`

	return (
		<>
			<Head />

			<SessionProvider>
				<Layout
					content={<MoviesListContainer />}
					title={"Mes films"}
					headerContent={<ShareButton url={url} />}
				/>
			</SessionProvider>
		</>
	)
}

export default IndexPage
