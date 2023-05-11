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
		<div className="p-6 sm:ml-64 mb-16 sm:mb-0">
			<div className={`flex ${title && "mb-8"}`}>
				{title && <Title content={title} />}
			</div>
			{content}
		</div>
		<span className="sm:hidden">
			<Menu />
		</span>
	</main>
)
