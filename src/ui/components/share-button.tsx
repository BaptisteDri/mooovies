import { Icon } from "./shared/icon"

type Props = {
	url: string
}

export const ShareButton = ({ url }: Props) => {
	const copyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(url)
			// toast("Lien copié dans le presse-papiers!", {
			// 	theme: "dark",
			// 	position: "top-center",
			// })
		} catch (error) {
			console.error(
				"Erreur lors de la copie dans le presse-papier :",
				error
			)
		}
	}

	return (
		<button
			onClick={() => copyToClipboard()}
			type="button"
			className="w-fit flex items-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-800 shadow-lg shadow-blue-800/80 font-medium rounded-lg text-sm px-3 py-2 text-center"
		>
			<Icon name="ios_share" className="sm:mr-2 sm:leading-4 text-base" />
			<span className="hidden sm:block">Partager</span>
		</button>
	)
}
