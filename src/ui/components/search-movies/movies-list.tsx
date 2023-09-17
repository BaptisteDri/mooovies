import { Loader } from "../shared/loader"
import { useSearchMovie } from "@/ui/hooks/search-movies/use-search-movie"
import { MovieItem } from "../movies/movie-item"
import { Fragment } from "react"
import { useRouter } from "next/router"
import { SearchBarFilters } from "./search-bar-filters"

type Props = {
	deferredQuery: string
	resultsType: "movies" | "persons"
	setResultsType: (resultsType: "movies" | "persons") => void
}

export const MoviesList = ({
	deferredQuery,
	resultsType,
	setResultsType,
}: Props) => {
	const { push } = useRouter()

	const {
		data: searchedMovies,
		isFetching,
		isFetched,
		isSuccess,
	} = useSearchMovie({
		query: deferredQuery,
		enabled: true,
	})

	return (
		<>
			<div className="mb-2">
				<SearchBarFilters
					resultsType={resultsType}
					setResultsType={setResultsType}
				/>
			</div>
			{isFetched && isSuccess && searchedMovies.length === 0 && (
				<div className="text-white text-center">Aucun résultat</div>
			)}

			{isFetching && <Loader />}

			{!isFetching && searchedMovies && searchedMovies.length > 0 && (
				<ul className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-2 sm:gap-6 mt-2 md:mt-4">
					{searchedMovies?.map((searchedMovie) =>
						searchedMovie.posterPath ? (
							<MovieItem
								key={searchedMovie.tmdbId}
								poster={searchedMovie.posterPath}
								title={searchedMovie.title}
								watchedDate={null}
								onClick={() =>
									push(`/movie/${searchedMovie.tmdbId}`)
								}
							/>
						) : (
							<Fragment key={searchedMovie.tmdbId} />
						)
					)}
				</ul>
			)}
		</>
	)
}
