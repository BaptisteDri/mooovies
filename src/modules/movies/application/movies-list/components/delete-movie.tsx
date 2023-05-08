import { deleteMovie } from "@/modules/movies/domain/movies.actions"
import { appOutputs } from "@/config/app-outputs"

interface Props {
	movieId: number
}

export const DeleteMovie = ({ movieId }: Props) => {
	const { moviesOutput } = appOutputs

	const _deleteMovie = async () => {
		try {
			await deleteMovie({ moviesOutput, movieId })
		} catch (error: any) {
			console.error(error)
		}
	}

	return (
		<button
			onClick={() => _deleteMovie()}
			className="px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
		>
			Supprimer de la liste
		</button>
	)
}
