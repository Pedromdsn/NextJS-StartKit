const RootLayout = ({ children }: WithChildren) => {
	return (
		<html lang="en">
			<title>Nextjs Template</title>
			<link rel="icon" href="favicon.ico" type="image/x-icon" />
			<meta name="description" content="Don't forget check my github https://github.com/pedromdsn" />
			<meta name="author" content="Pedromdsn <me@pedromdsn.com>" />

			<body>{children}</body>
		</html>
	)
}

export default RootLayout
