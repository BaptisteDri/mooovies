import { SearchedMovie } from "@/types/movie"
import { AddMovieForm } from "./add-movie-form"
import { useYearFromDate } from "@/hooks/useYearFromDate"
import { GenresList } from "@/components/genres-list"
import { MovieDetails } from "@/components/movie-details"

interface Props {
	movie: SearchedMovie
}

export const DrawerContent = ({ movie }: Props) => (
	<>
		<div className="mb-8 flex items-baseline flex-wrap">
			<h3 className="mr-2 text-xl font-semibold text-gray-500 dark:text-white">
				{movie.title}
			</h3>
			<p className="text-sm text-gray-400">({movie.originalTitle})</p>
		</div>

		<AddMovieForm movie={movie}>
			<MovieDetails
				year={useYearFromDate(movie.releaseDate) ?? ""}
				genreIds={movie.genreIds}
				originalLanguage={movie.originalLanguage}
			/>
		</AddMovieForm>
	</>
)
