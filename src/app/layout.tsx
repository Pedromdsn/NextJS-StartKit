import "../fonts"
import "../styles/globals.css"

export default function RootLayout({ children }: WithChildren) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="favicon.ico" type="image/x-icon" />
				<meta name="description" content="Don't forget check my github https://github.com/pedromdsn" />
				<meta name="author" content="Pedromdsn <me@pedromdsn.com>" />
				<title>Nextjs Template</title>
			</head>
			<body className="font-Roboto scrollbar-thin scrollbar-track-gray-400 scrollbar-thumb-gray-700">{children}</body>
		</html>
	)
}
