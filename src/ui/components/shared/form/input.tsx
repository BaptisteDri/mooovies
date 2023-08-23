import { useMergedClassName } from "@/ui/hooks/use-merged-classname"

type Props = React.InputHTMLAttributes<HTMLInputElement>

export const Input = ({ className, ...props }: Props) => {
	const mCn = useMergedClassName()

	return (
		<input
			className={mCn(
				"w-full h-11 rounded-2xl px-4 bg-slate-800 text-white placeholder:text-slate-400 placeholder-shown:text-ellipsis hover:bg-slate-700 border border-slate-800 transition-all duration-150",
				className
			)}
			{...props}
		/>
	)
}
