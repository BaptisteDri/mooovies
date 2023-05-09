import { deleteMovie } from "@/modules/movies/domain/movies.actions"
import { appOutputs } from "@/config/app-outputs"
import { useRequestStatus, STATUS } from "@/hooks/useRequestStatus"
import { Spinner } from "@/components/spinner"

interface Props {
	movieId: number
}

export const DeleteMovie = ({ movieId }: Props) => {
	const { requestStatus, setRequestStatus } = useRequestStatus()
	const { moviesOutput } = appOutputs

	const _deleteMovie = async () => {
		try {
			setRequestStatus(STATUS.LOADING)
			await deleteMovie({ moviesOutput, movieId })
			setRequestStatus(STATUS.DONE)
		} catch (error: any) {
			setRequestStatus(STATUS.DONE)
			console.error(error)
		}
	}

	return (
		<button
			onClick={() => _deleteMovie()}
			className="flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
			disabled={requestStatus === STATUS.LOADING}
		>
			{requestStatus === STATUS.LOADING && <Spinner />}
			Supprimer de la liste
		</button>
	)
}
