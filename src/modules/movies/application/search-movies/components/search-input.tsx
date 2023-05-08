interface Props {
	query: string
	handleOnQueryChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const SearchInput = ({ query, handleOnQueryChange }: Props) => {
	return (
		<div className="flex gap-6 items-center mb-8">
			<span className="material-symbols-rounded w-6 h-6 text-gray-500 dark:text-gray-400">
				search
			</span>
			<input
				value={query}
				onChange={handleOnQueryChange}
				className="h-11 flex-auto rounded-md px-4 bg-gray-800 border border-gray-700 text-white"
				type="text"
				placeholder="Rechercher un titre de film..."
			/>
		</div>
	)
}
