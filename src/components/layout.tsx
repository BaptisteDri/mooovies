import { Menu } from "./menu"
import { Sidebar } from "./sidebar/sidebar"
import { Title } from "./title"

interface Props {
	content: React.ReactNode
	title?: string
	headerContent?: React.ReactNode
}

export const Layout = ({ content, title, headerContent }: Props) => (
	<main>
		<span className="hidden sm:block">
			<Sidebar />
		</span>
		<div className="p-6 sm:ml-64 mb-16 sm:mb-0">
			<div className="flex justify-between items-center mb-4">
				{title && <Title content={title} />}
				{headerContent}
			</div>
			{content}
		</div>
		<span className="sm:hidden">
			<Menu />
		</span>
	</main>
)
