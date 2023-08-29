import { useState } from "react"
import { AddMovie } from "./add-movie"
import { useYearFromDate } from "@/ui/hooks/use-year-from-date"
import { Movie as InfraMovie } from "@/modules/movies/infrastructure/movies"
import { selectLocalSessionData } from "@/modules/auth/auth.selectors"
import { SearchedMovie } from "@/modules/shared/types/movie"
import { Toggle } from "@/ui/components/shared/form/toggle"

type Props = {
	movie: SearchedMovie
	children?: React.ReactNode
}

export const AddMovieForm = ({ movie, children }: Props) => {
	const [checked, setChecked] = useState(false)

	const [newMovie, setNewMovie] = useState<InfraMovie>({
		uuid: "",
		director: "",
		genre_ids: movie.genreIds.join(", "),
		watched_date: null,
		poster: movie.posterPath,
		title: movie.title,
		user_id: selectLocalSessionData()?.user.id ?? "", // to determine
		year: useYearFromDate(movie.releaseDate) ?? "",
		original_language: movie.originalLanguage,
		original_title: movie.originalTitle,
		overview: movie.overview,
	})

	const toggleMovieIsSeen = () => {
		setChecked((checked) => !checked)
		setNewMovie({
			...newMovie,
			watched_date: checked ? null : new Date().toISOString(),
		})
	}

	return (
		<>
			<Toggle
				isChecked={checked}
				label="Marquer comme vu"
				onToggle={toggleMovieIsSeen}
			/>
			{children}
			<AddMovie movie={newMovie} searchedMovieId={movie.id} />
		</>
	)
}
