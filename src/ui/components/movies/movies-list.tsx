import { Fragment, useDeferredValue, useEffect, useState } from "react"
import { SearchBar } from "@/ui/components/movies/search-bar"
import { useGetUserMovies } from "@/ui/hooks/movies/use-get-user-movies"
import { useAppSelector } from "@/config/store"
import { selectLoggedInUser } from "@/modules/auth/auth.selectors"
import { MovieItem } from "./movie-item"
import { useInView } from "react-intersection-observer"
import { Spinner } from "../shared/spinner"

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
	const { ref, inView } = useInView()

	const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
		useGetUserMovies({
			getUserMoviesDto: {
				userId: userId ?? (user?.id as string),
				order: "title",
				filters: {
					genreId: "18",
					title: deferredQuery,
				},
			},
			enabled: true,
		})

	const handleOnQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value)
	}

	useEffect(() => {
		if (!inView || !hasNextPage) return

		fetchNextPage()
	}, [inView])

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
								<MovieItem movie={movie} key={movie.uuid} />
							))}
						</Fragment>
					))}
				</ul>
			)}

			<div ref={ref} />

			{isFetchingNextPage && (
				<div className="grid place-items-center py-8 mt-4 scale-150">
					<Spinner />
				</div>
			)}
		</>
	)
}
