import { SearchedMovie } from "@/types/movie"
import { AddMovieForm } from "./add-movie-form"
import { useYearFromDate } from "@/hooks/useYearFromDate"
import { GenresList } from "@/components/genres-list"

interface Props {
	movie: SearchedMovie
}

export const DrawerContent = ({ movie }: Props) => {
	return (
		<>
			<div className="mb-2 flex items-baseline flex-wrap">
				<h3 className="mr-2 text-xl font-semibold text-gray-500 dark:text-white">
					{movie.title}
				</h3>
				<p className="text-sm text-gray-400">({movie.originalTitle})</p>
			</div>

			<ul
				role="list"
				className="divide-y divide-gray-200 dark:divide-gray-700 mb-6"
			>
				<li className="h-12 flex justify-between items-center">
					<p className="text-sm text-gray-500 truncate dark:text-gray-400">
						Année de sortie
					</p>
					<div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
						{useYearFromDate(movie.releaseDate)}
					</div>
				</li>
				<li className="h-12 flex justify-between items-center">
					<p className="text-sm text-gray-500 truncate dark:text-gray-400">
						Genre(s)
					</p>
					<GenresList genreIds={movie.genreIds} />
				</li>
				<li className="h-12 flex justify-between items-center">
					<p className="text-sm text-gray-500 truncate dark:text-gray-400">
						Langue
					</p>
					<div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
						{movie.originalLanguage}
					</div>
				</li>
			</ul>

			<AddMovieForm movie={movie} />
		</>
	)
}
