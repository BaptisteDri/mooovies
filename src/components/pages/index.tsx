import { selectLoggedInUser } from "@/modules/auth/auth.selectors"
import { useAppSelector } from "@/config/store"
import { User } from "@/types/user"
import { MoviesContainer } from "@/modules/movies/application/movies.container"
import { Sidebar } from "../layout/sidebar/sidebar"
import { Title } from "../title"

export const Index = () => {
	const loggedInUser: User | null = useAppSelector(selectLoggedInUser)

	return (
		<>
			<Sidebar />

			<div className="p-6 sm:ml-64">
				<Title content="Mes films" />
				<MoviesContainer />
			</div>
		</>
	)
}
