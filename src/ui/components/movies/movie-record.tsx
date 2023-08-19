import { useGetUserMovies } from "@/ui/hooks/movies/use-get-user-movies"
import { MovieDetails } from "../shared/movie-details"
import { DeleteMovie } from "./delete-movie"
import { ToggleMovieSeen } from "./toggle-movie-seen"
import { selectLocalSessionData } from "@/modules/auth/auth.selectors"
import { useMemo } from "react"
import { Movie } from "@/modules/shared/types/movie"

type Props = {
	movie: Movie
}

export const MovieRecord = ({ movie }: Props) => {
	return (
		<div>
			{movie && (
				<>
					<p className="text-sm text-gray-400 mb-8">
						({movie.originalTitle})
					</p>

					{/* {isLoggedInSession && <ToggleMovieSeen movie={movie} />} */}

					<MovieDetails
						year={movie.year}
						genreIds={movie.genreIds}
						originalLanguage={movie.originalLanguage}
						overview={movie.overview}
						director={movie.director}
					/>

					{/* {isLoggedInSession && <DeleteMovie movie={movie} />} */}
				</>
			)}
		</div>
	)
}
