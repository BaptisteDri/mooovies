import type { NextPage } from "next"
import { Head } from "@/ui/components/shared/head"
import { SignUp } from "@/modules/auth/application/sign-up"

const SignUpPage: NextPage = () => {
	return (
		<>
			<Head />
			<SignUp />
		</>
	)
}

export default SignUpPage
