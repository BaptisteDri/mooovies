import { Menu } from "./menu"
import { Sidebar } from "./sidebar/sidebar"
import { Title } from "./title"

interface Props {
	content: React.ReactNode
	title?: string
}

export const Layout = ({ content, title }: Props) => (
	<main>
		<span className="hidden sm:block">
			<Sidebar />
		</span>
		<div className="p-6 sm:ml-64">
			{title && <Title content={title} />}
			{content}
		</div>
		<span className="sm:hidden">
			<Menu />
		</span>
	</main>
)
