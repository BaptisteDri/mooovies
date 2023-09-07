import { useMergedClassName } from "@/ui/hooks/use-merged-classname"

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
				<button
					className={mCn(
						"flex items-center justify-center h-8 px-2  border rounded-xl cursor-pointer hover:text-slate-300 border-slate-700 text-slate-400 bg-slate-800 hover:bg-slate-700",
						order === "title" && "text-slate-300 border-blue-600"
					)}
					onClick={() => toggleOrder("title")}
				>
					🔠 Titres
				</button>
				<button
					className={mCn(
						"flex items-center justify-center h-8 px-2  border rounded-xl cursor-pointer hover:text-slate-300 border-slate-700 text-slate-400 bg-slate-800 hover:bg-slate-700",
						order === "added_date" &&
							"text-slate-300 border-blue-600"
					)}
					onClick={() => toggleOrder("added_date")}
				>
					🗓️ Date d'ajout
				</button>
				<button
					className={mCn(
						"flex items-center justify-center h-8 px-2  border rounded-xl cursor-pointer hover:text-slate-300 border-slate-700 text-slate-400 bg-slate-800 hover:bg-slate-700",
						order === "year" && "text-slate-300 border-blue-600"
					)}
					onClick={() => toggleOrder("year")}
				>
					📽️ Date de sortie
				</button>
			</div>
		</div>
	)
}
