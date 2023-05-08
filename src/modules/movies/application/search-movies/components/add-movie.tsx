import { addMovie } from "@/modules/movies/domain/movies.actions"
import { appOutputs } from "@/config/app-outputs"
import { Movie } from "@/types/movie"
import { Movie as DomainMovie } from "@/modules/movies/domain/movies"
import { selectLocalSessionData } from "@/modules/auth/auth.selectors"

interface Props {
	movie: Movie
}

export const AddMovie = ({ movie }: Props) => {
	const { moviesOutput } = appOutputs
	const userId = selectLocalSessionData()?.user.id ?? ""

	const _addMovie = async () => {
		const newMovie: DomainMovie = {
			...movie,
			genre: movie.genre.join(", "),
			user_id: userId,
		}

		try {
			await addMovie({ moviesOutput, movie: newMovie })
		} catch (error: any) {
			console.error(error)
		}
	}

	return (
		<div>
			<button onClick={() => _addMovie()}>add movie</button>
		</div>
	)
}
