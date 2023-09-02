import { useRouter } from "next/router"
import { Icon } from "../shared/icon"

export const MoviesListPlaceholder = () => {
	const { push } = useRouter()

	return (
		<div className="text-white justify-center flex-1 mt-4 grid place-items-center">
			<div className="flex flex-col items-center mt-6">
				<div>🙈</div>
				<div className="text-lg px-6 text-center mb-10">
					Nous n'avons trouvé aucun film dans votre liste
				</div>
				<div className="relative inline-flex group">
					<div className="animate-tilt md:group-hover:animate-none absolute transition-all duration-500 opacity-90 -inset-2 bg-gradient-to-r from-green-800 via-sky-800 to-pink-800 rounded-xl blur-xl md:group-hover:opacity-100 md:group-hover:-inset-4 md:group-hover:duration-200" />
					<button
						className="relative inline-flex items-center justify-center px-4 h-11 text-lg text-white transition-all duration-200 bg-slate-950 rounded-xl pr-2.5 focus:outline-blue-600 border-0 focus:border-0 cursor-pointer"
						onClick={() => push("/add-movie")}
						role="link"
					>
						Ajouter des films
						<Icon name="arrow_right_alt" className="ml-2" />
					</button>
				</div>
			</div>
		</div>
	)
}
