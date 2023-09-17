import { Loader } from "../shared/loader"
import { MovieItem } from "../movies/movie-item"
import { Fragment } from "react"
import { useRouter } from "next/router"
import { useSearchPerson } from "@/ui/hooks/search-movies/use-search-person"
import { SearchBarFilters } from "./search-bar-filters"
import { PersonItem } from "./person-item"

type Props = {
	deferredQuery: string
	resultsType: "movies" | "persons"
	setResultsType: (resultsType: "movies" | "persons") => void
}

export const PersonsList = ({
	deferredQuery,
	resultsType,
	setResultsType,
}: Props) => {
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
			<div className="mb-2">
				<SearchBarFilters
					resultsType={resultsType}
					setResultsType={setResultsType}
				/>
			</div>
			{isFetched && isSuccess && searchedPersons.length === 0 && (
				<div className="text-white text-center">Aucun résultat</div>
			)}

			{isFetching && <Loader />}

			{!isFetching && searchedPersons && searchedPersons.length > 0 && (
				<ul className="grid gap-2 mt-2 md:mt-4">
					{searchedPersons?.map((searchedPerson) =>
						searchedPerson.profilePath ? (
							<PersonItem
								key={searchedPerson.id}
								searchedPerson={searchedPerson}
							/>
						) : (
							<></>
						)
					)}
				</ul>
			)}
		</>
	)
}
