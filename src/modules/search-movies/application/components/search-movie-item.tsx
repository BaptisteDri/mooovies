import { useState } from "react"
import { useTrimmedString } from "@/hooks/useTrimmedString"
import { useYearFromDate } from "@/hooks/useYearFromDate"
import { SearchedMovie } from "@/types/movie"
import { usePosterFullPath } from "@/hooks/usePosterFullPath"
import { Drawer } from "@/components/drawer"
import { DrawerContent } from "./drawer-content"
import { ShortenedText } from "@/components/shortened-text"

interface Props {
	movie: SearchedMovie
}

export const SearchMovieItem = ({ movie }: Props) => {
	const [isDrawerOpen, setDrawerVisibility] = useState<boolean>(false)

	return (
		<>
			<li className="flex justify-between py-4 border-b border-gray-200 dark:border-gray-800 last-of-type:border-none">
				<div className="flex">
					<img
						src={usePosterFullPath(movie.posterPath)}
						className="h-48 rounded-md mr-4"
					/>
					<div>
						<h2 className="font-semibold text-white text-lg">
							{movie.title}
						</h2>
						<div className="text-gray-400 mb-2">
							{useYearFromDate(movie.releaseDate)}
						</div>
						<ShortenedText text={movie.overview} />
					</div>
				</div>
				<button
					type="button"
					onClick={() => setDrawerVisibility(!isDrawerOpen)}
					className="ml-4 h-fit text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
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
