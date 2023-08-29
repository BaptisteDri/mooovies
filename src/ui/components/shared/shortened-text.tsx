import { useState } from "react"

type Props = {
	text: string
	title?: string
}

export const ShortenedText = ({ text, title }: Props) => {
	const [isShortened, setIsShortened] = useState(true)

	const toggleReduction = () => {
		setIsShortened(!isShortened)
	}

	return (
		<>
			{title && (
				<h3 className="text-white mb-2 font-semibold">{title}</h3>
			)}
			<p className="text-gray-400">
				{text}
				{/* {text.length <= 200 ? (
					text
				) : isShortened ? (
					<>
						{text.slice(0, 200)}...&nbsp;
						<button
							className="text-white underline text-xs"
							onClick={() => toggleReduction()}
						>
							Voir plus
						</button>
					</>
				) : (
					<>
						{text}&nbsp;
						<button
							className="text-white underline text-xs"
							onClick={() => toggleReduction()}
						>
							Réduire
						</button>
					</>
				)} */}
			</p>
		</>
	)
}
