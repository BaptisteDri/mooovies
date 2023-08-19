import { CustomError } from "@/modules/shared/types/error"
import { Session } from "@/modules/shared/types/user"
import { RequestStatus } from "@/modules/shared/types/request-status"

export interface AuthState {
	session: Session | null
	signInError: CustomError | null
	signInStatus: RequestStatus
	signUpError: CustomError | null
	signUpStatus: RequestStatus
	signOutError: CustomError | null
	signOutStatus: RequestStatus
}

export const initialState: AuthState = {
	session: null,
	signInError: null,
	signInStatus: RequestStatus.IDLE,
	signUpError: null,
	signUpStatus: RequestStatus.IDLE,
	signOutError: null,
	signOutStatus: RequestStatus.IDLE,
}
