import { Icon } from "@/components/icon"
import { useTrimmedString } from "@/hooks/useTrimmedString"
import { useYearFromDate } from "@/hooks/useYearFromDate"
import { SearchedMovie } from "@/types/movie"

interface Props {
	movie: SearchedMovie
}

export const SearchMovieItem = ({ movie }: Props) => {
	return (
		<li className="flex justify-between py-4">
			<div className="flex">
				<img
					src={`https://image.tmdb.org/t/p/original/${movie.posterPath}`}
					className="h-48 rounded-md mr-4"
				/>
				<div>
					<h2 className="font-semibold text-white text-lg">
						{movie.title}
					</h2>
					<div className="text-gray-500">
						{useYearFromDate(movie.releaseDate)}
					</div>
					<p className="mt-2 text-sm text-gray-500">
						{useTrimmedString(movie.overview, 300)}
					</p>
				</div>
			</div>
			<button
				type="button"
				// onClick={() => _addMovie()}
				className="ml-4 h-fit text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
			>
				Ajouter
			</button>
		</li>
	)
}
