import { Movie } from "@/types/movie"
import { MovieItem } from "./movie-item"

interface Props {
	movies: Movie[]
}

interface MoviesGroups {
	[letter: string]: Movie[]
}

export const Alphabetical = ({ movies }: Props) => {
	const moviesGroups: MoviesGroups = {}
	for (let i = 65; i <= 90; i++) {
		const letter = String.fromCharCode(i)
		moviesGroups[letter] = []
	}

	movies
		.sort((a, b) => a.title.localeCompare(b.title))
		.forEach((movie: Movie) => {
			const letterIndex: string = movie.title[0].toUpperCase()
			moviesGroups[letterIndex].push(movie)
		})

	return (
		<div className="flex flex-col gap-4">
			{Object.entries(moviesGroups).map(([letter, movies]) => (
				<div key={letter}>
					<h2
						className={`${
							movies.length > 0
								? "text-gray-900 dark:text-white"
								: "text-gray-500 dark:text-gray-400"
						} font-bold text-lg`}
					>
						{letter}
					</h2>
					{movies.length > 0 && (
						<ul className="grid-cols-4 grid gap-6 mt-4">
							{movies.map((movie: Movie, i: number) => (
								<MovieItem key={i} movie={movie} />
							))}
						</ul>
					)}
				</div>
			))}
		</div>
	)
}
