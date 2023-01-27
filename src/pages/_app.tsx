import type { AppProps } from "next/app"

import Head from "next/head"

import { Toaster } from "react-hot-toast"
import { GlobalProvider } from "src/features/global"

import "../styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Nextjs Template</title>
			</Head>
			<Toaster />
			<GlobalProvider>
				<Component {...pageProps} />
			</GlobalProvider>
		</>
	)
}

export default MyApp
