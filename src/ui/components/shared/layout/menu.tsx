import NextLink from "next/link"
import { Icon } from "@/ui/components/shared/icon"
import { useAppSelector } from "@/config/store"
import { selectIsLoggedInSession } from "@/modules/auth/auth.selectors"
import { useRouter } from "next/router"

export const Menu = () => {
	const isLoggedInSession: boolean = useAppSelector(selectIsLoggedInSession)
	const router = useRouter()

	return isLoggedInSession ? (
		<div
			className={`fixed bottom-0 z-30 w-full -translate-x-1/2 border-t border-slate-800 left-1/2 bg-slate-900 pb-7 pt-2`}
		>
			<div className="grid h-full max-w-lg grid-cols-3 mx-auto">
				<NextLink
					scroll={false}
					href={"/"}
					className="inline-flex flex-col items-center justify-center group text-white"
				>
					<Icon name="home" fill={router.pathname === "/"} />
				</NextLink>

				<NextLink
					href={"/add-movie"}
					className="inline-flex flex-col items-center justify-center group text-white"
				>
					<Icon
						name="library_add"
						className="text-4xl"
						fill={router.pathname === "/add-movie"}
					/>
				</NextLink>
				<NextLink
					href={"/settings"}
					className="inline-flex flex-col items-center justify-center group text-white"
				>
					<Icon
						name="manage_accounts"
						fill={router.pathname === "/settings"}
					/>
				</NextLink>
			</div>
		</div>
	) : (
		<></>
	)
}
