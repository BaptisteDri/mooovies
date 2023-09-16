import { Fragment, useDeferredValue, useEffect, useState } from "react"
import { SearchBar } from "@/ui/components/movies/search-bar"
import { useGetUserMovies } from "@/ui/hooks/movies/use-get-user-movies"
import { useAppSelector } from "@/config/store"
import { selectLoggedInUser } from "@/modules/auth/auth.selectors"
import { MovieItem } from "./movie-item"
import { useInView } from "react-intersection-observer"
import { Loader } from "../shared/loader"
import { MoviesListPlaceholder } from "./movies-list-placeholder"
import { Title } from "../shared/title"
import { useRouter } from "next/router"

type Props = {
	userId?: string
}

export const MoviesList = ({ userId }: Props) => {
	const [query, setQuery] = useState<string | undefined>(undefined)
	const deferredQuery = useDeferredValue(query)
	const [isSeen, setIsSeen] = useState<boolean>()
	const [genreId, setGenreId] = useState<string>()
	const [order, setOrder] = useState<"title" | "year" | "added_date">(
		"added_date"
	)

	const user = useAppSelector(selectLoggedInUser)
	const { ref, inView } = useInView()
	const { push } = useRouter()

	const {
		data,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
		isInitialLoading,
	} = useGetUserMovies({
		getUserMoviesDto: {
			userId: userId ?? (user?.id as string),
			order,
			filters: {
				genreId,
				title: deferredQuery,
				isSeen,
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
				setIsSeen={setIsSeen}
				isSeen={isSeen}
				genreId={genreId}
				setGenreId={setGenreId}
				order={order}
				setOrder={setOrder}
			/>

			<div className="flex flex-col p-4 sm:p-6 mt-[3.75rem]">
				<Title className="mb-2">Ma liste</Title>

				{data?.pages[0].movies.length === 0 && !hasNextPage && (
					<MoviesListPlaceholder />
				)}

				{isInitialLoading && <Loader />}

				{data && (
					<ul className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-2 sm:gap-6 mt-2 md:mt-4">
						{data.pages.map((group, i) => (
							<Fragment key={i}>
								{group.movies.map((movie) => (
									<MovieItem
										title={movie.title}
										poster={movie.poster}
										watchedDate={movie.watchedDate}
										key={movie.uuid}
										onClick={() =>
											push(`/movie/${movie.tmdbId}`)
										}
									/>
								))}
							</Fragment>
						))}
					</ul>
				)}

				<div ref={ref} />

				{isFetchingNextPage && (
					<div className="grid place-items-center py-8 mt-4 w-full">
						<Loader />
					</div>
				)}

				{data?.pages[0].movies &&
					data?.pages[0].movies.length !== 0 &&
					!hasNextPage && (
						<div className="grid place-items-center pb-8 pt-8 w-full text-white">
							Fin de ma liste 🙌
						</div>
					)}
			</div>
		</>
	)
}
