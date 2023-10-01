import { GetUserMoviesDto } from "@/modules/movies/application/movies.repository"
import { PropsWithChildren, createContext, useContext, useState } from "react"

type SearchMoviesFilters = {
	query?: string
	resultsType: "movies" | "persons"
}
type SearchMoviesFiltersState = {
	searchMoviesFilters: SearchMoviesFilters
	setSearchMoviesFilters: (searchMoviesFilters: SearchMoviesFilters) => void
}

const SearchMoviesFiltersContext =
	createContext<SearchMoviesFiltersState | null>(null)

export const useSearchMoviesFilters = () => {
	const context = useContext(SearchMoviesFiltersContext)

	if (!context) throw new Error("Search movies filters context not found")

	return context
}

export const SearchMoviesFiltersProvider = ({
	children,
}: PropsWithChildren) => {
	const [searchMoviesFilters, setSearchMoviesFilters] =
		useState<SearchMoviesFilters>({
			query: undefined,
			resultsType: "movies",
		})

	return (
		<SearchMoviesFiltersContext.Provider
			value={{ searchMoviesFilters, setSearchMoviesFilters }}
		>
			{children}
		</SearchMoviesFiltersContext.Provider>
	)
}
