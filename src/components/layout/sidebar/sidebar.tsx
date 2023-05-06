import { Link } from "./link"

export const Sidebar = () => {
	return (
		<aside
			id="default-sidebar"
			className="fixed top-0 left-0 z-40 w-64 h-screen"
			aria-label="Sidebar"
		>
			<div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
				<ul className="space-y-2 font-medium">
					<Link
						content="Mes films"
						icon={
							<span className="material-symbols-rounded">
								home
							</span>
						}
						path={"/"}
					/>
					<Link
						content="Ajouter un film"
						icon={
							<span className="material-symbols-rounded">
								video_call
							</span>
						}
						path={"/add-movie"}
					/>
					<Link
						content="Paramètres"
						icon={
							<span className="material-symbols-rounded">
								manage_accounts
							</span>
						}
						path={"/settings"}
					/>
				</ul>
			</div>
		</aside>
	)
}
