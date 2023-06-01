"use client"

import { NextPage } from "next"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const NotFoundPage: NextPage = () => {
	const router = useRouter()
	useEffect(() => {
		const action = setTimeout(() => router.push("/"), 5000)
		return () => clearTimeout(action)
	}, [])

	return (
		<div className="flex min-h-screen flex-col items-center justify-center py-2 pb-[3%]">
			<h1 className="text- text-9xl">404</h1>
			<p className="text-secondary text-2xl">Returning to the home page</p>
		</div>
	)
}

export default NotFoundPage
