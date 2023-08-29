import { Movie } from "@/modules/shared/types/movie"
import { Toggle } from "@/ui/components/shared/form/toggle"
import { mapMovieToInfraModel } from "@/modules/movies/infrastructure/movies.mapper"
import { useToggleMovieIsSeen } from "@/ui/hooks/movies/use-toggle-movie-is-seen"
import { useEffect, useState } from "react"

type Props = {
	movie: Movie
}

export const ToggleMovieSeen = ({ movie }: Props) => {
	const [checked, setChecked] = useState(!!movie.watchedDate)
	const toggleMovieIsSeen = useToggleMovieIsSeen()

	const onToggleMovieIsSeen = () => {
		if (toggleMovieIsSeen.isLoading) return

		setChecked((checked) => !checked)
		toggleMovieIsSeen.mutate({
			movie: mapMovieToInfraModel({
				...movie,
				watchedDate: checked ? null : new Date().toISOString(),
			}),
		})
	}

	useEffect(() => {
		setChecked(!!movie.watchedDate)
	}, [toggleMovieIsSeen.isError])

	return (
		<Toggle
			isChecked={checked}
			onToggle={onToggleMovieIsSeen}
			label="Marquer comme vu"
		/>
	)
}
