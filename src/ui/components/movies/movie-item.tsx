import { Icon } from "@/ui/components/shared/icon"
import { usePosterFullPath } from "@/ui/hooks/use-poster-full-path"
import Image from "next/image"
import { useMergedClassName } from "@/ui/hooks/use-merged-classname"

type Props = {
	title: string
	poster: string
	watchedDate: string | null
	onClick?: () => void
}

export const MovieItem = ({ title, poster, watchedDate, onClick }: Props) => {
	const mCn = useMergedClassName()

	return (
		<li
			onClick={onClick}
			className="cursor-pointer relative rounded-lg overflow-hidden w-full aspect-[27/40] table sm:block min-w-min bg-slate-800"
			role="link"
		>
			<Image
				src={usePosterFullPath(poster)}
				alt={title}
				fill
				className="object-cover animate-fadeIn"
				quality={15}
				loading="lazy"
				sizes="100%"
			/>

			<div
				className={mCn(
					"top-0 right-0 absolute bg-blue-600 h-7 w-7 rounded-bl-xl flex items-center justify-center drop-shadow-lg translate-x-full -translate-y-full rotate-90 ease-in-out transition-all duration-150",
					watchedDate && "translate-x-0 rotate-0 translate-y-0"
				)}
			>
				<Icon
					name="check_circle"
					className="text-gray-200 drop-shadow-[0px_0px_5px_rgba(255,255,255,0.4)] text-[20px]"
					fill
				/>
			</div>
		</li>
	)
}
