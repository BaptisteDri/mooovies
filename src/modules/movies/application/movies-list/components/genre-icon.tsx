import { useGenreIcon } from "@/hooks/useGenre"

interface Props {
	genre: string
}

export const GenreIcon = ({ genre }: Props) => (
	<div className="relative flex flex-col items-center group">
		<span className="hover:text-gray-400 text-2xl">{useGenreIcon(16)}</span>
		<div className="absolute top-0 flex-col items-center hidden mt-6 group-hover:flex">
			<div className="w-3 h-3 -mb-2 rotate-45 bg-gray-700"></div>
			<span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-gray-700 rounded-lg">
				{genre}
			</span>
		</div>
	</div>
)
