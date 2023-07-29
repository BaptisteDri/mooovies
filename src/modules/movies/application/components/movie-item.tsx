import { Movie } from "@/types/movie"
import { Icon } from "@/components/icon"
import { usePosterFullPath } from "@/hooks/usePosterFullPath"
import Image from "next/image"
import { useMergedClassName } from "@/hooks/useMergedClassName"

type Props = {
	movie: Movie
	setSelectedMovie: (movie: Movie) => void
}

export const MovieItem = ({ movie, setSelectedMovie }: Props) => {
	const mergedClassName = useMergedClassName()

	return (
		<>
			<li
				onClick={() => setSelectedMovie(movie)}
				className="p-3 cursor-pointer bg-gray-800 rounded-lg relative flex sm:block overflow-hidden"
				role="button"
			>
				<div className="relative rounded-xl overflow-hidden h-40 sm:h-auto aspect-[27/40] mr-3 sm:mr-0 table sm:block min-w-min bg-gray-700">
					<Image
						src={usePosterFullPath(movie.poster)}
						alt={movie.title}
						fill
						className="object-cover"
						quality={1}
						loading="lazy"
						sizes="100%"
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

				<div
					className={mergedClassName(
						"top-0 right-0 absolute bg-blue-600 h-7 w-7 rounded-bl-xl flex items-center justify-center drop-shadow-lg translate-x-full -translate-y-full rotate-90 ease-in-out transition-all duration-150",
						movie.isSeen && "translate-x-0 rotate-0 translate-y-0"
					)}
				>
					<Icon
						name="check_circle"
						className="text-gray-200 drop-shadow-[0px_0px_5px_rgba(255,255,255,0.4)] text-[20px]"
						fill
					/>
				</div>
			</li>
		</>
	)
}
