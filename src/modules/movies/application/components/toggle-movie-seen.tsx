import { Movie } from "@/types/movie"
import { toggleMovieIsSeen } from "@/modules/movies/domain/movies.actions"
import { Toggle } from "@/ui/components/shared/form/toggle"
import { useAppDispatch } from "@/config/store"
import { mapMovieToInfraModel } from "@/modules/movies/infrastructure/movies.mapper"

type Props = {
	movie: Movie
}

export const ToggleMovieSeen = ({ movie }: Props) => {
	const dispatch = useAppDispatch()

	const _onToggleMovieIsSeen = async () => {
		await dispatch(
			toggleMovieIsSeen({
				movie: mapMovieToInfraModel({
					...movie,
					isSeen: !movie.isSeen,
				}),
			})
		)
	}

	return (
		<Toggle
			isChecked={movie.isSeen}
			onToggle={() => _onToggleMovieIsSeen()}
			label="Marquer comme vu"
		/>
	)
}
