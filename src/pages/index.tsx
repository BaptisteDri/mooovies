import type { NextPage } from "next"
import { Head } from "@/ui/components/shared/head"
import { SessionProvider } from "@/ui/components/shared/session-provider"
import { Layout } from "@/ui/components/shared/layout/layout"
import { MoviesListContainer } from "@/ui/components/movies/movies-list.container"
import { ShareButton } from "@/ui/components/shared/share-button"
import { Session } from "@/modules/shared/types/user"
import { selectLocalSessionData } from "@/modules/auth/auth.selectors"

const IndexPage: NextPage = () => {
	const localSessionData: Session | null = selectLocalSessionData()
	const url = `https://main--mooovies-tracker.netlify.app/movies/${localSessionData?.user.id}`

	return (
		<>
			<Head />
			<SessionProvider>
				{/* <Layout
					title={"Mes films"}
					headerContent={<ShareButton url={url} />}
				> */}
				<MoviesListContainer />
				{/* </Layout> */}
			</SessionProvider>
		</>
	)
}

export default IndexPage
