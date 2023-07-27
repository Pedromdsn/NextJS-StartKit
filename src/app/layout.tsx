import "../fonts"
import "../styles/globals.css"

import HeadBar from "@/components/global/Header"

export default function RootLayout({ children }: WithChildren) {
	return (
		<html lang="en">
			<head>
				<title>Nextjs Template</title>
				<link rel="icon" href="favicon.ico" type="image/x-icon" />
				<meta name="description" content="Don't forget check my github https://github.com/pedromdsn" />
				<meta name="author" content="Pedromdsn <me@pedromdsn.com>" />
			</head>
			<body className="flex min-h-screen flex-col font-main scrollbar-thin scrollbar-track-gray-400 scrollbar-thumb-gray-700">
				<HeadBar />
				{children}
			</body>
		</html>
	)
}
