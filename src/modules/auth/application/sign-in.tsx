import { useEffect } from "react"
import { RequestStatus } from "@/types/request-status"
import { useRouter } from "next/router"
import { signIn } from "@/modules/auth/auth.actions"
import { useAppDispatch, useAppSelector } from "@/config/store"
import {
	selectIsLoggedInUser,
	selectSignInError,
	selectSignInStatus,
} from "@/modules/auth/auth.selectors"
import { CustomError } from "@/types/error"
import { Spinner } from "@/components/spinner"
import Link from "next/link"

export const SignIn = () => {
	const router = useRouter()
	const dispatch = useAppDispatch()

	const isLoggedInUser: boolean = useAppSelector(selectIsLoggedInUser)
	const signInError: CustomError | null = useAppSelector(selectSignInError)
	const signInStatus: RequestStatus = useAppSelector(selectSignInStatus)

	useEffect(() => {
		if (isLoggedInUser) {
			router.push("/")
		}
	}, [isLoggedInUser])

	const onSignIn = async (event: any) => {
		event.preventDefault()

		const formData = new FormData(event.target)
		const formEntries = Object.fromEntries(formData)
		const email: string = formEntries.email as string
		const password: string = formEntries.password as string

		await dispatch(signIn({ email, password }))
	}

	return (
		<section className="bg-gray-50 dark:bg-gray-900">
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
				<Link
					href="/"
					className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
				>
					{/* <img
							className="w-8 h-8 mr-2"
							src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
							alt="logo"
						/> */}
					Mooovies
				</Link>
				<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
							Connexion
						</h1>
						<form
							className="space-y-4 md:space-y-6"
							onSubmit={onSignIn}
						>
							<div>
								<label
									htmlFor="email"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Email
								</label>
								<input
									type="email"
									name="email"
									id="email"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="name@company.com"
									required
								/>
							</div>
							<div>
								<label
									htmlFor="password"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Mot de passe
								</label>
								<input
									type="password"
									name="password"
									id="password"
									placeholder="••••••••"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									required
								/>
							</div>
							{/* <div className="flex items-center">
									<a
										href="#"
										className="text-sm font-medium text-white hover:underline dark:text-primary-500"
									>
										Mot de passe oublié?
									</a>
								</div> */}
							<button
								type="submit"
								className="flex items-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
								disabled={
									signInStatus === RequestStatus.LOADING
								}
							>
								{signInStatus === RequestStatus.LOADING && (
									<Spinner />
								)}
								Se connecter
							</button>
							<p className="text-sm font-light text-gray-500 dark:text-gray-400">
								Pas encore de compte ?{" "}
								<Link
									href="/sign-up"
									className="font-medium text-primary-600 hover:underline dark:text-primary-500"
								>
									S'inscrire
								</Link>
							</p>
						</form>
						{signInStatus === RequestStatus.FAILED && (
							<div className="mt-8 p-2 text-center bg-red-100 text-red-600 rounded">
								{signInError?.message}
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	)
}
