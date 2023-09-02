import { Icon } from "@/ui/components/shared/icon"
import { useGenre } from "@/ui/hooks/use-genre"
import { useMergedClassName } from "@/ui/hooks/use-merged-classname"

type Props = {
	isSeen?: boolean
	setIsSeen: (isSeen?: boolean) => void
	genreId?: string
	setGenreId: (genreId?: string) => void
	closeFiltersSection: () => void
}

export const Filters = ({
	isSeen,
	setIsSeen,
	genreId,
	setGenreId,
	closeFiltersSection,
}: Props) => {
	const { genres } = useGenre()
	const mCn = useMergedClassName()

	return (
		<div className="grid gap-4">
			<div>
				<div className="text-slate-200 font-semibold mb-2">
					Films vus
				</div>
				<ul className="gap-2 flex">
					<li>
						<input
							type="checkbox"
							id="all_movies"
							className="hidden peer"
							onChange={() => {
								setIsSeen(undefined)
								closeFiltersSection()
							}}
							checked={isSeen === undefined}
						/>
						<label
							htmlFor="all_movies"
							className="select-none flex items-center justify-center h-8 px-2 border rounded-xl cursor-pointer hover:text-slate-300 border-slate-700 peer-checked:border-blue-600 peer-checked:text-slate-300 text-slate-400 bg-slate-800 hover:bg-slate-700"
						>
							🎬&nbsp;Tous
						</label>
					</li>
					<li>
						<input
							type="checkbox"
							id="seen_movies"
							className="hidden peer"
							onChange={() => {
								isSeen === true
									? setIsSeen(undefined)
									: setIsSeen(true)
								closeFiltersSection()
							}}
							checked={isSeen === true}
						/>
						<label
							htmlFor="seen_movies"
							className="select-none flex items-center justify-center h-8 px-2 border rounded-xl cursor-pointer hover:text-slate-300 border-slate-700 peer-checked:border-blue-600 peer-checked:text-slate-300 text-slate-400 bg-slate-800 hover:bg-slate-700"
						>
							✅&nbsp;Films vus
						</label>
					</li>
					<li>
						<input
							type="checkbox"
							id="not_seen_movies"
							className="hidden peer"
							onChange={() => {
								isSeen === false
									? setIsSeen(undefined)
									: setIsSeen(false)
								closeFiltersSection()
							}}
							checked={isSeen === false}
						/>
						<label
							htmlFor="not_seen_movies"
							className="select-none flex items-center justify-center h-8 px-2 border rounded-xl cursor-pointer hover:text-slate-300 border-slate-700 peer-checked:border-blue-600 peer-checked:text-slate-300 text-slate-400 bg-slate-800 hover:bg-slate-700"
						>
							👀&nbsp;Films à voir
						</label>
					</li>
				</ul>
			</div>
			<div>
				<div className="text-slate-200 font-semibold mb-2">
					Catégories
				</div>
				<div className="flex gap-2 flex-wrap">
					<button
						className={mCn(
							"flex items-center justify-center h-8 px-2  border rounded-xl cursor-pointer hover:text-slate-300 border-slate-700 text-slate-400 bg-slate-800 hover:bg-slate-700",
							genreId === undefined &&
								"text-slate-300 border-blue-600"
						)}
						onClick={() => {
							setGenreId(undefined)
							closeFiltersSection()
						}}
					>
						🎬&nbsp;Toutes
					</button>
					{genres.map((genre) => (
						<button
							key={genre.id}
							className={mCn(
								"flex items-center justify-center h-8 px-2  border rounded-xl cursor-pointer hover:text-slate-300 border-slate-700 text-slate-400 bg-slate-800 hover:bg-slate-700",
								genreId === (genre.id as unknown as string) &&
									"text-slate-300 border-blue-600"
							)}
							onClick={() => {
								genreId === (genre.id as unknown as string)
									? setGenreId(undefined)
									: setGenreId(genre.id as unknown as string)
								closeFiltersSection()
							}}
						>
							{genre.icon}&nbsp;{genre.name}
						</button>
					))}
				</div>
			</div>
		</div>
	)
}
