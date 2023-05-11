import { Movie } from "@/types/movie"
import { Icon } from "@/components/icon"
import { usePosterFullPath } from "@/hooks/usePosterFullPath"

interface Props {
	movie: Movie
	setSelectedMovie: (movie: Movie) => void
}

export const MovieItem = ({ movie, setSelectedMovie }: Props) => {
	return (
		<>
			<li
				onClick={() => setSelectedMovie(movie)}
				className={`p-3 cursor-pointer bg-gray-800 rounded-lg relative flex sm:block`}
				role="button"
			>
				<div className="rounded-lg overflow-hidden h-40 sm:h-auto aspect-[27/40] mr-3 sm:mr-0 table sm:block min-w-min">
					<img
						className="object-cover w-full h-full overflow-hidden"
						src={usePosterFullPath(movie.poster)}
						alt={movie.title}
					/>
				</div>
				<div className="mt-2 text-ellipsis overflow-hidden whitespace-nowrap">
					<h2 className="text-gray-900 dark:text-white sm:text-lg font-bold text-ellipsis overflow-hidden whitespace-nowrap">
						{movie.title}
					</h2>
					<p className="text-gray-500 dark:text-gray-400 text-ellipsis overflow-hidden whitespace-nowrap text-sm sm:text-base sm:mt-0 mt-1">
						{movie.director}
					</p>
					<p className="block sm:hidden mt-2 text-white text-sm">
						{movie.year}
					</p>
				</div>
				{movie.isSeen && (
					<Icon
						name="check_circle"
						className="-top-2 -right-2 absolute text-gray-200 drop-shadow-[0px_0px_5px_rgba(255,255,255,0.4)]"
						fill
					/>
				)}
			</li>
		</>
	)
}
