import { Movie } from "@/modules/shared/types/movie"
import { Icon } from "@/ui/components/shared/icon"
import { usePosterFullPath } from "@/ui/hooks/use-poster-full-path"
import Image from "next/image"
import { useMergedClassName } from "@/ui/hooks/use-merged-classname"
import { useRouter } from "next/router"

type Props = {
	movie: Movie
}

export const MovieItem = ({ movie }: Props) => {
	const mCn = useMergedClassName()
	const { push } = useRouter()

	return (
		<li
			onClick={() => push(`/movie/${movie.uuid}`)}
			className="relative rounded-lg overflow-hidden w-full aspect-[27/40] table sm:block min-w-min bg-slate-800"
			role="button"
		>
			<Image
				src={usePosterFullPath(movie.poster)}
				alt={movie.title}
				fill
				className="object-cover"
				quality={80}
				loading="lazy"
				sizes="100%"
			/>

			<div
				className={mCn(
					"top-0 right-0 absolute bg-blue-600 h-7 w-7 rounded-bl-xl flex items-center justify-center drop-shadow-lg translate-x-full -translate-y-full rotate-90 ease-in-out transition-all duration-150",
					movie.watchedDate && "translate-x-0 rotate-0 translate-y-0"
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
