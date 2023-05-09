import { Movie } from "@/types/movie"
import { Alphabetical } from "./components/alphabetical"

interface Props {
	movies: Movie[]
}

export const MoviesListView = ({ movies }: Props) => {
	return (
		<div>
			<Alphabetical movies={movies} />
		</div>
	)
}
