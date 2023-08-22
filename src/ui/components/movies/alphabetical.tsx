import { Movie } from "@/modules/shared/types/movie"
import { MovieItem } from "./movie-item"
import { isCharLetter } from "@/ui/utils/characters"

type Props = {
	movies: Movie[]
}

export const Alphabetical = ({ movies }: Props) => {
	const removeAccents = (str: string) => {
		return str
			.normalize("NFD")
			.replace(/[\u0300-\u036f]/g, "")
			.replace(/đ/g, "d")
			.replace(/Đ/g, "D")
	}

	// return (
	// 	<div>
	// 		{movies.length > 0 && (
	// 			<h3 className="text-gray-500 mb-4">
	// 				{movies.length} résultats
	// 			</h3>
	// 		)}

	// 		<ul className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-2 sm:gap-4 mt-4">
	// 			{movies.map((movie, i) =>
	// 				movie.director === movies[i - 1]?.director ? (
	// 					<MovieItem key={i} movie={movie} />
	// 				) : (
	// 					<>
	// 						<h2
	// 							key={movie.uuid}
	// 							className="font-bold text-lg col-span-full text-white mt-6 first:mt-0"
	// 						>
	// 							{movie.director}
	// 						</h2>
	// 						<MovieItem key={i} movie={movie} />
	// 					</>
	// 				)
	// 			)}
	// 		</ul>
	// 	</div>
	// )

	return (
		<div>
			{movies.length > 0 && (
				<h3 className="text-gray-500 mb-4">
					{movies.length} résultats
				</h3>
			)}

			<ul className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-2 sm:gap-4 mt-4">
				{movies.map((movie, i) =>
					!isCharLetter(movie.title[0]) ||
					movie.title[0] === movies[i - 1]?.title[0] ? (
						<>
							{!isCharLetter(movie.title[0]) && i === 0 && (
								<h2
									key={movie.title[0]}
									className="font-bold text-lg uppercase col-span-full text-white mt-6 first:mt-0"
								>
									#
								</h2>
							)}
							<MovieItem key={i} movie={movie} />
						</>
					) : (
						<>
							<h2
								key={movie.title[0]}
								className="font-bold text-lg uppercase col-span-full text-white mt-6"
							>
								{movie.title[0]}
							</h2>
							<MovieItem key={i} movie={movie} />
						</>
					)
				)}
			</ul>
		</div>
	)
}
