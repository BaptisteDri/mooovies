import { useEffect, useState } from "react"
import { SearchedMovie } from "@/types/movie"
import { useClickOutside } from "@/hooks/useClickOutside"
import { Icon } from "@/components/icon"
import { Director } from "./director"
import { useYearFromDate } from "@/hooks/useYearFromDate"
import { GenresList } from "@/components/genres-list"
import { Movie } from "@/modules/movies/domain/movies"

interface Props {
	isOpen: boolean
	onCloseDrawer: () => void
	movie: SearchedMovie
}

export const Drawer = ({ isOpen, onCloseDrawer, movie }: Props) => {
	const [newMovie, setNewMovie] = useState<Movie>({
		id: movie.id,
		director: "",
		genre: "",
		is_seen: false,
		poster: movie.posterPath,
		runtime: "",
		title: movie.title,
		user_id: "",
		year: "",
	})

	const ref = useClickOutside(
		onCloseDrawer
	) as React.RefObject<HTMLDivElement>

	useEffect(() => {
		function handleKeyPress(event: KeyboardEvent) {
			if (event.keyCode === 27) {
				onCloseDrawer()
			}
		}

		document.addEventListener("keydown", handleKeyPress)

		return () => {
			document.removeEventListener("keydown", handleKeyPress)
		}
	}, [])

	return (
		<div
			ref={ref}
			className={`fixed top-0 right-0 z-40 h-screen p-6 overflow-y-auto transition-transform bg-white w-96 dark:bg-gray-800 border-l border-gray-700 ${
				!isOpen && "translate-x-full"
			}`}
			tabIndex={-1}
		>
			<div className="flex justify-end mb-4">
				<button
					onClick={() => onCloseDrawer()}
					type="button"
					className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
				>
					<Icon name="close" />
				</button>
			</div>

			<div className="mb-2 flex items-baseline flex-wrap">
				<h3 className="mr-2 text-xl font-semibold text-gray-500 dark:text-white">
					{movie.title}
				</h3>
				<p className="text-sm text-gray-400">({movie.originalTitle})</p>
			</div>
			{isOpen && <Director movieId={movie.id} />}

			{/* <ToggleMovieSeen movie={movie} /> */}

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

			{/* <DeleteMovie movieId={movie.id} /> */}
		</div>
	)
}
