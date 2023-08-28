import { Fragment, useDeferredValue, useMemo, useState } from "react"
import { Movie } from "@/modules/shared/types/movie"
import { Alphabetical } from "@/ui/components/movies/alphabetical"
import { SearchBar } from "@/ui/components/movies/search-bar"
import { OrderedByGenres } from "@/ui/components/movies/ordered-by-genres"
import { OrderedByDate } from "@/ui/components/movies/ordered-by-date"
import { useGetUserMovies } from "@/ui/hooks/movies/use-get-user-movies"
import { useAppSelector } from "@/config/store"
import { selectLoggedInUser } from "@/modules/auth/auth.selectors"
import { MovieItem } from "./movie-item"
import { isCharLetter, removeAccents } from "@/ui/utils/characters"

type Props = {
	userId?: string
}

export const MoviesList = ({ userId }: Props) => {
	const [query, setQuery] = useState<string | undefined>(undefined)
	const deferredQuery = useDeferredValue(query)
	const [filter, setFilter] = useState<"SEEN" | "NOT_SEEN" | undefined>(
		undefined
	)
	const user = useAppSelector(selectLoggedInUser)

	const { data, fetchNextPage, hasNextPage } = useGetUserMovies({
		getUserMoviesDto: {
			userId: userId ?? (user?.id as string),
			filter: "title",
		},
		enabled: true,
	})

	const handleOnQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value)
	}

	const isNewMovieGroup = (movie: Movie, i: number, prevMovie?: Movie) => {
		if (!prevMovie) return true

		if (!isCharLetter(movie.title[0]) && i !== 0) return false

		return (
			removeAccents(movie.title[0]).toLowerCase() !==
			removeAccents(prevMovie?.title[0]).toLowerCase()
		)
	}

	return (
		<>
			<SearchBar
				query={query ?? ""}
				handleOnQueryChange={handleOnQueryChange}
				setFilter={setFilter}
				filter={filter}
			/>

			{data?.pages[0].movies.length === 0 && !hasNextPage && (
				<div>add movies</div>
			)}

			{data && (
				<ul className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-2 sm:gap-6 mt-4">
					{data.pages.map((group, i) => (
						<Fragment key={i}>
							{group.movies.map((movie, i) => (
								<Fragment key={movie.uuid}>
									{isNewMovieGroup(
										movie,
										i,
										group.movies[i - 1]
									) &&
										(!isCharLetter(movie.title[0]) ? (
											<h2 className="font-bold text-2xl uppercase col-span-full text-white sm:-mb-2">
												#
											</h2>
										) : (
											<h2 className="font-bold text-2xl uppercase col-span-full text-white sm:-mb-2">
												{movie.title[0]}
											</h2>
										))}
									<MovieItem movie={movie} />
								</Fragment>
							))}
						</Fragment>
					))}
				</ul>
			)}

			{hasNextPage && (
				<button className="text-white" onClick={() => fetchNextPage()}>
					next page
				</button>
			)}
		</>
	)
}
