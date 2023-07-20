import { useRouter } from "next/router"
import { Icon } from "../icon"
import { Link } from "./link"
import { useAppSelector } from "@/config/store"
import { selectIsLoggedInSession } from "@/modules/auth/auth.selectors"

export const Sidebar = () => {
	const isLoggedInSession: boolean = useAppSelector(selectIsLoggedInSession)
	const router = useRouter()

	return (
		<aside
			id="default-sidebar"
			className="fixed top-0 left-0 z-40 w-64 h-screen"
			aria-label="Sidebar"
		>
			<div className="h-full p-6 overflow-y-auto bg-gray-50 dark:bg-gray-800 border-r border-gray-700">
				<div
					className="cursor-pointer text-gray-900 dark:text-white text-2xl font-bold mb-8 flex items-center gap-3"
					role="link"
					onClick={() => router.push("/")}
				>
					<img src={"/mooovies_logo.svg"} className="rounded" />
					Mooovies
				</div>
				{isLoggedInSession ? (
					<>
						<ul className="space-y-3 font-medium">
							<Link
								content="Accueil"
								icon={<Icon name="home" />}
								path={"/"}
							/>
							<Link
								content="Rechercher"
								icon={<Icon name="search" />}
								path={"/add-movie"}
							/>
						</ul>
						<div className="h-px my-6 bg-gray-700" />
						<ul className="space-y-3 font-medium">
							<Link
								content="Paramètres"
								icon={<Icon name="settings" />}
								path={"/settings"}
							/>
						</ul>
					</>
				) : (
					<ul>
						<Link
							content="Se connecter"
							path="/sign-in"
							icon={<Icon name="login" />}
						/>
					</ul>
				)}
			</div>
		</aside>
	)
}
