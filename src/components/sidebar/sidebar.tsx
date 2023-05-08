import { Link } from "./link"

export const Sidebar = () => {
	return (
		<aside
			id="default-sidebar"
			className="fixed top-0 left-0 z-40 w-64 h-screen"
			aria-label="Sidebar"
		>
			<div className="h-full p-6 overflow-y-auto bg-gray-50 dark:bg-gray-800 border-r border-gray-700">
				<div className="text-gray-900 dark:text-white text-4xl font-bold mb-8">
					Mooovies
				</div>
				<ul className="space-y-3 font-medium">
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
				</ul>
				<div className="h-px my-6 bg-gray-700" />
				<ul className="space-y-3 font-medium">
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
