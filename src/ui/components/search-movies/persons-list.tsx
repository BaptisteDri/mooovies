import { Loader } from "../shared/loader"
import { MovieItem } from "../movies/movie-item"
import { Fragment } from "react"
import { useRouter } from "next/router"
import { useSearchPerson } from "@/ui/hooks/search-movies/use-search-person"

type Props = {
	deferredQuery: string
}

export const PersonsList = ({ deferredQuery }: Props) => {
	const { push } = useRouter()

	const {
		data: searchedPersons,
		isFetching,
		isFetched,
		isSuccess,
	} = useSearchPerson({
		query: deferredQuery,
		enabled: true,
	})

	return (
		<>
			{isFetched && isSuccess && searchedPersons.length === 0 && (
				<div className="text-white text-center">Aucun résultat</div>
			)}

			{isFetching && <Loader />}

			{!isFetching && searchedPersons && searchedPersons.length > 0 && (
				<ul className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-2 sm:gap-6 mt-2 md:mt-4">
					{searchedPersons?.map((searchedPersons) => (
						<div key={searchedPersons.id} className="text-white">
							{searchedPersons.name}
						</div>
					))}
				</ul>
			)}
		</>
	)
}
