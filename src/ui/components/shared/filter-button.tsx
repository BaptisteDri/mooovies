import { useMergedClassName } from "@/ui/hooks/use-merged-classname"

type Props = {
	isActive?: boolean
	onClick?: () => void
	title: string
}

export const FilterButton = ({ isActive, onClick, title }: Props) => {
	const mCn = useMergedClassName()

	return (
		<button
			className={mCn(
				"flex items-center justify-center h-8 px-2  border rounded-xl cursor-pointer hover:text-slate-300 border-slate-700 text-slate-400 bg-slate-800 hover:bg-slate-700",
				isActive && "text-slate-300 border-blue-600"
			)}
			onClick={onClick}
		>
			{title}
		</button>
	)
}
