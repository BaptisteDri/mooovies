import type { NextPage } from "next"
import { Head } from "@/ui/components/shared/head"
import { ShareButton } from "@/ui/components/shared/share-button"
import { SessionProvider } from "@/ui/components/shared/session-provider"
import { Title } from "@/ui/components/shared/title"
import { MoviesList } from "@/ui/components/movies/movies-list"

const IndexPage: NextPage = () => {
	return (
		<>
			<Head />
			<SessionProvider>
				<div className="flex justify-between items-center mb-4 sm:mb-6 mt-14 sm:mt-16">
					<Title>Mes films</Title>
				</div>
				<MoviesList />
			</SessionProvider>
		</>
	)
}

export default IndexPage
