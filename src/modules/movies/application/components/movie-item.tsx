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
		<li
			onClick={() => setSelectedMovie(movie)}
			className="relative rounded-lg overflow-hidden w-full aspect-[27/40] table sm:block min-w-min bg-gray-700"
			role="button"
		>
			<Image
				src={usePosterFullPath(movie.poster)}
				alt={movie.title}
				fill
				className="object-cover"
				quality={1}
				loading="lazy"
				sizes="100%"
			/>

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
	)
}
