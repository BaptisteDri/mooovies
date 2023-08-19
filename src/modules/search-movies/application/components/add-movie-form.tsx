import { useState } from "react"
import { AddMovie } from "./add-movie"
import { useYearFromDate } from "@/hooks/useYearFromDate"
import { Movie as InfraMovie } from "@/modules/movies/infrastructure/movies"
import { selectLocalSessionData } from "@/modules/auth/auth.selectors"
import { SearchedMovie } from "@/types/movie"
import { Toggle } from "@/ui/components/toggle"

type Props = {
	movie: SearchedMovie
	children?: React.ReactNode
}

export const AddMovieForm = ({ movie, children }: Props) => {
	const [newMovie, setNewMovie] = useState<InfraMovie>({
		id: movie.id,
		director: "",
		genre_ids: movie.genreIds.join(", "),
		is_seen: false,
		poster: movie.posterPath,
		title: movie.title,
		user_id: selectLocalSessionData()?.user.id ?? "", // to determine
		year: useYearFromDate(movie.releaseDate) ?? "",
		original_language: movie.originalLanguage,
		original_title: movie.originalTitle,
		overview: movie.overview,
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
			{children}
			<AddMovie movie={newMovie} />
		</>
	)
}
