import { SearchedPerson } from "@/modules/shared/types/movie"
import { usePosterFullPath } from "@/ui/hooks/use-poster-full-path"
import Image from "next/image"
import { MovieItem } from "../movies/movie-item"
import { Fragment } from "react"
import { useRouter } from "next/router"

type Props = { searchedPerson: SearchedPerson }

export const PersonItem = ({ searchedPerson }: Props) => {
	const { push } = useRouter()
	const { w92Path } = usePosterFullPath(searchedPerson.profilePath)

	return (
		<div
			key={searchedPerson.id}
			className="text-white border-b border-slate-900 pb-6 pt-4 first-of-type:pt-0 last-of-type:border-0"
		>
			<div className="flex items-center gap-2">
				<div className="h-14 w-14 overflow-hidden relative rounded-2xl">
					<Image
						src={w92Path}
						alt={searchedPerson.name}
						fill
						className="object-cover"
						loading="lazy"
						sizes="56px"
					/>
				</div>
				<div className="grid gap-0.5">
					<div>{searchedPerson.name}</div>
					<div className="text-sm text-slate-400">
						{searchedPerson.knownForDepartment === "Acting" &&
							"(Acteur)"}
						{searchedPerson.knownForDepartment === "Directing" &&
							"(Réalisateur)"}
					</div>
				</div>
			</div>
			<ul className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-2 sm:gap-6 mt-2 md:mt-4">
				{searchedPerson.knownFor?.map((searchedMovie) =>
					searchedMovie.posterPath &&
					searchedMovie.mediaType === "movie" ? (
						<MovieItem
							key={searchedMovie.tmdbId}
							poster={searchedMovie.posterPath}
							title={searchedMovie.title}
							watchedDate={null}
							onClick={() =>
								push(`/movie/${searchedMovie.tmdbId}`)
							}
						/>
					) : (
						<Fragment key={searchedMovie.tmdbId} />
					)
				)}
			</ul>
		</div>
	)
}
