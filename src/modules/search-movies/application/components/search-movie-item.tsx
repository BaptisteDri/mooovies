import { useYearFromDate } from "@/hooks/useYearFromDate"
import { SearchedMovie } from "@/types/movie"
import { usePosterFullPath } from "@/hooks/usePosterFullPath"
import { ShortenedText } from "@/components/shortened-text"
import { Icon } from "@/components/icon"
import Image from "next/image"

type Props = {
	movie: SearchedMovie
	setSelectedMovie: (movie: SearchedMovie) => void
	alreadyAdded: boolean
}

export const SearchMovieItem = ({
	movie,
	setSelectedMovie,
	alreadyAdded,
}: Props) => {
	return (
		<li className="flex justify-between py-4 border-b border-gray-200 dark:border-gray-800 last-of-type:border-none">
			<div className="flex">
				<div className="rounded-xl overflow-hidden h-40 sm:h-60 aspect-[27/40] mr-3 sm:mr-4 table min-w-min relative bg-gray-700">
					<Image
						src={usePosterFullPath(movie.posterPath)}
						alt={movie.title}
						fill
						className="object-cover transition-all duration-150 opacity-100"
						quality={1}
					/>
				</div>
				<div>
					<h2 className="font-semibold text-white sm:text-lg sm:mb-0 mb-1">
						{movie.title}
					</h2>
					<div className="text-gray-400 mb-2 sm:font-semibold text-sm sm:text-base">
						{useYearFromDate(movie.releaseDate)}
					</div>
					<span className="hidden sm:inline">
						<ShortenedText text={movie.overview} />
					</span>
				</div>
			</div>
			{alreadyAdded ? (
				<button
					type="button"
					className="cursor-not-allowed flex items-center font-medium rounded-lg text-sm px-3 py-2 ml-3 sm:ml-4 h-fit text-center bg-gray-800 text-gray-400 border-gray-600 border"
					disabled
				>
					Ajouté
					<Icon className="ml-2 text-base leading-4" name="check" />
				</button>
			) : (
				<button
					type="button"
					onClick={() => setSelectedMovie(movie)}
					className="whitespace-nowrap font-medium rounded-lg text-sm px-3 py-2 ml-3 sm:ml-4 h-fit text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 text-center"
				>
					Ajouter<span className="hidden sm:flex"> à ma liste</span>
				</button>
			)}
		</li>
	)
}
