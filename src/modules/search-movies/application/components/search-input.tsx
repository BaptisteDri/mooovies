import { Icon } from "@/components/icon"

interface Props {
	query: string
	handleOnQueryChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const SearchInput = ({ query, handleOnQueryChange }: Props) => {
	return (
		<div className="flex gap-6 items-center mb-8 relative">
			<label
				htmlFor="search-input"
				className="flex items-center justify-center absolute left-2 top-0 bottom-0"
			>
				<Icon
					name="search"
					className="w-6 h-6 text-gray-500 dark:text-gray-400"
				/>
			</label>
			<input
				value={query}
				onChange={handleOnQueryChange}
				className="pl-10 w-full h-11 rounded-md px-4 bg-gray-800 border border-gray-700 text-white placeholder-shown:text-ellipsis"
				type="text"
				placeholder="Rechercher un titre de film..."
				id="search-input"
				autoComplete="off"
			/>
		</div>
	)
}
