import { Movie } from "@/types/movie"
import { Alphabetical } from "./components/alphabetical"

interface Props {
	movies: Movie[]
	setMovies: (movies: Movie[]) => void
}

export const MoviesListView = ({ movies, setMovies }: Props) => {
	return (
		<>
			<Alphabetical movies={movies} />
		</>
	)
}
