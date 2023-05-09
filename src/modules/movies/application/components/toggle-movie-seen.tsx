import { Movie } from "@/types/movie"
import { Movie as InfraMovie } from "@/modules/movies/infrastructure/movies"
import { toggleMovieIsSeen } from "@/modules/movies/domain/movies.actions"
import { appOutputs } from "@/config/app-outputs"
import { Toggle } from "@/components/toggle"

interface Props {
	movie: Movie
}

export const ToggleMovieSeen = ({ movie }: Props) => {
	const { moviesOutput } = appOutputs

	const _onToggleMovieIsSeen = async () => {
		try {
			await toggleMovieIsSeen({
				moviesOutput,
				movieId: movie.id,
				isSeen: !movie.isSeen,
			})
		} catch (error: any) {
			console.error(error)
		}
	}

	return (
		<Toggle
			isChecked={movie.isSeen}
			onToggle={() => _onToggleMovieIsSeen()}
			label="Marquer comme vu"
		/>
	)
}
