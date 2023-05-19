import type { NextPage } from "next"
import { Head } from "@/components/head"
import { SessionProvider } from "@/components/session-provider"
import { Layout } from "@/components/layout"
import { MoviesListContainer } from "@/modules/movies/application/movies-list.container"
import { ShareButton } from "@/components/share-button"
import { Session } from "@/types/user"
import { selectLocalSessionData } from "@/modules/auth/auth.selectors"

const IndexPage: NextPage = () => {
	const localSessionData: Session | null = selectLocalSessionData()
	const url = `https://main--mooovies-tracker.netlify.app/movies/${localSessionData?.user.id}`

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
