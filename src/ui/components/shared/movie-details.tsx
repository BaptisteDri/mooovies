import { GenresList } from "@/ui/components/shared/genres-list"
import { useLanguageFullName } from "@/ui/hooks/use-language-fullname"
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
			<ul role="list" className="divide-y divide-slate-900 mb-8 text-sm">
				{director && (
					<li className="h-12 flex justify-between items-center">
						<p className="truncate text-slate-400">
							Réalisateur(s)
						</p>
						<div className="inline-flex items-center text-white">
							{director}
						</div>
					</li>
				)}
				<li className="h-12 flex justify-between items-center">
					<p className="truncate text-slate-400">Année de sortie</p>
					<div className="inline-flex items-center text-white">
						{year}
					</div>
				</li>
				<li className="h-12 flex justify-between items-center">
					<p className="truncate text-slate-400">Genre(s)</p>
					<GenresList genreIds={genreIds} />
				</li>
				<li className="h-12 flex justify-between items-center">
					<p className="truncate text-slate-400">Langue</p>
					<div className="inline-flex items-center text-white capitalize">
						{useLanguageFullName(originalLanguage)}
					</div>
				</li>
			</ul>
			<ShortenedText text={overview} title="Résumé" />
		</div>
	)
}
