import { useEffect } from "react"
import { Movie } from "@/types/movie"
import { useClickOutside } from "@/hooks/useClickOutside"

interface Props {
	isOpen: boolean
	onCloseDrawer: () => void
	movie: Movie
}

export const Drawer = ({ isOpen, onCloseDrawer, movie }: Props) => {
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
			className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-96 dark:bg-gray-800 border-l border-gray-700 ${
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
					<svg
						aria-hidden="true"
						className="w-5 h-5"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							clip-rule="evenodd"
						></path>
					</svg>
					<span className="sr-only">Close menu</span>
				</button>
			</div>

			<h3 className="mb-2 text-xl font-semibold text-gray-500 dark:text-white">
				{movie.title}
			</h3>
			<p className="mb-6 text-gray-500">{movie.director}</p>

			<form className="flex justify-between items-center mb-6">
				<div className="text-white">Film vu</div>
				<label className="relative flex items-center cursor-pointer">
					<input
						type="checkbox"
						checked={movie.is_seen}
						className="sr-only peer"
					/>
					<div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
				</label>
			</form>

			<ul
				role="list"
				className="divide-y divide-gray-200 dark:divide-gray-700 mb-6"
			>
				<li className="py-3 sm:py-4">
					<div className="flex justify-between">
						<p className="text-sm text-gray-500 truncate dark:text-gray-400">
							Année de sortie
						</p>
						<div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
							{movie.year}
						</div>
					</div>
				</li>
				<li className="py-3 sm:py-4">
					<div className="flex justify-between">
						<p className="text-sm text-gray-500 truncate dark:text-gray-400">
							Genre(s)
						</p>
						<div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
							{movie.genre.map((genre, i) => (
								<span key={i}>{genre}</span>
							))}
						</div>
					</div>
				</li>
				<li className="py-3 sm:py-4">
					<div className="flex justify-between">
						<p className="text-sm text-gray-500 truncate dark:text-gray-400">
							Durée
						</p>
						<div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
							{movie.runtime}
						</div>
					</div>
				</li>
			</ul>

			<button className="px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
				Supprimer de la liste
			</button>
		</div>
	)
}
