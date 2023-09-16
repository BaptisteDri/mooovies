import { useMergedClassName } from "@/ui/hooks/use-merged-classname"
import { FilterButton } from "../shared/filter-button"

type Props = {
	order: "title" | "year" | "added_date"
	setOrder: (order: "title" | "year" | "added_date") => void
	closeFiltersSection: () => void
}

export const Order = ({ order, setOrder, closeFiltersSection }: Props) => {
	const mCn = useMergedClassName()

	const toggleOrder = (order: "title" | "year" | "added_date") => {
		setOrder(order)
		closeFiltersSection()
	}

	return (
		<div>
			<div className="text-slate-200 font-semibold mb-2">Trier par</div>
			<div className="flex gap-2 flex-wrap">
				<FilterButton
					isActive={order === "added_date"}
					onClick={() => toggleOrder("added_date")}
					title={"🗓️ Date d'ajout"}
				/>
				<FilterButton
					isActive={order === "title"}
					onClick={() => toggleOrder("title")}
					title={"🔠 Titres"}
				/>
				<FilterButton
					isActive={order === "year"}
					onClick={() => toggleOrder("year")}
					title={"📽️ Date de sortie"}
				/>
			</div>
		</div>
	)
}
