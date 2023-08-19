// import { deleteMovie } from "@/modules/movies/domain/movies.actions"
import { Spinner } from "@/ui/components/shared/spinner"
import { useAppDispatch, useAppSelector } from "@/config/store"
// import { selectDeleteMovieStatus } from "@/modules/movies/domain/movies.selectors"
import { RequestStatus } from "@/modules/shared/types/request-status"
import { Movie } from "@/modules/shared/types/movie"
import { mapMovieToInfraModel } from "@/modules/movies/infrastructure/movies.mapper"

type Props = {
	movie: Movie
}

export const DeleteMovie = ({ movie }: Props) => {
	const dispatch = useAppDispatch()
	// const requestStatus = useAppSelector(selectDeleteMovieStatus)

	// const _deleteMovie = async () => {
	// 	await dispatch(deleteMovie({ movie: mapMovieToInfraModel(movie) }))
	// }

	return <></>

	// return (
	// 	<button
	// 		onClick={() => _deleteMovie()}
	// 		className="flex items-center px-4 py-2 text-sm font-medium text-center border rounded-lg focus:outline-none focus:z-10 focus:ring-4 focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700"
	// 		disabled={requestStatus === RequestStatus.LOADING}
	// 	>
	// 		{requestStatus === RequestStatus.LOADING && <Spinner />}
	// 		Supprimer de la liste
	// 	</button>
	// )
}
