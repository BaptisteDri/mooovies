import { Movie } from "@/types/movie"
// import { Drawer } from "./drawer"
import { useState } from "react"
import { Icon } from "@/components/icon"
import { usePosterFullPath } from "@/hooks/usePosterFullPath"
import { Drawer } from "@/components/drawer"
import { DrawerContent } from "./drawer-content"

interface Props {
	movie: Movie
}

export const MovieItem = ({ movie }: Props) => {
	const [isDrawerOpen, setDrawerVisibility] = useState<boolean>(false)

	return (
		<>
			<li
				onClick={() => setDrawerVisibility(!isDrawerOpen)}
				className={`p-3 cursor-pointer bg-gray-800 rounded-lg relative`}
				role="button"
			>
				<div className="rounded-lg overflow-hidden">
					<img
						className="object-cover w-full h-72 overflow-hidden"
						src={usePosterFullPath(movie.poster)}
						alt={movie.title}
					/>
				</div>
				<div className="mt-2 text-ellipsis overflow-hidden">
					<h2 className="text-gray-900 dark:text-white text-lg font-bold text-ellipsis overflow-hidden whitespace-nowrap	">
						{movie.title}
					</h2>
					<p className="text-gray-500 dark:text-gray-500 text-ellipsis overflow-hidden whitespace-nowrap	">
						{movie.director}
					</p>
				</div>
				{movie.isSeen && (
					<Icon
						name="check_circle"
						className="-top-2 -right-2 absolute text-gray-200 drop-shadow-[0px_0px_5px_rgba(255,255,255,0.5)]"
						fill
					/>
				)}
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
