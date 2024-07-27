import { MovieDetails } from "./movie-details"
import Image from "next/image"
import { Movie } from "@/modules/shared/types/movie"
import { selectIsLoggedInSession } from "@/modules/auth/auth.selectors"
import { useAppSelector } from "@/config/store"
import { Title } from "./title"
import { usePosterFullPath } from "@/ui/hooks/use-poster-full-path"
import { Icon } from "./icon"
import { useRouter } from "next/router"
import { MovieRecordActions } from "./movie-record-actions"

type Props = {
	isInMainList: boolean
	movie: Omit<Movie, "uuid"> & { uuid?: string }
}

export const MovieRecord = ({ isInMainList, movie }: Props) => {
	const isLoggedInSession = useAppSelector(selectIsLoggedInSession)
	const { back } = useRouter()
	const { w780Path } = usePosterFullPath(movie?.poster)

	return (
		<div>
			<header>
				<div className="relative w-full aspect-[5/3] max-h-96 bg-slate-800">
					<Image
						src={w780Path}
						alt={movie.title}
						fill
						className="object-cover object-top"
						sizes="100vw"
						priority
					/>
					<div className="bg-gradient-to-b from-transparent via-transparent to-slate-950 absolute w-full h-full flex flex-col justify-between pt-4 px-4">
						<div className="flex justify-end">
							<div
								role="link"
								onClick={() => back()}
								className="select-none flex items-center justify-center h-11 w-11  border rounded-2xl cursor-pointer hover:text-slate-300 border-slate-700 text-slate-400 bg-slate-800 hover:bg-slate-700"
							>
								<Icon name="close" />
							</div>
						</div>

						<div>
							<Title className="mb-2 text-2xl">
								{movie.title}
							</Title>

							<p className="text-sm text-slate-400">
								({movie.originalTitle})
							</p>
						</div>
					</div>
				</div>
			</header>

			<div className="p-4 sm:p-6">
				{isLoggedInSession && (
					<MovieRecordActions
						isInMainList={isInMainList}
						movie={movie}
					/>
				)}

				<MovieDetails
					year={movie.year}
					genreIds={movie.genreIds}
					originalLanguage={movie.originalLanguage}
					overview={movie.overview}
					director={movie.director}
				/>
			</div>
		</div>
	)
}
