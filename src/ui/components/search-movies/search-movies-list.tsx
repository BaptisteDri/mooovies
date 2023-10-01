import { useDeferredValue, useState } from "react"
import { SearchBar } from "./search-bar"
import { Title } from "../shared/title"
import { MoviesList } from "./movies-list"
import { PopularMoviesList } from "./popular-movies-list"
import { PersonsList } from "./persons-list"
import { useMergedClassName } from "@/ui/hooks/use-merged-classname"
import { useSearchMoviesFilters } from "@/ui/hooks/contexts/use-search-movies-filters"

export const SearchMoviesList = () => {
	const {
		searchMoviesFilters: { query, resultsType },
		setSearchMoviesFilters,
	} = useSearchMoviesFilters()
	const mCn = useMergedClassName()

	const handleOnQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchMoviesFilters({
			resultsType,
			query: e.target.value,
		})
	}

	const deferredQuery = useDeferredValue(query)

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
