import { Icon } from "./icon"

interface Props {
	url: string
}

export const ShareButton = ({ url }: Props) => {
	const _onShare = async () => {
		if (!navigator) return

		try {
			await navigator.share({
				url,
			})
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<button
			onClick={() => _onShare()}
			type="button"
			className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
		>
			<Icon name="ios_share" />
		</button>
	)
}
