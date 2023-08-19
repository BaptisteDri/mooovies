import { SearchedMovie } from "@/modules/shared/types/movie"
import { AddMovieForm } from "./add-movie-form"
import { useYearFromDate } from "@/ui/hooks/use-year-from-date"
import { MovieDetails } from "@/ui/components/movie-details"

type Props = {
	movie: SearchedMovie
}

export const DrawerContent = ({ movie }: Props) => (
	<>
		<h3 className="text-xl font-semibold text-white">{movie.title}</h3>
		<p className="text-sm text-gray-400 mb-8">({movie.originalTitle})</p>

		<AddMovieForm movie={movie}>
			<MovieDetails
				year={useYearFromDate(movie.releaseDate) ?? ""}
				genreIds={movie.genreIds}
				originalLanguage={movie.originalLanguage}
				overview={movie.overview}
			/>
		</AddMovieForm>
	</>
)
