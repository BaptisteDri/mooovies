import { useGenreIcon, useGenreName } from "@/hooks/useGenre"

interface Props {
	genreIds: number[] | string[]
}

export const GenresList = ({ genreIds }: Props) => (
	<div className="inline-flex items-center text-base gap-4 font-semibold text-gray-900 dark:text-white">
		{genreIds.map((genreId) => (
			<div
				key={genreId}
				className="relative flex flex-col items-center group"
			>
				<span className="hover:text-gray-400 text-2xl">
					{useGenreIcon(genreId)}
				</span>
				<div className="absolute top-0 flex-col items-center hidden mt-6 group-hover:flex">
					<div className="w-3 h-3 -mb-2 rotate-45 bg-gray-700"></div>
					<span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-gray-700 rounded-lg">
						{useGenreName(genreId)}
					</span>
				</div>
			</div>
		))}
	</div>
)
