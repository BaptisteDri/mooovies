import { SearchedMovie } from "@/types/movie"

interface Props {
	movie: SearchedMovie
}

export const SearchMovieItem = ({ movie }: Props) => {
	return (
		<div className="flex">
			<img
				src={`https://image.tmdb.org/t/p/original/${movie.posterPath}`}
				className="h-48"
			/>
			<div>
				<div className="font-bold text-white">
					{movie.originalTitle}
				</div>
				<div className="text-gray-500">{movie.releaseDate}</div>
			</div>
		</div>
	)
}
