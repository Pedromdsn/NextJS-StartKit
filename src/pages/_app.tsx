import type { AppProps } from "next/app"

import Head from "next/head"

import { GlobalContext } from "src/features/global"

import "../styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Nextjs Template</title>
			</Head>
			<GlobalContext>
				<Component {...pageProps} />
			</GlobalContext>
		</>
	)
}

export default MyApp
