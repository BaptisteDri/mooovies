import { useMergedClassName } from "@/ui/hooks/use-merged-classname"

type Props = {
	children: React.ReactNode
	className?: string
}

export const Title = ({ children, className }: Props) => {
	const mCn = useMergedClassName()

	return (
		<h1
			className={mCn(
				"text-white text-3xl sm:text-4xl font-semibold",
				className
			)}
		>
			{children}
		</h1>
	)
}
