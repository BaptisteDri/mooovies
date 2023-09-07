// import { addMovie } from "@/modules/movies/domain/movies.actions"
import { appOutputs } from "@/config/app-outputs"
import { Movie as InfraMovie } from "@/modules/movies/infrastructure/movies"
import { getMovieCredits } from "@/modules/search-movies/domain/search-movies.actions"
import { Spinner } from "@/ui/components/shared/spinner"
import { useAddMovie } from "@/ui/hooks/movies/use-add-movie"

type Props = {
	movie: InfraMovie
	searchedMovieId: number
}

export const AddMovie = ({ movie, searchedMovieId }: Props) => {
	const addMovie = useAddMovie()

	// const { searchMoviesOutput } = appOutputs

	// const _getMovieCredits = async () => {
	// 	try {
	// 		const director: string[] = await getMovieCredits({
	// 			searchMoviesOutput,
	// 			movieId: searchedMovieId,
	// 		})
	// 		movie.director = director.join(", ")
	// 	} catch (error: any) {
	// 		console.error(error)
	// 	}
	// }

	// const _addMovie = async () => {
	// 	await _getMovieCredits()
	// 	addMovie.mutate({ movie })
	// }

	return (
		<button
			type="button"
			// onClick={() => _addMovie()}
			className="flex items-center h-fit text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-800 shadow-lg shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
			disabled={addMovie.isLoading || addMovie.isSuccess}
		>
			{addMovie.isLoading && <Spinner />}
			{addMovie.isSuccess ? "Ajouté" : "Ajouter à ma liste"}
		</button>
	)
}
