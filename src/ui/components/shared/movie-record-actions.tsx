import { Movie } from "@/modules/shared/types/movie"
import { useMergedClassName } from "@/ui/hooks/use-merged-classname"
import { DeleteMovie } from "./delete-movie"
import { ToggleMovieSeen } from "../movies/toggle-movie-seen"
import { AddMovie } from "@/ui/components/movies/add-movie"

type Props = {
	isInMainList: boolean
	movie: Omit<Movie, "uuid"> & { uuid?: string }
}

export const MovieRecordActions = ({ movie }: Props) => {
	const mCn = useMergedClassName()

	return (
		<div
			className={mCn(
				"grid gap-3 mt-2 max-w-xl",
				movie.uuid && "grid-cols-2"
			)}
		>
			{movie.uuid ? (
				<>
					<ToggleMovieSeen movie={{ ...movie, uuid: movie.uuid }} />
					<DeleteMovie movie={{ ...movie, uuid: movie.uuid }} />
				</>
			) : (
				<AddMovie movie={movie} />
			)}
		</div>
	)
}
