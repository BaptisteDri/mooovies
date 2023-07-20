import { GenresList } from "@/components/genres-list"
import { useLanguageFullName } from "@/hooks/useLanguageFullName"
import { ShortenedText } from "./shortened-text"

type Props = {
	year: string
	genreIds: string[] | number[]
	originalLanguage: string
	overview: string
	director?: string
}

export const MovieDetails = ({
	genreIds,
	originalLanguage,
	year,
	overview,
	director,
}: Props) => {
	return (
		<div className="mb-8">
			<h3 className="text-white mb-2 font-semibold mt-8">Détails</h3>
			<ul
				role="list"
				className="divide-y divide-gray-200 dark:divide-gray-700 mb-8 text-sm"
			>
				{director && (
					<li className="h-12 flex justify-between items-center">
						<p className="text-gray-500 truncate dark:text-gray-400">
							Réalisateur(s)
						</p>
						<div className="inline-flex items-center text-gray-900 dark:text-white">
							{director}
						</div>
					</li>
				)}
				<li className="h-12 flex justify-between items-center">
					<p className="text-gray-500 truncate dark:text-gray-400">
						Année de sortie
					</p>
					<div className="inline-flex items-center text-gray-900 dark:text-white">
						{year}
					</div>
				</li>
				<li className="h-12 flex justify-between items-center">
					<p className="text-gray-500 truncate dark:text-gray-400">
						Genre(s)
					</p>
					<GenresList genreIds={genreIds} />
				</li>
				<li className="h-12 flex justify-between items-center">
					<p className="text-gray-500 truncate dark:text-gray-400">
						Langue
					</p>
					<div className="inline-flex items-center text-gray-900 dark:text-white capitalize">
						{useLanguageFullName(originalLanguage)}
					</div>
				</li>
			</ul>
			<ShortenedText text={overview} title="Résumé" />
		</div>
	)
}
