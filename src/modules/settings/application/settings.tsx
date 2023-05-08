import { useRouter } from "next/router"
import { useAppDispatch } from "@/config/store"
import { signOut } from "@/modules/auth/auth.actions"
import { selectLocalSessionData } from "@/modules/auth/auth.selectors"
import { Session } from "@/types/user"
import { Icon } from "@/components/icon"

export const Settings = () => {
	const router = useRouter()
	const dispatch = useAppDispatch()
	const localSessionData: Session | null = selectLocalSessionData()

	const onSignOut = async () => {
		await dispatch(signOut())

		await router.push("/sign-in")
	}

	const onDeleteAccount = async () => {}

	return (
		<div>
			<h2 className="text-white mb-6 text-lg">
				Bonjour,{" "}
				<span className="font-bold">
					{localSessionData?.user.email}
				</span>
				.
			</h2>
			<button
				onClick={() => onSignOut()}
				type="button"
				className="flex items-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
			>
				<Icon className="mr-2" name="logout" />
				Se déconnecter
			</button>
			{/* <button className="mt-3 text-gray-600 text-xs underline">
				Supprimer mon compte
			</button> */}
		</div>
	)
}
