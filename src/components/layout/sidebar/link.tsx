import { useRouter } from "next/router"

interface Props {
	content: string
	icon: React.ReactNode
	path: string
}

export const Link = ({ content, icon, path }: Props) => {
	const router = useRouter()
	const isActive: boolean = router.pathname === path

	return (
		<li>
			<a
				href="#"
				className={`flex items-center px-2 py-3 rounded-lg text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ${
					isActive && "bg-gray-100 dark:bg-gray-700 font-bold"
				}`}
			>
				<span
					style={
						isActive ? { fontVariationSettings: "'FILL' 1" } : {}
					}
					className={`w-6 h-6 transition duration-75 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`}
				>
					{icon}
				</span>
				<span className="ml-3">{content}</span>
			</a>
		</li>
	)
}
