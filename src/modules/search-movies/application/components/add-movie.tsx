import { addMovie } from "@/modules/movies/domain/movies.actions"
import { appOutputs } from "@/config/app-outputs"
import { Movie as InfraMovie } from "@/modules/movies/infrastructure/movies"
import { getMovieCredits } from "@/modules/search-movies/domain/search-movies.actions"
import { useRouter } from "next/router"
import { Spinner } from "@/ui/components/shared/spinner"
import { useAppDispatch, useAppSelector } from "@/config/store"
import { selectAddMovieStatus } from "@/modules/movies/domain/movies.selectors"
import { RequestStatus } from "@/modules/shared/types/request-status"

type Props = {
	movie: InfraMovie
}

export const AddMovie = ({ movie }: Props) => {
	const router = useRouter()
	const dispatch = useAppDispatch()
	const requestStatus = useAppSelector(selectAddMovieStatus)
	const { searchMoviesOutput } = appOutputs

	const _getMovieCredits = async () => {
		try {
			const director: string[] = await getMovieCredits({
				searchMoviesOutput,
				movieId: movie.id,
			})
			movie.director = director.join(", ")
		} catch (error: any) {
			console.error(error)
		}
	}

	const _addMovie = async () => {
		await _getMovieCredits()
		await dispatch(addMovie({ movie }))
		router.push("/")
	}

	return (
		<button
			type="button"
			onClick={() => _addMovie()}
			className="flex items-center h-fit text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-800 shadow-lg shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
			disabled={requestStatus === RequestStatus.LOADING}
		>
			{requestStatus === RequestStatus.LOADING && <Spinner />}
			Ajouter à ma liste
		</button>
	)
}
