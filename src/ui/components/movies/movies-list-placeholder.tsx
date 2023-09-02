import { useRouter } from "next/router"
import { Button } from "../shared/button"
import { Icon } from "../shared/icon"

export const MoviesListPlaceholder = () => {
	const { push } = useRouter()

	return (
		<div className="text-white justify-center flex-1 mt-4 grid place-items-center">
			<div className="flex flex-col items-center">
				<div>🙈</div>
				<div className="text-lg px-6 text-center mb-6">
					Nous n'avons trouvé aucun film dans votre liste
				</div>
				<Button
					onClick={() => push("/add-movie")}
					role="link"
					className="pr-2.5 focus:outline-blue-600 border-0 focus:border-0"
				>
					Ajouter des films
					<Icon name="arrow_right_alt" className="ml-2" />
				</Button>
			</div>
		</div>
	)
}
