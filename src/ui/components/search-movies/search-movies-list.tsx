import { Fragment, useDeferredValue, useEffect, useState } from "react"
import { SearchBar } from "./search-bar"
import { Title } from "../shared/title"
import { Loader } from "../shared/loader"
import { useSearchMovie } from "@/ui/hooks/search-movies/use-search-movie"
import { useGetPopularMovies } from "@/ui/hooks/search-movies/use-get-popular-movies"
import { MovieItem } from "../movies/movie-item"
import { useRouter } from "next/router"

export const SearchMoviesList = () => {
	const [query, setQuery] = useState<string>("")
	const deferredQuery = useDeferredValue(query)
	const { push } = useRouter()

	const handleOnQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value)
	}

	const {
		data: searchedMovies,
		isFetching: isSearchMovieFetching,
		isFetched: isSearchMovieFetched,
		isSuccess: isSearchMovieSuccess,
		refetch: searchMovie,
	} = useSearchMovie({
		query: deferredQuery,
	})

	const { data: popularMovies, isFetching: isGetPopularMoviesFetching } =
		useGetPopularMovies({
			enabled: true,
		})

	useEffect(() => {
		if (deferredQuery) searchMovie()
	}, [deferredQuery])

	return (
		<>
			<SearchBar
				query={query ?? ""}
				handleOnQueryChange={handleOnQueryChange}
			/>
			<div className="flex flex-col p-4 sm:p-6 mt-[3.75rem]">
				<Title className="mb-2">
					{deferredQuery ? "Rechercher" : "Films populaires"}
				</Title>
				{deferredQuery ? (
					<>
						{isSearchMovieFetched &&
							isSearchMovieSuccess &&
							searchedMovies.length === 0 && (
								<div className="text-white text-center">
									Aucun résultat
								</div>
							)}

						{isSearchMovieFetching && <Loader />}

						{!isSearchMovieFetching &&
							searchedMovies &&
							searchedMovies.length > 0 && (
								<ul className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-2 sm:gap-6 mt-2 md:mt-4">
									{searchedMovies?.map((searchedMovie) =>
										searchedMovie.posterPath ? (
											<MovieItem
												key={searchedMovie.tmdbId}
												poster={
													searchedMovie.posterPath
												}
												title={searchedMovie.title}
												watchedDate={null}
												onClick={() =>
													push(
														`/movie/${searchedMovie.tmdbId}`
													)
												}
											/>
										) : (
											<Fragment
												key={searchedMovie.tmdbId}
											/>
										)
									)}
								</ul>
							)}
					</>
				) : (
					<>
						{isGetPopularMoviesFetching && <Loader />}

						{!isGetPopularMoviesFetching &&
							popularMovies &&
							popularMovies.length > 0 && (
								<ul className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-2 sm:gap-6 mt-2 md:mt-4">
									{popularMovies?.map((searchedMovie) => (
										<MovieItem
											key={searchedMovie.tmdbId}
											poster={searchedMovie.posterPath}
											title={searchedMovie.title}
											watchedDate={null}
											onClick={() =>
												push(
													`/movie/${searchedMovie.tmdbId}`
												)
											}
										/>
									))}
								</ul>
							)}
					</>
				)}
			</div>
		</>
	)
}
