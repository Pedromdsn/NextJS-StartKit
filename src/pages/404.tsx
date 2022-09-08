import { NextPage } from "next"
import { useRouter } from "next/router"
import { useEffect } from "react"

const NotFoundPage: NextPage = () => {
	const router = useRouter()
	useEffect(() => {
		const action = setTimeout(() => router.push("/"), 5000)
		return () => clearTimeout(action)
	}, [])

	return (
		<div className="flex min-h-screen flex-col items-center justify-center py-2 pb-[3%]">
			<h1 className="text-9xl text-">404</h1>
			<p className="text-2xl text-secondary">Returning to the home page</p>
		</div>
	)
}

export default NotFoundPage
