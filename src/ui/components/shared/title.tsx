type Props = {
	children: React.ReactNode
}

export const Title = ({ children }: Props) => (
	<h1 className="text-white text-3xl font-bold">{children}</h1>
)
