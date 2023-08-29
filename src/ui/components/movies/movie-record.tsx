import { MovieDetails } from "../shared/movie-details"
import { DeleteMovie } from "./delete-movie"
import { ToggleMovieSeen } from "./toggle-movie-seen"
import { Movie } from "@/modules/shared/types/movie"
import { selectIsLoggedInSession } from "@/modules/auth/auth.selectors"
import { useAppSelector } from "@/config/store"
import { Title } from "../shared/title"

type Props = {
	movie: Movie
}

export const MovieRecord = ({ movie }: Props) => {
	const isLoggedInSession = useAppSelector(selectIsLoggedInSession)

	return (
		<div>
			<Title className="mb-4 sm:mb-6">{movie.title}</Title>

			<p className="text-sm text-gray-400 mb-8">
				({movie.originalTitle})
			</p>

			{isLoggedInSession && <ToggleMovieSeen movie={movie} />}

			<MovieDetails
				year={movie.year}
				genreIds={movie.genreIds}
				originalLanguage={movie.originalLanguage}
				overview={movie.overview}
				director={movie.director}
			/>

			{isLoggedInSession && <DeleteMovie movie={movie} />}
		</div>
	)
}
