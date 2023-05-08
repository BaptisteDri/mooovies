import { Sidebar } from "./sidebar/sidebar"
import { Title } from "./title"

interface Props {
	content: React.ReactNode
	title?: string
}

export const Layout = ({ content, title }: Props) => (
	<main>
		<Sidebar />
		<div className="p-6 sm:ml-64">
			{title && <Title content={title} />}
			{content}
		</div>
	</main>
)
