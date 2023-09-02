import { Menu } from "./menu"
import { Sidebar } from "./sidebar/sidebar"
import { useAppSelector } from "@/config/store"
import { selectLoggedInUser } from "@/modules/auth/auth.selectors"

type Props = {
	children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
	const user = useAppSelector(selectLoggedInUser)

	return (
		<>
			{user ? (
				<>
					<span className="hidden sm:block">
						<Sidebar />
					</span>
					<main className="sm:ml-72 mb-24 sm:mb-0 min-h-fit h-full overflow-hidden">
						{children}
					</main>
					<span className="sm:hidden">
						<Menu />
					</span>
				</>
			) : (
				children
			)}
		</>
	)
}
