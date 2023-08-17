import { useEffect, useMemo } from "react"
import { Movie } from "@/types/movie"
import { MovieItem } from "./movie-item"

type Props = {
	movies: Movie[]
	setSelectedMovie: (movie: Movie) => void
}

interface MoviesGroups {
	[letter: string]: Movie[]
}

export const Alphabetical = ({ movies, setSelectedMovie }: Props) => {
	const removeAccents = (str: string) => {
		return str
			.normalize("NFD")
			.replace(/[\u0300-\u036f]/g, "")
			.replace(/đ/g, "d")
			.replace(/Đ/g, "D")
	}

	const moviesGroups = useMemo(() => {
		const groups: MoviesGroups = {}

		for (let i = 65; i <= 90; i++) {
			const letter = String.fromCharCode(i)
			groups[letter] = []
		}
		groups["#"] = []

		const sortedMovies = [...movies].sort((a, b) =>
			removeAccents(a.title).localeCompare(removeAccents(b.title))
		)

		sortedMovies.forEach((movie: Movie) => {
			const letterIndex: string = removeAccents(
				movie.title[0]
			).toUpperCase()
			groups[letterIndex]
				? groups[letterIndex].push(movie)
				: groups["#"].push(movie)
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
				{Object.entries(moviesGroups).map(([letter, movies]) =>
					movies.length > 0 ? (
						<div key={letter}>
							<h2
								className={`${
									movies.length > 0
										? "text-white"
										: "text-gray-400"
								} font-bold text-lg`}
							>
								{letter}
							</h2>
							{movies.length > 0 && (
								<ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-4 mt-4">
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
