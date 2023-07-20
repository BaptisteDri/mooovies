import { deleteMovie } from "@/modules/movies/domain/movies.actions"
import { Spinner } from "@/components/spinner"
import { useAppDispatch, useAppSelector } from "@/config/store"
import { selectDeleteMovieStatus } from "../../domain/movies.selectors"
import { RequestStatus } from "@/types/request-status"
import { Movie } from "@/types/movie"
import { mapMovieToInfraModel } from "../../infrastructure/movies.mapper"

type Props = {
	movie: Movie
}

export const DeleteMovie = ({ movie }: Props) => {
	const dispatch = useAppDispatch()
	const requestStatus = useAppSelector(selectDeleteMovieStatus)

	const _deleteMovie = async () => {
		await dispatch(deleteMovie({ movie: mapMovieToInfraModel(movie) }))
	}

	return (
		<button
			onClick={() => _deleteMovie()}
			className="flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
			disabled={requestStatus === RequestStatus.LOADING}
		>
			{requestStatus === RequestStatus.LOADING && <Spinner />}
			Supprimer de la liste
		</button>
	)
}
