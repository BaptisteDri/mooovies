import { useRouter } from "next/router"
import NextLink from "next/link"
import { useMergedClassName } from "@/hooks/useMergedClassName"
import { useMemo } from "react"

type Props = {
	content: string
	icon: React.ReactNode
	path: string
}

export const Link = ({ content, icon, path }: Props) => {
	const router = useRouter()
	const isActive: boolean = useMemo(
		() => router.pathname === path,
		[path, router.pathname]
	)
	const mergedClassName = useMergedClassName()

	return (
		<li>
			<NextLink
				scroll={false}
				href={path}
				className={mergedClassName(
					"flex items-center px-2 py-3 rounded-lg text-white hover:bg-gray-700",
					isActive && "bg-gray-700 font-bold"
				)}
			>
				<span
					style={
						isActive ? { fontVariationSettings: "'FILL' 1" } : {}
					}
					className={mergedClassName(
						"w-6 h-6 transition duration-75 text-gray-400 group-hover:text-white",
						isActive && "text-white"
					)}
				>
					{icon}
				</span>
				<span className="ml-3">{content}</span>
			</NextLink>
		</li>
	)
}
