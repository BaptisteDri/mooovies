import { Spinner } from "@/ui/components/shared/spinner"
import { Movie } from "@/modules/shared/types/movie"
import { mapMovieToInfraModel } from "@/modules/movies/infrastructure/movies.mapper"
import { useDeleteMovie } from "@/ui/hooks/movies/use-delete-movie"
import { useRouter } from "next/router"

type Props = {
	movie: Movie
}

export const DeleteMovie = ({ movie }: Props) => {
	const deleteMovie = useDeleteMovie()
	const { push } = useRouter()

	const onDeleteMovie = () => {
		deleteMovie.mutate({ movie: mapMovieToInfraModel(movie) })
		push("/")
	}

	return (
		<button
			onClick={onDeleteMovie}
			className="flex items-center px-4 py-2 text-sm font-medium text-center border rounded-lg focus:outline-none focus:z-10 focus:ring-4 focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700"
			disabled={deleteMovie.isLoading}
		>
			{deleteMovie.isLoading && <Spinner />}
			Supprimer de la liste
		</button>
	)
}
