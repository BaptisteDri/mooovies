import { Session } from "@/modules/shared/types/user"
import { OldCustomError as CustomError } from "@/modules/shared/types/error"

export type SignInDto = {
	email: string
	password: string
}

export type SignUpDto = {
	email: string
	password: string
}

export interface AuthOutput {
	signIn(
		signInDto: SignInDto
	): Promise<{ session: Session | null; error: CustomError | null }>

	signUp(signUpDto: SignUpDto): Promise<{ error: CustomError | null }>

	signOut(): Promise<{ error: CustomError | null }>
}
