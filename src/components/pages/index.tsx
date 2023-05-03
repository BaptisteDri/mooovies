import { Navbar } from "@/components/layout/navbar"
import { selectLoggedInUser } from "@/modules/auth/auth.selectors"
import { useAppSelector } from "@/config/store"
import { User } from "@/types/user"
import { MoviesContainer } from "@/modules/movies/application/movies.container"

export const Index = () => {
	const loggedInUser: User | null = useAppSelector(selectLoggedInUser)

	return (
		<>
			<Navbar />

			<main className="mx-2 md:mx-52">
				<h1>Mooovies</h1>
				<MoviesContainer />
			</main>
		</>
	)
}
