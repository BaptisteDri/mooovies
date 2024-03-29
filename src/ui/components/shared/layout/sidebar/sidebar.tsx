import { useRouter } from "next/router"
import { Icon } from "../../icon"
import { Link } from "./link"
import { useAppSelector } from "@/config/store"
import { selectIsLoggedInSession } from "@/modules/auth/auth.selectors"

export const Sidebar = () => {
	const isLoggedInSession: boolean = useAppSelector(selectIsLoggedInSession)
	const { push } = useRouter()

	return (
		<aside
			id="default-sidebar"
			className="fixed top-0 left-0 z-40 w-72 h-full"
			aria-label="Sidebar"
		>
			<div className="h-full py-6 px-4 overflow-y-auto bg-slate-900 border-r border-slate-800">
				<div
					className="cursor-pointer text-white text-2xl font-bold mb-8 flex items-center gap-3"
					role="link"
					onClick={() => push("/")}
				>
					<img
						src={"/mooovies_logo.svg"}
						className="rounded h-10 w-10"
					/>
					Mooovies
				</div>
				{isLoggedInSession ? (
					<>
						<ul className="space-y-3 font-medium">
							<Link
								content="Ma liste"
								icon={<Icon name="home" />}
								path={"/"}
							/>
							<Link
								content="Rechercher"
								icon={<Icon name="search" />}
								path={"/add-movie"}
							/>
							{/* <Link
								content="Historique de visionnage"
								icon={<Icon name="history" />}
								path={"/history"}
							/> */}
						</ul>
						<div className="h-px my-6 bg-gray-800" />
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
