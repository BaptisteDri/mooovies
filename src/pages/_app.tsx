import "react-toastify/dist/ReactToastify.css"
import "../styles/globals.css"
import type { AppProps } from "next/app"
import { Provider } from "react-redux"
import { store } from "@/config/store"
import { ToastContainer } from "react-toastify"

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<ToastContainer />
			<Component {...pageProps} />
		</Provider>
	)
}

export default MyApp
