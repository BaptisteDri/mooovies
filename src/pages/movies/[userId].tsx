import { MoviesList } from "@/ui/components/movies/movies-list"
import { Head } from "@/ui/components/shared/head"
import type { NextPage } from "next"
import { useRouter } from "next/router"

export const ForeignUserMoviesPage: NextPage = () => {
	const router = useRouter()

	return (
		<>
			<Head />
		</>
	)
}

export default ForeignUserMoviesPage
