import { useMergedClassName } from "@/hooks/useMergedClassName"

type Props = {
	name: string
	fill?: boolean
} & React.HTMLAttributes<HTMLSpanElement>

export const Icon = ({ className, name, fill, ...props }: Props) => {
	const mergedClassName = useMergedClassName()

	return (
		<span
			{...props}
			className={mergedClassName("material-symbols-rounded", className)}
			style={fill ? { fontVariationSettings: "'FILL' 1" } : {}}
		>
			{name}
		</span>
	)
}
