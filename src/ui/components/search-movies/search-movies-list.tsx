import { useDeferredValue, useState } from "react"
import { SearchBar } from "./search-bar"
import { Title } from "../shared/title"
import { MoviesList } from "./movies-list"
import { PopularMoviesList } from "./popular-movies-list"
import { PersonsList } from "./persons-list"
import { useMergedClassName } from "@/ui/hooks/use-merged-classname"

export const SearchMoviesList = () => {
	const [query, setQuery] = useState<string>("")
	const [resultsType, setResultsType] = useState<"movies" | "persons">(
		"movies"
	)
	const deferredQuery = useDeferredValue(query)
	const mCn = useMergedClassName()

	const handleOnQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value)
	}

	return (
		<>
			<SearchBar
				query={query ?? ""}
				handleOnQueryChange={handleOnQueryChange}
			/>
			<div
				className={mCn(
					"flex flex-col p-4 sm:p-6 mt-[3.75rem]",
					deferredQuery && "pt-1"
				)}
			>
				{!deferredQuery && (
					<Title className="my-2">Films populaires</Title>
				)}
				{deferredQuery ? (
					resultsType === "movies" ? (
						<MoviesList
							deferredQuery={deferredQuery}
							resultsType={resultsType}
							setResultsType={setResultsType}
						/>
					) : (
						<PersonsList
							deferredQuery={deferredQuery}
							resultsType={resultsType}
							setResultsType={setResultsType}
						/>
					)
				) : (
					<PopularMoviesList />
				)}
			</div>
		</>
	)
}
