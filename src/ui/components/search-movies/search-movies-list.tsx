import { useDeferredValue, useState } from "react"
import { SearchBar } from "./search-bar"

export const SearchMoviesList = () => {
	const [query, setQuery] = useState<string>("")
	const deferredQuery = useDeferredValue(query)

	const handleOnQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value)
	}

	return (
		<>
			<SearchBar
				query={query ?? ""}
				handleOnQueryChange={handleOnQueryChange}
			/>
		</>
	)
}
