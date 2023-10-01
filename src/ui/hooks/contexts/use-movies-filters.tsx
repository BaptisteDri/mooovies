import { GetUserMoviesDto } from "@/modules/movies/application/movies.repository"
import { PropsWithChildren, createContext, useContext, useState } from "react"

type MoviesFilters = Omit<GetUserMoviesDto, "userId" | "pageIndex">
type MoviesFiltersState = {
	moviesFilters: MoviesFilters
	setMoviesFilters: (moviesFilters: MoviesFilters) => void
}

const MoviesFiltersContext = createContext<MoviesFiltersState | null>(null)

export const useMoviesFilters = () => {
	const context = useContext(MoviesFiltersContext)

	if (!context) throw new Error("Movies filters context not found")

	return context
}

export const MoviesFiltersProvider = ({ children }: PropsWithChildren) => {
	const [moviesFilters, setMoviesFilters] = useState<MoviesFilters>({
		order: "added_date",
		filters: {
			genreId: undefined,
			isSeen: undefined,
			title: undefined,
		},
	})

	return (
		<MoviesFiltersContext.Provider
			value={{ moviesFilters, setMoviesFilters }}
		>
			{children}
		</MoviesFiltersContext.Provider>
	)
}
