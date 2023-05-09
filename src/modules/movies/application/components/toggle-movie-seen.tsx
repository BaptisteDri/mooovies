import { Movie } from "@/types/movie"
import { Movie as DomainMovie } from "@/modules/movies/domain/movies"
import { updateMovie } from "@/modules/movies/domain/movies.actions"
import { appOutputs } from "@/config/app-outputs"

interface Props {
	movie: Movie
}

export const ToggleMovieSeen = ({ movie }: Props) => {
	const { moviesOutput } = appOutputs

	const _onToggleMovieIsSeen = async () => {
		const newMovie: DomainMovie = {
			...movie,
			genre: movie.genre.join(", "),
			is_seen: !movie.is_seen,
		}

		try {
			await updateMovie({ moviesOutput, movie: newMovie })
		} catch (error: any) {
			console.error(error)
		}
	}

	return (
		<form className="flex justify-between items-center mb-6">
			<div className="text-white font-bold">Marquer comme vu</div>
			<label className="relative flex items-center cursor-pointer">
				<input
					type="checkbox"
					checked={movie.is_seen}
					onChange={() => _onToggleMovieIsSeen()}
					className="sr-only peer"
				/>

				<div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
			</label>
		</form>
	)
}
