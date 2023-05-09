import { useState } from "react"

export enum STATUS {
	LOADING,
	IDLE,
	DONE,
}

export const useRequestStatus = () => {
	const [status, setStatus] = useState<STATUS>(STATUS.IDLE)

	return {
		requestStatus: status,
		setRequestStatus: setStatus,
	}
}
