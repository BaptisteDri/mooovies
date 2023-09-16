import { useDeferredValue, useState } from "react"
import { SearchBar } from "./search-bar"
import { Title } from "../shared/title"
import { MoviesList } from "./movies-list"
import { PopularMoviesList } from "./popular-movies-list"
import { PersonsList } from "./persons-list"

export const SearchMoviesList = () => {
	const [query, setQuery] = useState<string>("")
	const [resultsType, setResultsType] = useState<"movies" | "persons">(
		"movies"
	)
	const deferredQuery = useDeferredValue(query)

	const handleOnQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value)
	}

	return (
		<>
			<SearchBar
				query={query ?? ""}
				handleOnQueryChange={handleOnQueryChange}
				isSearchingMode={!!deferredQuery}
				resultsType={resultsType}
				setResultsType={setResultsType}
			/>
			<div className="flex flex-col p-4 sm:p-6 mt-[3.75rem]">
				{!deferredQuery && (
					<Title className="mb-2">Films populaires</Title>
				)}
				{deferredQuery ? (
					resultsType === "movies" ? (
						<MoviesList deferredQuery={deferredQuery} />
					) : (
						<PersonsList deferredQuery={deferredQuery} />
					)
				) : (
					<PopularMoviesList />
				)}
			</div>
		</>
	)
}
