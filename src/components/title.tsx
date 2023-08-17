type Props = {
	content: string
}

export const Title = ({ content }: Props) => (
	<h1 className="text-white text-4xl font-bold">{content}</h1>
)
