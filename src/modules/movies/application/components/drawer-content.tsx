import { MovieDetails } from "@/components/movie-details"
import { DeleteMovie } from "./delete-movie"
import { ToggleMovieSeen } from "./toggle-movie-seen"
import { Movie } from "@/types/movie"

interface Props {
	movie: Movie
}

export const DrawerContent = ({ movie }: Props) => (
	<>
		<h3 className="text-xl font-semibold text-gray-500 dark:text-white">
			{movie.title}
		</h3>
		<p className="text-sm text-gray-400 mb-8">({movie.originalTitle})</p>

		<ToggleMovieSeen movie={movie} />

		<MovieDetails
			year={movie.year}
			genreIds={movie.genreIds}
			originalLanguage={movie.originalLanguage}
			overview={movie.overview}
			director={movie.director}
		/>

		<DeleteMovie movieId={movie.id} />
	</>
)
