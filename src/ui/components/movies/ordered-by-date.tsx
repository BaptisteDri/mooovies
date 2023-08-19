import { useEffect, useMemo } from "react"
import { Movie } from "@/modules/shared/types/movie"
import { MovieItem } from "./movie-item"
import { genres, useGenre } from "@/ui/hooks/use-genre"

type Props = {
	movies: Movie[]
	setSelectedMovie: (movie: Movie) => void
}

interface MoviesGroups {
	[date: string]: Movie[]
}

export const OrderedByDate = ({ movies, setSelectedMovie }: Props) => {
	const removeAccents = (str: string) => {
		return str
			.normalize("NFD")
			.replace(/[\u0300-\u036f]/g, "")
			.replace(/đ/g, "d")
			.replace(/Đ/g, "D")
	}

	const moviesGroups = useMemo(() => {
		const groups: MoviesGroups = {}

		const sortedMovies = [...movies].sort((a, b) =>
			removeAccents(a.title).localeCompare(removeAccents(b.title))
		)

		sortedMovies.forEach((movie: Movie) => {
			groups[movie.year]
				? groups[movie.year].push(movie)
				: (groups[movie.year] = [movie])
		})

		return groups
	}, [movies])

	return (
		<div>
			{movies.length > 0 && (
				<h3 className="text-gray-500 mb-4">
					{movies.length} résultats
				</h3>
			)}
			<div className="flex flex-col gap-4">
				{Object.entries(moviesGroups).map(([genreId, movies]) =>
					movies.length > 0 ? (
						<div key={genreId}>
							<h2
								className={`${
									movies.length > 0
										? "text-white"
										: "text-gray-400"
								} font-bold text-lg`}
							>
								{movies[0].year}
							</h2>
							{movies.length > 0 && (
								<ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-6 mt-4">
									{movies.map((movie: Movie, i: number) => (
										<MovieItem
											key={i}
											movie={movie}
											setSelectedMovie={setSelectedMovie}
										/>
									))}
								</ul>
							)}
						</div>
					) : null
				)}
			</div>
		</div>
	)
}
