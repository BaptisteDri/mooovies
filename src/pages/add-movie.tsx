import type { NextPage } from "next"
import { Head } from "@/components/seo/head"
import { SessionProvider } from "@/components/auth/session-provider"
import { AddMovie } from "@/components/pages/add-movie"

const AddMoviePage: NextPage = () => {
	return (
		<>
			<Head />

			<SessionProvider>
				<AddMovie />
			</SessionProvider>
		</>
	)
}

export default AddMoviePage
