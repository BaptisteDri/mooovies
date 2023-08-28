import { Movie } from "@/modules/shared/types/movie"
import { MovieItem } from "./movie-item"
import { isCharLetter, removeAccents } from "@/ui/utils/characters"
import { Fragment } from "react"

type Props = {
	movies: Movie[]
}

export const Alphabetical = ({ movies }: Props) => {
	const isNewMovieGroup = (movie: Movie, prevMovie?: Movie) => {
		if (!prevMovie) return true

		return (
			!isCharLetter(movie.title[0]) ||
			removeAccents(movie.title[0]).toLowerCase() ===
				removeAccents(prevMovie?.title[0]).toLowerCase()
		)
	}

	return (
		<div>
			{movies.length > 0 && (
				<h3 className="text-gray-500 mb-4">
					{movies.length} résultats
				</h3>
			)}

			<ul className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-2 sm:gap-6 mt-4">
				{movies.map((movie, i) =>
					isNewMovieGroup(movie, movies[i - 1]) ? (
						<Fragment key={movie.uuid}>
							{!isCharLetter(movie.title[0]) && i === 0 && (
								<h2 className="font-bold text-2xl uppercase col-span-full text-white sm:-mb-2">
									#
								</h2>
							)}
							<MovieItem movie={movie} />
						</Fragment>
					) : (
						<Fragment key={movie.uuid}>
							<h2 className="font-bold text-2xl uppercase col-span-full text-white mt-6 sm:-mb-2">
								{movie.title[0]}
							</h2>
							<MovieItem movie={movie} />
						</Fragment>
					)
				)}
			</ul>
		</div>
	)
}
