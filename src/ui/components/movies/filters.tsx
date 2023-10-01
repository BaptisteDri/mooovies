import { Icon } from "@/ui/components/shared/icon"
import { useGenre } from "@/ui/hooks/use-genre"
import { useMergedClassName } from "@/ui/hooks/use-merged-classname"
import { FilterButton } from "../shared/filter-button"
import { useMoviesFilters } from "@/ui/hooks/contexts/use-movies-filters"

type Props = {
	closeFiltersSection: () => void
}

export const Filters = ({ closeFiltersSection }: Props) => {
	const { genres } = useGenre()
	const {
		moviesFilters: { order, filters },
		setMoviesFilters,
	} = useMoviesFilters()

	const toggleIsSeenFilter = (isSeen?: boolean) => {
		setMoviesFilters({
			order,
			filters: {
				genreId: filters?.genreId,
				title: filters?.title,
				isSeen,
			},
		})
		closeFiltersSection()
	}

	const toggleGenreId = (genreId?: string) => {
		setMoviesFilters({
			order,
			filters: {
				title: filters?.title,
				isSeen: filters?.isSeen,
				genreId,
			},
		})
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
						isActive={filters?.isSeen === undefined}
						title={"🎬 Tous"}
						onClick={() => toggleIsSeenFilter(undefined)}
					/>
					<FilterButton
						isActive={filters?.isSeen === true}
						title={"✅ Films vus"}
						onClick={() => toggleIsSeenFilter(true)}
					/>
					<FilterButton
						isActive={filters?.isSeen === false}
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
						isActive={filters?.genreId === undefined}
						title="🎬 Toutes"
						onClick={() => toggleGenreId()}
					/>
					{genres.map((genre) => (
						<FilterButton
							key={genre.id}
							isActive={
								filters?.genreId ===
								(genre.id as unknown as string)
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
