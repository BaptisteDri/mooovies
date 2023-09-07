import { useMergedClassName } from "@/ui/hooks/use-merged-classname"
import { Spinner } from "@/ui/components/shared/spinner"

type Props = {
	variant?: "primary" | "secondary" | "danger"
	isLoading?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({
	variant = "primary",
	isLoading = false,
	children,
	className,
	disabled,
	...props
}: Props) => {
	const mCn = useMergedClassName()

	return (
		<button
			{...props}
			className={mCn(
				"overflow-hidden relative flex items-center justify-center px-4 py-2 text-sm font-medium text-center border rounded-xl focus:outline-none focus:z-10 focus:ring-4",
				variant === "primary" &&
					"bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-700 text-white border-blue-800 hover:bg-blue-700",
				variant === "secondary" &&
					"focus:ring-slate-700 bg-none text-slate-400 border-slate-700",
				variant === "danger" &&
					"bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 text-white border-red-800",
				className
			)}
			disabled={isLoading ? true : disabled}
		>
			{children}

			<div
				className={mCn(
					"grid place-items-center absolute inset-0 opacity-0 transition-all duration-150",
					variant === "primary" && "bg-blue-600/50",
					variant === "secondary" && "bg-slate-950/50",
					variant === "danger" && "bg-red-500/50",
					isLoading && "opacity-100"
				)}
			>
				<Spinner />
			</div>
		</button>
	)
}
