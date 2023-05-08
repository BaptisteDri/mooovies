interface Props {
	className?: string
	name: string
	fill?: boolean
}

export const Icon = ({ className, name, fill }: Props) => (
	<span
		className={`material-symbols-rounded ${className ?? ""}`}
		style={fill ? { fontVariationSettings: "'FILL' 1" } : {}}
	>
		{name}
	</span>
)
