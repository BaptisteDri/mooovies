import { useState } from "react"
import { AddMovie } from "./add-movie"
import { useYearFromDate } from "@/hooks/useYearFromDate"
import { Movie as InfraMovie } from "@/modules/movies/infrastructure/movies"
import { selectLocalSessionData } from "@/modules/auth/auth.selectors"
import { SearchedMovie } from "@/types/movie"
import { Toggle } from "@/components/toggle"

interface Props {
	movie: SearchedMovie
}

export const AddMovieForm = ({ movie }: Props) => {
	const [newMovie, setNewMovie] = useState<InfraMovie>({
		id: movie.id,
		director: "",
		genre_ids: movie.genreIds.join(", "),
		is_seen: false, // to determine
		poster: movie.posterPath,
		title: movie.title,
		user_id: selectLocalSessionData()?.user.id ?? "", // to determine
		year: useYearFromDate(movie.releaseDate) ?? "",
		original_language: movie.originalLanguage,
		original_title: movie.originalTitle,
	})

	return (
		<>
			<Toggle
				isChecked={newMovie.is_seen}
				label="Marquer comme vu"
				onToggle={() =>
					setNewMovie({
						...newMovie,
						is_seen: !newMovie.is_seen,
					})
				}
			/>

			<AddMovie movie={newMovie} />
		</>
	)
}
