import { MovieDetails } from "@/components/movie-details"
import { DeleteMovie } from "./delete-movie"
import { ToggleMovieSeen } from "./toggle-movie-seen"
import { Movie } from "@/types/movie"

interface Props {
	movie: Movie
}

export const DrawerContent = ({ movie }: Props) => (
	<>
		<div className="mb-2 flex items-baseline flex-wrap">
			<h3 className="mr-2 text-xl font-semibold text-gray-500 dark:text-white">
				{movie.title}
			</h3>
			<p className="text-sm text-gray-400">({movie.originalTitle})</p>
		</div>
		<p className="mb-8 text-gray-400 text-lg">{movie.director}</p>

		<ToggleMovieSeen movie={movie} />

		<MovieDetails
			year={movie.year}
			genreIds={movie.genreIds}
			originalLanguage={movie.originalLanguage}
		/>

		<DeleteMovie movieId={movie.id} />
	</>
)
