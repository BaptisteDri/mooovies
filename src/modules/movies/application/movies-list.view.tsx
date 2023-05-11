import { useState } from "react"
import { Movie } from "@/types/movie"
import { Alphabetical } from "./components/alphabetical"
import { Drawer } from "@/components/drawer"
import { DrawerContent } from "./components/drawer-content"

interface Props {
	movies: Movie[]
}

export const MoviesListView = ({ movies }: Props) => {
	const [selectedMovie, setSelectedMovie] = useState<Movie | undefined>(
		undefined
	)

	return (
		<>
			<Alphabetical movies={movies} setSelectedMovie={setSelectedMovie} />

			<Drawer
				isOpen={selectedMovie !== undefined}
				onCloseDrawer={() => setSelectedMovie(undefined)}
			>
				{selectedMovie && <DrawerContent movie={selectedMovie} />}
			</Drawer>
		</>
	)
}
