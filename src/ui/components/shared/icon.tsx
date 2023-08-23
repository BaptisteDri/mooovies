import { useMergedClassName } from "@/ui/hooks/use-merged-classname"

type Props = {
	name: string
	fill?: boolean
} & React.HTMLAttributes<HTMLSpanElement>

export const Icon = ({ className, name, fill, ...props }: Props) => {
	const mCn = useMergedClassName()

	return (
		<span
			{...props}
			className={mCn("material-symbols-rounded", className)}
			style={fill ? { fontVariationSettings: "'FILL' 1" } : {}}
		>
			{name}
		</span>
	)
}
