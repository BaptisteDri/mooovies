import { Icon } from "@/ui/components/shared/icon"
import { useGenre } from "@/ui/hooks/use-genre"
import { useMergedClassName } from "@/ui/hooks/use-merged-classname"
import { FilterButton } from "../shared/filter-button"

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

	const toggleIsSeenFilter = (isSeen?: boolean) => {
		setIsSeen(isSeen)
		closeFiltersSection()
	}

	const toggleGenreId = (genreId?: string) => {
		setGenreId(genreId)
		closeFiltersSection()
	}

	return (
		<div className="grid gap-4">
			<div>
				<div className="text-slate-200 font-semibold mb-2">
					Films vus
				</div>
				<div className="flex gap-2 flex-wrap">
					<FilterButton
						isActive={isSeen === undefined}
						title={"🎬 Tous"}
						onClick={() => toggleIsSeenFilter(undefined)}
					/>
					<FilterButton
						isActive={isSeen === true}
						title={"✅ Films vus"}
						onClick={() => toggleIsSeenFilter(true)}
					/>
					<FilterButton
						isActive={isSeen === false}
						title={"👀 Films à voir"}
						onClick={() => toggleIsSeenFilter(false)}
					/>
				</div>
			</div>
			<div>
				<div className="text-slate-200 font-semibold mb-2">
					Catégories
				</div>
				<div className="flex gap-2 flex-wrap">
					<FilterButton
						isActive={genreId === undefined}
						title="🎬 Toutes"
						onClick={() => toggleGenreId()}
					/>
					{genres.map((genre) => (
						<FilterButton
							key={genre.id}
							isActive={
								genreId === (genre.id as unknown as string)
							}
							title={`${genre.icon} ${genre.name}`}
							onClick={() =>
								toggleGenreId(genre.id as unknown as string)
							}
						/>
					))}
				</div>
			</div>
		</div>
	)
}
