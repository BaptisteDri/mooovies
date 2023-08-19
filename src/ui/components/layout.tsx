import { Menu } from "./menu"
import { Sidebar } from "./shared/sidebar/sidebar"
import { Title } from "./title"

type Props = {
	children: React.ReactNode
	title?: string
	headerContent?: React.ReactNode
}

export const Layout = ({ title, headerContent, children }: Props) => (
	<main>
		<span className="hidden sm:block">
			<Sidebar />
		</span>
		<div className="p-6 sm:ml-64 mb-24 sm:mb-0">
			<div className="flex justify-between items-center mb-4">
				{title && <Title content={title} />}
				{headerContent}
			</div>
			{children}
		</div>
		<span className="sm:hidden">
			<Menu />
		</span>
	</main>
)
