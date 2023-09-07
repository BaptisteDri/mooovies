import type { NextPage } from "next"
import { Head } from "@/ui/components/shared/head"
import { SessionProvider } from "@/ui/components/shared/session-provider"
import { MoviesList } from "@/ui/components/movies/movies-list"

const IndexPage: NextPage = () => {
	return (
		<>
			<Head />
			<SessionProvider>
				<MoviesList />
			</SessionProvider>
		</>
	)
}

export default IndexPage
