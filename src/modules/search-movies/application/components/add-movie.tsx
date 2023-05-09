import { addMovie } from "@/modules/movies/domain/movies.actions"
import { appOutputs } from "@/config/app-outputs"
import { Movie } from "@/types/movie"
import { Movie as InfraMovie } from "@/modules/movies/infrastructure/movies"
import { selectLocalSessionData } from "@/modules/auth/auth.selectors"
import { Title } from "@/components/title"

interface Props {
	movie: Movie
}

export const AddMovie = ({ movie }: Props) => {
	const { moviesOutput } = appOutputs
	const userId = selectLocalSessionData()?.user.id ?? ""

	const _addMovie = async () => {
		const newMovie: InfraMovie = {
			director: movie.director,
			genre_ids: movie.genreIds.join(", "),
			id: movie.id,
			is_seen: movie.isSeen,
			original_language: movie.originalLanguage,
			original_title: movie.originalLanguage,
			poster: movie.poster,
			title: movie.title,
			user_id: movie.userId,
			year: movie.year,
		}

		try {
			await addMovie({ moviesOutput, movie: newMovie })
		} catch (error: any) {
			console.error(error)
		}
	}

	return (
		<div className="flex justify-between">
			<div className="flex">
				<div className="rounded-lg overflow-hidden w-64 mr-6">
					<img
						className="object-cover w-full h-full overflow-hidden"
						src={movie.poster}
						alt={movie.title}
					/>
				</div>
				<Title content={movie.title} />
			</div>
			<button
				type="button"
				onClick={() => _addMovie()}
				className="h-fit text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
			>
				Ajouter à la liste
			</button>
		</div>
	)
}
