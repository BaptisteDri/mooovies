import { useState } from "react"
import { useYearFromDate } from "@/hooks/useYearFromDate"
import { SearchedMovie } from "@/types/movie"
import { usePosterFullPath } from "@/hooks/usePosterFullPath"
import { Drawer } from "@/components/drawer"
import { DrawerContent } from "./drawer-content"
import { ShortenedText } from "@/components/shortened-text"
import { Icon } from "@/components/icon"

interface Props {
	movie: SearchedMovie
}

export const SearchMovieItem = ({ movie }: Props) => {
	const [isDrawerOpen, setDrawerVisibility] = useState<boolean>(false)

	return (
		<>
			<li className="flex justify-between py-4 border-b border-gray-200 dark:border-gray-800 last-of-type:border-none">
				<div className="flex">
					<div className="rounded-lg overflow-hidden h-40 sm:h-auto sm:w-full aspect-[27/40] mr-3 sm:mr-4 table sm:block">
						<img
							className="object-cover w-full h-full overflow-hidden"
							src={usePosterFullPath(movie.posterPath)}
							alt={movie.title}
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
				<button
					type="button"
					onClick={() => setDrawerVisibility(!isDrawerOpen)}
					className="font-medium rounded-lg text-sm px-3 py-1.5 sm:px-5 sm:py-2.5 ml-3 sm:ml-4 h-fit text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 text-center"
				>
					Ajouter
				</button>
			</li>
			<Drawer
				isOpen={isDrawerOpen}
				onCloseDrawer={() => setDrawerVisibility(false)}
			>
				<DrawerContent movie={movie} />
			</Drawer>
		</>
	)
}
