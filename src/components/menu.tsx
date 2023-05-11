import NextLink from "next/link"
import { Icon } from "./icon"
import { useAppSelector } from "@/config/store"
import { selectIsLoggedInSession } from "@/modules/auth/auth.selectors"
import { useIsStandalone } from "@/hooks/useIsStandalone"

export const Menu = () => {
	const isLoggedInSession: boolean = useAppSelector(selectIsLoggedInSession)
	const isStandalone: boolean = useIsStandalone()

	return isLoggedInSession ? (
		<div
			className={`fixed bottom-0 z-30 w-full -translate-x-1/2 border-t border-gray-700 left-1/2 bg-gray-800 ${
				isStandalone && "pb-6"
			}`}
		>
			<div className="grid h-full max-w-lg grid-cols-3 mx-auto">
				<NextLink
					href={"/"}
					className="inline-flex flex-col items-center justify-center group text-white p-4"
				>
					<Icon name="home" />
				</NextLink>

				<NextLink
					href={"/add-movie"}
					className="inline-flex flex-col items-center justify-center group text-white"
				>
					<Icon name="add_circle" className="text-4xl" fill />
				</NextLink>
				<NextLink
					href={"/settings"}
					className="inline-flex flex-col items-center justify-center group text-white p-4"
				>
					<Icon name="manage_accounts" />
				</NextLink>
			</div>
		</div>
	) : (
		<></>
	)
}
