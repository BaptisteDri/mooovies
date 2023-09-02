import { useMergedClassName } from "@/ui/hooks/use-merged-classname"

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, className, ...props }: Props) => {
	const mCn = useMergedClassName()

	return (
		<div className="relative inline-flex group">
			<div className="animate-tilt group-hover:animate-none absolute transition-all duration-500 opacity-90 -inset-1 bg-gradient-to-r from-green-800 via-sky-800 to-pink-800 rounded-xl blur-xl group-hover:opacity-100 group-hover:-inset-2 group-hover:duration-200" />

			<button
				className={mCn(
					"relative inline-flex items-center justify-center px-4 h-11 text-lg text-white transition-all duration-200 bg-slate-950 rounded-xl",
					className
				)}
				{...props}
			>
				{children}
			</button>
		</div>
	)
}
