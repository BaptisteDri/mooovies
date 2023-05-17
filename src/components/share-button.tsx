import { Icon } from "./icon"

interface Props {
	url: string
}

export const ShareButton = ({ url }: Props) => {
	const _onShare = async () => {}

	return (
		<button
			onClick={() => _onShare()}
			type="button"
			className="flex items-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-3 py-2 text-center"
		>
			<Icon name="ios_share" className="mr-2 text-base" /> Partager
		</button>
	)
}
