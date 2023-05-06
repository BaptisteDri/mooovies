import { useRouter } from "next/router"

interface Props {
	content: string
	icon: React.ReactNode
	path: string
}

export const Link = ({ content, icon, path }: Props) => {
	const router = useRouter()

	console.log(router.pathname)

	return (
		<li>
			<a
				href="#"
				className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
			>
				<span
					style={
						router.pathname === path
							? { fontVariationSettings: "'FILL' 1" }
							: {}
					}
					className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
				>
					{icon}
				</span>
				<span className="ml-3">{content}</span>
			</a>
		</li>
	)
}
