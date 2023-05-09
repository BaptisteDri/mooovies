import { DeleteMovie } from "./delete-movie"
import { ToggleMovieSeen } from "./toggle-movie-seen"
import { Movie } from "@/types/movie"

interface Props {
	movie: Movie
}

export const DrawerContent = ({ movie }: Props) => {
	return (
		<>
			<h3 className="mb-2 text-xl font-semibold text-gray-500 dark:text-white">
				{movie.title}
			</h3>
			<p className="mb-6 text-gray-400 text-lg">{movie.director}</p>

			<ToggleMovieSeen movie={movie} />

			<ul
				role="list"
				className="divide-y divide-gray-200 dark:divide-gray-700 mb-6"
			>
				<li className="h-12 flex justify-between items-center">
					<p className="text-sm text-gray-500 truncate dark:text-gray-400">
						Année de sortie
					</p>
					<div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
						{movie.year}
					</div>
				</li>
				<li className="h-12 flex justify-between items-center">
					<p className="text-sm text-gray-500 truncate dark:text-gray-400">
						Genre(s)
					</p>
					<div className="inline-flex items-center text-base gap-4 font-semibold text-gray-900 dark:text-white">
						{/* {movie.genre.map((genre, i) => (
                <GenreIcon genre={genre} key={i} />
            ))} */}
					</div>
				</li>
			</ul>

			<DeleteMovie movieId={movie.id} />
		</>
	)
}
