import { Menu } from "./menu"
import { Sidebar } from "./sidebar/sidebar"
import { Title } from "../title"
import { useAppSelector } from "@/config/store"
import { selectLoggedInUser } from "@/modules/auth/auth.selectors"

type Props = {
	children: React.ReactNode
	title?: string
	headerContent?: React.ReactNode
}

export const Layout = ({ title, headerContent, children }: Props) => {
	const user = useAppSelector(selectLoggedInUser)

	return (
		<main>
			{user ? (
				<>
					<span className="hidden sm:block">
						<Sidebar />
					</span>
					<div className="p-4 sm:p-6 sm:ml-72 mb-24 sm:mb-0">
						<div className="flex justify-between items-center mb-4">
							{title && <Title>{title}</Title>}
							{headerContent}
						</div>
						{children}
					</div>
					<span className="sm:hidden">
						<Menu />
					</span>
				</>
			) : (
				children
			)}
		</main>
	)
}
