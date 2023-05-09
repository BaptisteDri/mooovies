import { GenresList } from "@/components/genres-list"
import { useLanguageFullName } from "@/hooks/useLanguageFullName"

interface Props {
	year: string
	genreIds: string[] | number[]
	originalLanguage: string
}

export const MovieDetails = ({ genreIds, originalLanguage, year }: Props) => {
	return (
		<ul
			role="list"
			className="divide-y divide-gray-200 dark:divide-gray-700 mt-6 mb-8"
		>
			<li className="h-12 flex justify-between items-center">
				<p className="text-sm text-gray-500 truncate dark:text-gray-400">
					Année de sortie
				</p>
				<div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
					{year}
				</div>
			</li>
			<li className="h-12 flex justify-between items-center">
				<p className="text-sm text-gray-500 truncate dark:text-gray-400">
					Genre(s)
				</p>
				<GenresList genreIds={genreIds} />
			</li>
			<li className="h-12 flex justify-between items-center">
				<p className="text-sm text-gray-500 truncate dark:text-gray-400">
					Langue
				</p>
				<div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
					{useLanguageFullName(originalLanguage)}
				</div>
			</li>
		</ul>
	)
}
