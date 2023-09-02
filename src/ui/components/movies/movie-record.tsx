import { MovieDetails } from "../shared/movie-details"
import Image from "next/image"
import { DeleteMovie } from "./delete-movie"
import { ToggleMovieSeen } from "./toggle-movie-seen"
import { Movie } from "@/modules/shared/types/movie"
import { selectIsLoggedInSession } from "@/modules/auth/auth.selectors"
import { useAppSelector } from "@/config/store"
import { Title } from "../shared/title"
import { usePosterFullPath } from "@/ui/hooks/use-poster-full-path"
import { Icon } from "../shared/icon"
import { useRouter } from "next/router"

type Props = {
	movie: Movie
}

export const MovieRecord = ({ movie }: Props) => {
	const isLoggedInSession = useAppSelector(selectIsLoggedInSession)
	const { back } = useRouter()

	return (
		<div>
			<header>
				<div className="relative w-full aspect-[5/3] max-h-96 bg-slate-800">
					<Image
						src={usePosterFullPath(movie.poster)}
						alt={movie.title}
						fill
						className="object-cover object-top"
						quality={15}
						loading="lazy"
						sizes="100%"
					/>
					<div className="bg-gradient-to-b from-transparent via-transparent to-slate-950 absolute w-full h-full flex flex-col justify-between pt-4 px-4">
						<div
							role="link"
							onClick={() => back()}
							className="select-none flex items-center justify-center h-11 w-11  border rounded-2xl cursor-pointer hover:text-slate-300 border-slate-700 text-slate-400 bg-slate-800 hover:bg-slate-700"
						>
							<Icon name="arrow_left_alt" />
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

			<div className="p-4 sm:p-6 max-w-2xl">
				{isLoggedInSession && <ToggleMovieSeen movie={movie} />}

				<MovieDetails
					year={movie.year}
					genreIds={movie.genreIds}
					originalLanguage={movie.originalLanguage}
					overview={movie.overview}
					director={movie.director}
				/>

				{isLoggedInSession && <DeleteMovie movie={movie} />}
			</div>
		</div>
	)
}
