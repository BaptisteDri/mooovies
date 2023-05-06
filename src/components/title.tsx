interface Props {
	content: string
}

export const Title = ({ content }: Props) => (
	<h1 className="text-gray-900 dark:text-white text-4xl font-bold mb-8">
		{content}
	</h1>
)
