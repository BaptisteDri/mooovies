import type { NextPage } from "next"
import { Head } from "@/ui/components/head"
import { SignIn } from "@/modules/auth/application/sign-in"

const SignInPage: NextPage = () => {
	return (
		<>
			<Head />

			<SignIn />
		</>
	)
}

export default SignInPage
